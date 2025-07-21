import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";
import { navigate } from "../navigation/navigationService";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const logoImg = require("../assets/icon/google.png");
const atlogoImg = require("../assets/icon/at.png");

export default function Connexion() {
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
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View>
          <Image
            source={require("../assets/img/Bg.png")}
            style={{ width: "100%", height: 321 }}
          />
          <Image
            source={require("../assets/icon/Logo.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/img/twoperson.png")}
            style={styles.twoperson}
          />

          <View style={styles.container}>
            <Text style={styles.headerText}>Connexion</Text>
            <View style={{ gap: 10 }}>
              <TextInput
                placeholder="Adresse mail"
                style={styles.inputContainer}
                onChangeText={setEmail}
              />
              {errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
              <TextInput
                placeholder="Mot de passe"
                style={styles.inputContainer}
                secureTextEntry
                onChangeText={setPassword}
              />
              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>
            <View style={{ gap: 20 }}>
              <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
                <Text style={styles.text}>Mot de passe oublié ?</Text>
              </Pressable>
              <Pressable
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("Welcome")}
                // onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Se connecter</Text>
              </Pressable>
            </View>
            <View style={{ gap: 10 }}>
              <View>
                <Text style={styles.footerButtonText}>
                  Ou connectez-vous avec
                </Text>
              </View>
              <View style={{ gap: 10 }}>
                <Pressable style={styles.footerButton}>
                  <Image source={logoImg} />
                  <Text style={styles.footerButtonText}>
                    votre compte Google
                  </Text>
                </Pressable>
                <Pressable style={styles.footerButton}>
                  <Image source={atlogoImg} />
                  <Text style={styles.footerButtonText}>
                    une autre adresse mail
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerButtonText}>
            Vous n’avez pas encore de compte?
          </Text>
          <Pressable onPress={() => navigate("CréerMonCompte")}>
            <Text style={[styles.footerButtonText, { color: Colors.primary }]}>
              Inscription
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    marginHorizontal: 20,
    gap: 10,
    marginTop: 10,
  },
  headerText: {
    color: Colors.default,
    ...FONTS.h2,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 18,
    borderRadius: 10,
    ...FONTS.textRegular,
    padding: 10,
  },
  text: {
    color: Colors.border,
    ...FONTS.textRegular,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,

    textAlign: "center",
  },
  footerButton: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.border,
    borderWidth: 1,
  },
  footerButtonText: {
    color: Colors.black,
    ...FONTS.textSmallLight,
    textAlign: "center",
  },
  footer: {
    marginTop: 20,
  },
  image: {
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  twoperson: {
    position: "absolute",
    alignSelf: "center",
    top: 80,
  },
  errorText: {
    color: Colors.red,
    ...FONTS.textSmallLight,
  },
  scrollView: { paddingBottom: 20, flexGrow: 1 },
});
