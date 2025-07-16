import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import CheckBox from "react-native-check-box";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

const logoImg = require("../assets/icon/Logo.png");
export default function CreateAccount({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
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
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.headBack} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} />
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ paddingBottom: 20 }}>
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
                secureTextEntry
                onChangeText={setPassword}
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
                  Conditions Générales d’Utilisation et nos Conditions Générales
                  de Vente
                </Text>
              </View>
            </View>
            <Pressable
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("MesCoordonnées")}
              // onPress={handleSubmit}
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
              <Text style={styles.footerButtonText}>
                une autre adresse mail{" "}
              </Text>
            </Pressable>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerButtonText}>
              Vous avez déjà un compte ?{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("Connexion")}>
              <Text
                style={[styles.footerButtonText, { color: Colors.primary }]}
              >
                Connexion
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
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
    ...FONTS.textSmallLight,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  headBack: { marginLeft: 20, paddingVertical: 5 },
  errorText: {
    color: Colors.red,
    ...FONTS.textSmallLight,
  },
});
