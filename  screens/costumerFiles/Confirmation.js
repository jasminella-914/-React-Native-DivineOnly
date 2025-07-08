import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Confirmation({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Merci pour ta commande Manon</Text>
          <Text style={styles.bodyText}>#569843</Text>
          <Text style={[styles.text, { paddingBottom: 20 }]}>
            Un récapitulatif de ta commande à été envoyé par mail
          </Text>
        </View>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Détails de ma commande (3)</Text>
          <View style={styles.details}>
            <Text style={[styles.bodyText, { fontSize: 14 }]}>25,49€</Text>
            <Ionicons name="chevron-down" size={15} color={"#469597"} />
          </View>
        </Pressable>
        <View style={{ gap: 10, marginTop: 20 }}>
          <View style={{ gap: 5 }}>
            <Text style={styles.text}>Livraison à domicile</Text>
            <Text style={styles.text}>
              8 rue de la chapelle, 33000 Bordeaux, France
            </Text>
            <View style={styles.border}></View>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={styles.text}>Mode de paiement</Text>
            <View style={styles.modePayment}>
              <Image source={require("../../assets/stripe.png")} />
              <Text>25,49€</Text>
            </View>

            <View style={styles.border}></View>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={styles.text}>Contact</Text>
            <Text style={styles.text}>manon@mail.com</Text>
            <Text>0646384398</Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Welcome")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Fermer</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  headerText: {
    fontSize: 18,
    fontWeight: "700",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
  },
  pressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    padding: 20,
  },
  secondContainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: "#BDBBB078",
    marginTop: 5,
  },
  modePayment: { flexDirection: "row", justifyContent: "space-between" },
  details: { flexDirection: "row", gap: 12, alignItems: "center" },
  header: { gap: 20, alignItems: "center", justifyContent: "center" },
});
