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
    <View style={styles.viewContainer}>
      <View>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} style={{ marginLeft: 20 }} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: { backgroundColor: Colors.white, flex: 1, paddingTop: 60 },
  headertext: {
    ...FONTS.h1,
    color: Colors.default,
    position: "absolute",
    top: 0,
    left: 120,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 63,
  },
  image: {
    marginTop: 15,
    width: 393,
    height: 360,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabContainer: {
    position: "absolute",
    bottom: 0,
    top: 400,
    right: 0,
    left: 0,
  },
});
