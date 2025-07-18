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
import { SheetManager } from "react-native-actions-sheet";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

const bgImg = require("../../assets/img/Bg.png");
const twoperson = require("../../assets/img/twoperson.png");
export default function Shop({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.header}>
          <Pressable
            onPress={() => SheetManager.show("Filter")}
            style={styles.button}
          >
            <Image source={require("../../assets/icon/filter.png")} />
            <Text style={styles.text}>Filtrer</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Image source={require("../../assets/icon/trier.png")} />
            <Text style={styles.text}>Trier</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => navigation.navigate("MyBasket")}>
          <Image source={require("../../assets/icon/shop.png")} />
        </Pressable>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={Math.ceil(SHOP_DATA.length / 4)}
        contentContainerStyle={styles.flatContainer}
        columnWrapperStyle={{ gap: 10 }}
        data={SHOP_DATA}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => navigation.navigate("Afro")}
              style={styles.dataContainer}
            >
              <View style={styles.productContainer}>
                <Image source={item.image} style={styles.image} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.info}>{item.info}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.info}>{item.price}</Text>
                  <Image source={item.icon} />
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.primary,
    ...FONTS.textSmallLight,
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.primary,
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
    ...FONTS.textSmallLight,
    color: Colors.grayBlack,
  },
  info: {
    ...FONTS.textRegular,
    color: Colors.black,
  },
  dataContainer: {
    flexDirection: "row",
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  image: {
    width: 172,
    height: 164,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: { flexDirection: "row", gap: 20, alignItems: "center" },
  flatContainer: { alignItems: "center", marginTop: 20, gap: 10 },
});
