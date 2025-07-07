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
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-check-box";
import Ionicons from "@expo/vector-icons/Ionicons";

const logoImg = require("../assets/Logo.png");
export default function CreateAccount2() {
  const navigation = useNavigation();

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
            isChecked={isChecked}
            checkBoxColor="#469597" 
          />
          <View>
            <Text style={styles.toggleText}>
              En vous inscrivant, vous acceptez nos
            </Text>{" "}
            <Pressable>
              <Text style={[styles.toggleText, { color: "#469597" }]}>
                Conditions Générales d’Utilisation et nos Conditions Générales
                de Vente
              </Text>
            </Pressable>
          </View>
        </View>
        <Pressable>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Créer mon compte</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerButtonText}>Vous avez déjà un compte ? </Text>
        <Pressable>
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
    paddingVertical: 20
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
    padding: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: "auto" },

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
