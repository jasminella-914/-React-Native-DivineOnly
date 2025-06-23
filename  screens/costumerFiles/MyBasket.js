import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SHOP_DATA } from "../../data/data";

export default function MyBasket({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </Pressable>

        <Text style={styles.headertext}>Mon panier</Text>
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
                    width: 111,
                    height: 103,
                    borderRadius: 10,
                  }}
                />
                <View style={{ gap: 5 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.info}>{item.info}</Text>
                  <Text style={styles.info}>{item.size}</Text>
                </View>

                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          );
        }}
      />
      <View style={{ gap: 20, paddingHorizontal: 20}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.name}>Total</Text>
          <Text style={styles.price}>75,00€</Text>
        </View>
        <Pressable style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Acheter pour 19,99€</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F20",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    gap: 100,
    paddingBottom: 30
  },
  dataContainer: {
    paddingHorizontal: 20,
    // marginTop: 30,
  },
  productContainer: {
    flexDirection: "row",
    gap: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
  info: {
    fontSize: 12,
    fontWeight: "400",
    color: "#000000",
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  footerButton: {
    backgroundColor: "#469597",
    paddingVertical: 15 ,
    paddingHorizontal: 94,
    borderRadius: 10
  },
  footerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center" 
  }
});
