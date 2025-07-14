import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Modal,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigate } from "../../navigation/navigationService";
import { SheetManager } from "react-native-actions-sheet";
import { useState } from "react";

export default function AppointmentConfirm({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 20, gap: 28 }}>
        <View style={{ alignItems: "center", gap: 20 }}>
          <Text style={styles.header}>Réservation validée</Text>
          <Text style={styles.bodytext}>#569843</Text>
          <Text style={[styles.smallText]}>
            Votre paiement a été validé et votre rendez-vous confirmé.
          </Text>
        </View>

        <Pressable style={styles.buttonContainer}>
          <Text style={styles.LB}>lb</Text>

          <View>
            <Text style={[styles.bodytext, { fontWeight: "700" }]}>
              Mercredi 22 Juin • 16h
            </Text>
            <Text style={[styles.bodytext, { fontSize: 14 }]}>
              Lola Brazilia • 1 prestation
            </Text>
          </View>
        </Pressable>

        <Pressable style={styles.button2}>
          <Text style={styles.smallText}>Détails de mes prestations (3)</Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={styles.bodytext}>90€</Text>
            <Ionicons name="chevron-down" size={15} color="#469597" />
          </View>
        </Pressable>
        <View style={{ gap: 5 }}>
          <Text style={styles.smallText}>Mode de paiement</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image source={require("../../assets/icon/stripe.png")} />
            <Text>25,49€</Text>
          </View>

          <View style={styles.line}></View>
        </View>
        <View style={{ gap: 5 }}>
          <Text style={styles.smallText}>Contact</Text>
          <Text style={styles.smallText}>manon@mail.com</Text>
          <Text style={styles.smallText}>0646384398</Text>
        </View>
      </View>
      <Pressable onPress={() => SheetManager.show("Rate")} style={styles.button}>
        <Text style={styles.buttonText}>Fermer</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  button: {
    backgroundColor: "#469597",
    borderRadius: 15,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginTop: "auto",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "700",
  },
  bodytext: {
    fontSize: 16,
    fontWeight: "600",
  },
  buttonContainer: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 29,
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    paddingHorizontal: 29,
    borderRadius: 15,
    marginTop: "auto",
  },
  LB: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    textTransform: "uppercase",
    textAlign: "center",
    backgroundColor: "#D7D7D7",
    padding: 18,
    borderRadius: 10,
  },
  button2: {
    backgroundColor: "#F7F7F7",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#BDBBB078",
    marginTop: 5,
  },
  smallText: { fontWeight: "400", fontSize: 12 },
  modal: {
    // backgroundColor: "#FFFFFF",
    // flex: 0.3,
    // borderRadius: 20,
    // padding: 20,
    justifyContent: "flex-start",
    backgroundColor: "red",
    flex: 0.25,
    marginTop: "auto",
    padding: 20,
    borderRadius: 20,
  },
});
