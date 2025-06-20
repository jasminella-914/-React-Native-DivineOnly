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
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.info}>{item.info}</Text>
                  <Text>{item.size}</Text>
                  <View>
                    <Text style={styles.info}>{item.price}</Text>
                    <Image source={item.icon} />
                  </View>
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
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F20",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    gap: 100,
  },
  dataContainer: {
    paddingHorizontal: 20,
    marginTop: 30
  },
  productContainer: {
    flexDirection: "row",
  },
});
