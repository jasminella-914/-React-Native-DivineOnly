import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import React from "react";

export default function Confirmation({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{  justifyContent: "center"}}>
        <View
          style={{ gap: 20, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.headerText}>Merci pour ta commande Manon</Text>
          <Text style={styles.bodyText}>#569843</Text>
          <Text style={styles.text}>
            Un récapitulatif de ta commande à été envoyé par mail
          </Text>
        </View>
        <View style={{ gap: 10, marginTop: 20, marginHorizontal: 20 }}>
          <View style={{ gap: 5 }}>
            <Text style={styles.text}>Livraison à domicile</Text>
            <Text style={styles.text}>
              8 rue de la chapelle, 33000 Bordeaux, France
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#BDBBB078",
                marginTop: 5,
              }}
            ></View>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={styles.text}>Mode de paiement</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Image source={require("../../assets/stripe.png")} />
              <Text>25,49€</Text>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderColor: "#BDBBB078",
                marginTop: 5,
              }}
            ></View>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={styles.text}>Contact</Text>
            <Text style={styles.text}>manon@mail.com</Text>
            <Text>0646384398</Text>
          </View>
        </View>
      </View>
      <Pressable onPress={() => navigation.navigate("Welcome")} style={styles.button}>
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
});
