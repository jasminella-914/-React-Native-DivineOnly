import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
  Image,
  Platform,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SHOP_DATA } from "../../data/data";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

export default function MyBasket({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.icon} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </Pressable>

        <Text style={styles.headertext}>Mon panier</Text>
      </View>
      <FlatList
        ItemSeparatorComponent={() => {
          return <View style={{ height: 20 }}></View>;
        }}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={SHOP_DATA}
        renderItem={({ item }) => {
          return (
            <View style={styles.dataContainer}>
              <View style={styles.productContainer}>
                <Image source={item.image} style={styles.image} />
                <View style={{ gap: 5 }}>
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                  <Text style={styles.info}>{item.info}</Text>
                  <Text style={styles.info}>{item.size}</Text>
                  <View>
                    <View style={styles.addContainer}>
                      <Pressable style={styles.add}>
                        <View style={styles.minus}></View>
                      </Pressable>

                      <Text style={styles.info}>1</Text>
                      <Pressable style={styles.add}>
                        <Ionicons name="add" size={15} />
                      </Pressable>
                    </View>
                  </View>
                </View>
                <Pressable style={styles.close}>
                  <Ionicons
                    name="close-outline"
                    size={15}
                    color={Colors.border}
                  />
                </Pressable>
                <View style={styles.price}>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <Text style={styles.name}>Total</Text>
          <Text style={styles.price}>75,00€</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Delivery")}
          style={styles.footerButton}
        >
          <Text style={styles.footerButtonText}>Acheter pour 19,99€</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  icon: { marginLeft: 20, position: "absolute", top: 10 },
  headertext: {
    ...FONTS.h1,
    color: Colors.default,
    alignSelf: "center",
  },
  header: {
    paddingVertical: 10,
  },
  dataContainer: {
    paddingHorizontal: 20,
  },
  productContainer: {
    flexDirection: "row",
    gap: 10,
  },
  name: {
    ...FONTS.h2,
    color: Colors.black,
  },
  info: {
    ...FONTS.textSmallLight,
    color: Colors.black,
  },
  price: {
    ...FONTS.textRegular,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  footerButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
  },
  footerButtonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  add: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 5,
    borderRadius: 6,
  },
  close: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  minus: {
    borderWidth: 0.5,
    width: 14,
    marginVertical: 6,
  },
  addContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingTop: 10,
  },
  image: {
    width: 111,
    height: 103,
    borderRadius: 10,
  },
  footerContainer: {
    gap: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  flatList: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});
