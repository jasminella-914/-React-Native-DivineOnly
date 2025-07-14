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
import { navigate } from "../../src/navigation/navigationService";

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
            <Text
              style={[
                styles.bodyText,
                { fontSize: 13, textDecorationLine: "underline" },
              ]}
            >
              500 Rte de Berre, 33300 Bordeaux
            </Text>
          </View>
        </View>
        <Text
          style={[styles.headerText, { textAlign: "center", marginTop: 20 }]}
        >
          Votre rendez-vous
        </Text>
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
    color: "#000000",
    fontSize: 18,
    fontWeight: "700",
  },
  bodyText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "500",
  },
  footerbutton: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    paddingHorizontal: 132,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 30,
  },
  footertext: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  modal: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  oneText: {
    backgroundColor: "#4695971A",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: "600",
  },
  location: {
    flexDirection: "row",
    gap: 10,

    alignItems: "center",
  },
  header: { alignItems: "center", gap: 20, marginTop: 20 },
  votreContainer: { flexDirection: "row", gap: 10, alignItems: "center" },
  votre: { gap: 30, marginTop: 20, marginHorizontal: 20 },
  groupPhoto: {
    height: 110,
    width: 414,
    alignSelf: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
