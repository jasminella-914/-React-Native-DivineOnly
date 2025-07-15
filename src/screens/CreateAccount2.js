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
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

const logoImg = require("../assets/icon/Logo.png");
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
            checkBoxColor={Colors.primary}
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
        <Pressable>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Créer mon compte</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.footer}>
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
    ...FONTS.h2,
    color: Colors.default,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 10,
    borderRadius: 10,
    paddingVertical: 20,
    ...FONTS.textRegular,
  },
  toggleContainer: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 10,
  },
  toggleText: {
    ...FONTS.textSmallLight,
    color: Colors.primary,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: "auto" },

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
    ...FONTS.textSmallLight,
  },
});
