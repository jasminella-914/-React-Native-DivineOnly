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
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

export default function Pyrene({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View>
          <Image source={require("../../assets/img/bgPhoto.png")} />
          <View style={styles.secondContainer}>
            <Text style={styles.headerText}>Institut Pyrène</Text>
            <View style={styles.info}>
              <Image source={require("../../assets/icon//location.png")} />
              <Text style={styles.Text}>500 Rte de Berre, 33300 Bordeaux</Text>
            </View>
            <View style={styles.rate}>
              <Image source={require("../../assets/icon/star.png")} />
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
  container: { backgroundColor: Colors.white, flex: 1 },
  image: {
    width: 393,
    height: 360,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  secondContainer: {
    gap: 10,
    backgroundColor: Colors.white,
    position: "absolute",
    bottom: 70,
    left: 23,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 13,
  },
  headerText: {
    ...FONTS.h2,
    color: Colors.default,
  },
  Text: {
    ...FONTS.textSmallLight,
    textDecorationLine: "underline",
    color: Colors.default,
  },
  pagerView: {
    flex: 1,
  },
  info: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingRight: 100,
  },
  rate: { flexDirection: "row", gap: 5, alignItems: "center" },
});
