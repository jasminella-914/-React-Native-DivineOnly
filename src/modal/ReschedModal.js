import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import Modal from "react-native-modal";
import { useState } from "react";
import { navigate } from "../navigation/navigationService";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

const ReschedModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ActionSheet containerStyle={{ flex: 0.75 }} id="Reschedule">
      <Image
        source={require("../assets/img/groupPhoto.png")}
        style={styles.groupPhoto}
      />

      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Institut Pyrène</Text>
          <Text style={styles.bodyText}>
            Rendez-vous prévu le 17 juin 2022 à 16h
          </Text>
          <View style={styles.location}>
            <Image source={require("../assets/icon/location.png")} />
            <Text style={styles.locInfo}>500 Rte de Berre, 33300 Bordeaux</Text>
          </View>
        </View>
        <Text style={styles.headerText}>Votre rendez-vous</Text>
        <View style={styles.votre}>
          <View style={styles.votreContainer}>
            <Text style={styles.oneText}>1</Text>
            <Text style={styles.bodyText}>Épilation par haute fréquence</Text>
          </View>
          <View style={styles.votreContainer}>
            <Text style={styles.oneText}>1</Text>
            <Text style={styles.bodyText}>French Manucure</Text>
          </View>
          <View style={styles.votreContainer}>
            <Text style={styles.oneText}>1</Text>
            <Text style={styles.bodyText}>Soin des pieds brésiliens</Text>
          </View>
          <View style={styles.votreContainer}>
            <Text style={styles.oneText}>1</Text>
            <Text style={styles.bodyText}>Massage à l’huile chaude</Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            SheetManager.hide("Reschedule");
            navigate("Reschedule");
          }}
          style={styles.footerbutton}
        >
          <Text style={styles.footertext}>Replanifier</Text>
        </Pressable>
      </View>
    </ActionSheet>
  );
};

export default ReschedModal;

const styles = StyleSheet.create({
  headerText: {
    color: Colors.black,
    ...FONTS.h1,
    textAlign: "center",
  },
  bodyText: {
    color: Colors.black,
    ...FONTS.textRegular,
  },
  footerbutton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 30,
  },
  footertext: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  modal: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  oneText: {
    backgroundColor: Colors.blueGreen,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    ...FONTS.h2,
  },
  location: {
    flexDirection: "row",
    gap: 10,

    alignItems: "center",
  },
  header: {
    alignItems: "center",
    gap: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  votreContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  votre: {
    gap: 30,
    marginTop: 20,
    marginHorizontal: 20,
  },
  groupPhoto: {
    height: 110,
    width: 414,
    alignSelf: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  locInfo: {
    ...FONTS.textSmallLight,
    textDecorationLine: "underline",
  },
});
