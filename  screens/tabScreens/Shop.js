import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { SHOP_DATA } from "../../data/data";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SheetManager } from "react-native-actions-sheet";
// import { useNavigation } from "@react-navigation/native";

const bgImg = require("../../assets/Bg.png");
const twoperson = require("../../assets//twoperson.png");
export default function Shop() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
          <Pressable  onPress={() => SheetManager.show("Filter") } style={styles.button}>
            <Image source={require("../../assets/filter.png")} />
            <Text style={styles.text}>Filtrer</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Image source={require("../../assets/trier.png")} />
            <Text style={styles.text}>Trier</Text>
          </Pressable>
        </View>
        <Pressable>
          <Image source={require("../../assets/shop.png")} />
        </Pressable>
      </View>
      <FlatList
        ItemSeparatorComponent={() => {
          return <View style={{ height: 20 }}></View>;
        }}
        data={SHOP_DATA}
        renderItem={({ item }) => {
          return (
            <View style={styles.dataContainer}>
              <View style={styles.productContainer}>
                <Image
                  source={item.image}
                  style={{
                    width: 172,
                    height: 164,
                  }}
                />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.info}>{item.info}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.info}>{item.price}</Text>
                  <Image source={item.icon} />
                </View>
              </View>
              <View style={styles.productContainer}>
                <Image
                  source={item.image}
                  style={{
                    width: 172,
                    height: 164,
                  }}
                />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.info}>{item.info}</Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.info}>{item.price}</Text>
                  <Image source={item.icon}
                 
                   />
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#469597",
    fontSize: 12,
    fontWeight: "400",
  },
  button: {
    borderWidth: 1,
    borderColor: "#469597",
    paddingHorizontal: 15,
    borderRadius: 15,
    height: 26,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  productContainer: {
    gap: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: "400",
  },
  info: {
    fontSize: 14,
    fontWeight: "500",
  },
  dataContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 10,

    marginTop: 20,
  },
});
