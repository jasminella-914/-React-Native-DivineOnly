import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  Platform,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-check-box";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";

const logoImg = require("../assets/icon/Logo.png");
export default function CreateAccount2() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!email) errors.email = "Email is required!";
    if (!password) errors.password = "Password is required!";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", email, password);
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Pressable style={styles.headBack} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Image source={logoImg} style={{ alignSelf: "center" }} />
        <View style={styles.secondContainer}>
          <View>
            <Text style={styles.text}>Créer mon compte</Text>
          </View>
          <View style={{ gap: 10 }}>
            <TextInput
              style={styles.textInput}
              placeholder="Adresse mail"
              onChangeText={setEmail}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <TextInput
              style={styles.textInput}
              placeholder="Mot de passe"
              onChangeText={setPassword}
              secureTextEntry
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
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
                Conditions Générales d’Utilisation et nos Conditions Générales
                de Vente
              </Text>
            </View>
          </View>
          <Pressable onPress={handleSubmit}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Créer mon compte</Text>
            </View>
          </Pressable>
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.footer}>
          <Text style={styles.footerButtonText}>
            Vous avez déjà un compte ?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Connexion")}>
            <Text style={[styles.footerButtonText, { color: Colors.primary }]}>
              Connexion
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 20 },
  safeContainer: {
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
  footer: { flexDirection: "row", justifyContent: "center" },

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
  headBack: { marginLeft: 20, paddingVertical: 5 },
  errorText: {
    color: Colors.red,
    ...FONTS.textSmallLight,
  },
});
