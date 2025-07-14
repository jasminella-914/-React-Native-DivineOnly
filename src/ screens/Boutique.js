import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SHOP_DATA } from "../data/data";
import { navigate } from "../src/navigation/navigationService";

const Boutique = () => {
  return (
    <View>
      <Text style={[styles.caption, { padding: 20 }]}>7 produits </Text>
      <FlatList
        scrollEnabled={false}
        numColumns={Math.ceil(SHOP_DATA.length / 4)}
        contentContainerStyle={styles.flatlist}
        columnWrapperStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
        data={SHOP_DATA}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigate("Afro")}>
              <View style={styles.productContainer}>
                <Image source={item.image} />
                <Text style={[styles.caption, { color: "#00000099" }]}>
                  {item.name}
                </Text>
                <View>
                  <Text style={styles.info}>{item.info}</Text>
                  <Text style={styles.info}>{item.info1}</Text>
                </View>

                <View style={styles.price}>
                  <Text style={styles.info}>{item.price}</Text>
                  <Image source={item.icon} />
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Boutique;

const styles = StyleSheet.create({
  caption: {
    fontSize: 12,
    fontWeight: "400",
  },
  info: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  productContainer: {
    gap: 5,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flatlist: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
