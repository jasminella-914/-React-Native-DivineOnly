import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollState } from "react-native-actions-sheet/dist/src/hooks/use-scroll-handlers";
import VotrePager from "../VotrePager";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

export default function Votre({ navigation }) {
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} style={styles.icon} />
        </Pressable>
        <Text style={styles.headertext}>Votre rendez-vous</Text>
      </View>
      <Image
        source={require("../../assets/img/lashPhoto.png")}
        style={styles.image}
      />

      <View style={styles.tabContainer}>
        <VotrePager navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer: { backgroundColor: Colors.white, flex: 1 },
  headertext: {
    ...FONTS.h1,
    color: Colors.default,
    alignSelf: "center",
  },

  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 63,
  },
  image: {
    marginTop: 15,
    width: "100%",
    height: 450,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  header: {
    paddingVertical: 10,
  },
  icon: { marginLeft: 20, position: "absolute" },
});
