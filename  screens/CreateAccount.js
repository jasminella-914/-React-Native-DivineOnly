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

const logoImg = require("../assets/Logo.png");
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
            checkBoxColor="#469597"
            isChecked={isChecked}
          />
          <View>
            <Text style={styles.toggleText}>
              En vous inscrivant, vous acceptez nos
            </Text>{" "}
            <Text style={[styles.toggleText, { color: "#469597" }]}>
              Conditions Générales d’Utilisation{" "}
              <Text style={[styles.toggleText, { color: "#000000" }]}>et</Text>{" "}
              nos Conditions Générales de Vente
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Mes coordonnées")}
        >
          <Text style={styles.buttonText}>Créer mon compte</Text>
        </Pressable>
      </View>
      <Pressable>
        <Text style={styles.footerButtonText}>Ou inscrivez-vous avec</Text>
      </Pressable>
      <View style={{ gap: 10, margin: 20 }}>
        <Pressable style={styles.footerButton}>
          <Ionicons name="logo-google" size={24} color={"#469597"} />
          <Text style={styles.footerButtonText}>votre adresse Google</Text>
        </Pressable>
        <Pressable style={styles.footerButton}>
          <Image source={require("../assets/at.png")} />
          <Text style={styles.footerButtonText}>une autre adresse mail </Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={styles.footerButtonText}>Vous avez déjà un compte ? </Text>
        <Pressable onPress={() => navigation.navigate("Connexion")}>
          <Text style={[styles.footerButtonText, { color: "#469597" }]}>
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
    backgroundColor: "#FFFFFF",
  },
  secondContainer: {
    gap: 20,
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0E1F20",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
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
  },
  buttonContainer: {
    backgroundColor: "#469597",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  footerButton: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  footerButtonText: {
    textAlign: "center",
    color: "#000000",
    fontSize: 12,
    fontWeight: "400",
  },
});
