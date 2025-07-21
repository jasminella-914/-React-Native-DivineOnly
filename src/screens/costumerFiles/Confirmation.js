import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Confirmation({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Merci pour ta commande Manon</Text>
          <Text style={styles.bodyText}>#569843</Text>
          <Text
            style={[
              styles.text,
              {
                textAlign: "center",
                paddingHorizontal: 30,
                color: Colors.grayBlack,
              },
            ]}
          >
            Un récapitulatif de ta commande à été envoyé par mail
          </Text>
        </View>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Détails de ma commande (3)</Text>
          <View style={styles.details}>
            <Text style={styles.price}>25,49€</Text>
            <Ionicons name="chevron-down" size={15} color={Colors.primary} />
          </View>
        </Pressable>
        <View style={{ gap: 10, marginTop: 20 }}>
          <View style={{ gap: 5 }}>
            <Text style={styles.grayText}>Livraison à domicile</Text>
            <Text style={styles.text}>
              8 rue de la chapelle, 33000 Bordeaux, France
            </Text>
            <View style={styles.border}></View>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={styles.grayText}>Mode de paiement</Text>
            <View style={styles.modePayment}>
              <Image source={require("../../assets/icon/stripe.png")} />
              <Text>25,49€</Text>
            </View>

            <View style={styles.border}></View>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={styles.grayText}>Contact</Text>
            <Text style={styles.text}>manon@mail.com</Text>
            <Text style={styles.text}>0646384398</Text>
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
    backgroundColor: Colors.white,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  headerText: {
    ...FONTS.h1,
  },
  bodyText: {
    ...FONTS.h2,
  },
  text: {
    ...FONTS.textSmallLight,
    color: Colors.black,
  },
  pressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.softWhite,
    padding: 20,
  },
  secondContainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
    flex: 1,
    paddingBottom: 20,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: Colors.dirtyYellow,
    marginTop: 5,
  },
  modePayment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  header: {
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  price: {
    ...FONTS.textRegBold,
    color: Colors.black,
  },
  grayText: {
    ...FONTS.textSmallLight,
    color: Colors.grayBlack,
  },
});
