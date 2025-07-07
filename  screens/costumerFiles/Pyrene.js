import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import PagerView from "react-native-pager-view";
import PyrenePager from "../PyrenePager";

export default function Pyrene({ navigation }) {
  return (
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
        <View>
          <Image source={require("../../assets/bgPhoto.png")} />
          <View style={styles.container}>
            <Text style={styles.headerText}>Institut Pyrène</Text>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image source={require("../../assets/location.png")} />
              <Text style={styles.Text}>500 Rte de Berre, 33300 Bordeaux</Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <Image source={require("../../assets/star.png")} />
              <Text style={[styles.Text, { textDecorationLine: "none" }]}>
                4,9 17 avis
              </Text>
            </View>
          </View>
        </View>
      </View>
      <PagerView style={styles.pagerView} initialPage={0}>
        <PyrenePager />
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 393,
    height: 360,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  container: {
    gap: 5,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 100,
    left: 48,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 13,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  Text: {
    fontSize: 12,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    paddingHorizontal: 91,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },

  pagerView: {
    flex: 1,
  },
});
