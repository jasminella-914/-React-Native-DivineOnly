import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigate } from "../navigation/navigationService";
import { ARTICLEPOST_DATA } from "../data/data";
import { Colors } from "../styles/Colors";

export default function Article({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", gap: 50, paddingBottom: 18 }}>
        <Pressable
          style={{ marginLeft: 12, paddingTop: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <View>
          <Text style={styles.text}>Lola Brazilia</Text>
          <Text style={styles.headerText}>
            Soin nettoyant au charbon végétal
          </Text>
        </View>
      </View>

      <FlatList
        data={ARTICLEPOST_DATA}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatList}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image1} style={styles.image} />
              <Image
                source={item.image2}
                style={{ flexShrink: 1, position: "absolute", right: 0 }}
              />
              <Image source={item.image3} style={styles.image} />
              <Image source={item.image4} style={styles.image} />
              <Image source={item.image5} style={styles.image} />
              <Image source={item.image6} style={styles.image} />
            </View>
          );
        }}
      />

      <Pressable onPress={() => navigate("Appointment")} style={styles.footer}>
        <Text style={styles.footertext}>Réserver cette prestation</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "600",
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    textTransform: "uppercase",
  },
  footertext: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.white,
    textAlign: "center",
  },
  footer: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  image: {
    height: 137,
    width: 137,
    gap: 20,
  },
  flatList: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 2,
  },
});
