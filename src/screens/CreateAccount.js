import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import CheckBox from "react-native-check-box";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../styles/Colors";

const logoImg = require("../assets/icon/Logo.png");
export default function CreateAccount({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={{ marginLeft: 20 }} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} />
      </Pressable>
      <Image source={logoImg} style={{ alignSelf: "center" }} />
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.text}>Créer mon compte</Text>
        </View>
        <View style={{ gap: 10 }}>
          <TextInput style={styles.textInput} placeholder="Adresse mail" />
          <TextInput
            style={styles.textInput}
            placeholder="Mot de passe"
            secureTextEntry
          />
        </View>
        <View style={styles.toggleContainer}>
          <CheckBox
            style={{ flex: 1 }}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            checkBoxColor={Colors.primary}
            isChecked={isChecked}
          />
          <View style={{ paddingRight: 20 }}>
            <Text style={styles.toggleText}>
              <Text
                style={[
                  styles.toggleText,
                  {
                    color: Colors.black,
                  },
                ]}
              >
                En vous inscrivant, vous acceptez nos
              </Text>{" "}
              Conditions Générales d’Utilisation et nos Conditions Générales de
              Vente
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("MesCoordonnées")}
        >
          <Text style={styles.buttonText}>Créer mon compte</Text>
        </Pressable>
      </View>
      <Pressable>
        <Text style={styles.footerButtonText}>Ou inscrivez-vous avec</Text>
      </Pressable>
      <View style={{ gap: 10, margin: 20 }}>
        <Pressable style={styles.footerButton}>
          <Ionicons name="logo-google" size={24} color={Colors.primary} />
          <Text style={styles.footerButtonText}>votre adresse Google</Text>
        </Pressable>
        <Pressable style={styles.footerButton}>
          <Image source={require("../assets/icon/at.png")} />
          <Text style={styles.footerButtonText}>une autre adresse mail </Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={styles.footerButtonText}>Vous avez déjà un compte ? </Text>
        <Pressable onPress={() => navigation.navigate("Connexion")}>
          <Text style={[styles.footerButtonText, { color: Colors.primary }]}>
            Connexion
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  secondContainer: {
    gap: 20,
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.default,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 10,
    borderRadius: 10,
    paddingVertical: 20,
  },
  toggleContainer: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 10,
  },
  toggleText: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.primary,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  footerButton: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  footerButtonText: {
    textAlign: "center",
    color: Colors.black,
    fontSize: 12,
    fontWeight: "400",
  },
});
