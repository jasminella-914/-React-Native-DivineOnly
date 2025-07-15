import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";

import { useState } from "react";
import { IA_DATA, IA_DATA2 } from "../../data/data";
import { Colors } from "../../styles/Colors";
export default function IA({ navigation }) {
  const [selectedIndex, setIsSelectedIndex] = useState();
  const data = selectedIndex === 0 ? IA_DATA : IA_DATA2;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>ia</Text>
      </View>

      <ImageBackground
        source={require("../../assets/img/IAbg.png")}
        style={{ width: 393, flex: 1, marginTop: 30 }}
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
                style={{
                  color:
                    selectedIndex === index ? Colors.primary : Colors.border,
                  fontSize: 16,
                  fontWeight: "500",
                }}
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
                <Text>{item.name}</Text>
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
    fontSize: 18,
    fontWeight: "700",
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
});
