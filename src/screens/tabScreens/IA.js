import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  Platform,
} from "react-native";

import { useState } from "react";
import { IA_DATA, IA_DATA2 } from "../../data/data";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IA() {
  const [selectedIndex, setIsSelectedIndex] = useState();
  const data = selectedIndex === 0 ? IA_DATA : IA_DATA2;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>ia</Text>
      </View>

      <Image
        source={require("../../assets/img/IAbg.png")}
        style={styles.bgImage}
      />
      <View style={styles.tab}>
        <View style={styles.tabHeader}>
          {["Coiffure", "Maquillage"].map((item, index) => (
            <Pressable
              style={{
                flex: 1,
                alignItems: "center",
                paddingVertical: 12,
                borderBottomWidth: selectedIndex === index ? 2 : 1,

                borderColor:
                  selectedIndex === index ? Colors.primary : Colors.border,
              }}
              onPress={() => setIsSelectedIndex(index)}
              key={index}
            >
              <Text
                style={[
                  styles.item,
                  {
                    color:
                      selectedIndex === index ? Colors.primary : Colors.border,
                  },
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.controltab}>
                <Image source={item.image} style={{ width: 61, height: 65 }} />
                <Text style={styles.name}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headertext: {
    textTransform: "uppercase",
    ...FONTS.h1,
    color: Colors.default,
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  controltab: {
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: Colors.white,
    padding: 10,
    gap: 10,
  },
  tab: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    backgroundColor: Colors.white,
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    ...FONTS.textRegular,
  },
  name: {
    ...FONTS.textSmallLight,
    color: Colors.default,
  },
  bgImage: {
    width: "100%",
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: Platform.OS === "android" ? 600 : 567,
  },
});
