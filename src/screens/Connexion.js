import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../styles/Colors";

const logoImg = require("../assets/icon/google.png");
const atlogoImg = require("../assets/icon/at.png");

export default function Connexion() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Image
        source={require("../assets/img/Bg.png")}
        width={100}
        height={200}
      />
      <Image source={require("../assets/icon/Logo.png")} style={styles.image} />
      <Image
        source={require("../assets/img/twoperson.png")}
        style={styles.twoperson}
      />

      <View style={styles.container}>
        <Text style={styles.headerText}>Connexion</Text>
        <View style={{ gap: 10 }}>
          <TextInput placeholder="Adresse mail" style={styles.inputContainer} />
          <TextInput
            placeholder="Mot de passe"
            style={styles.inputContainer}
            secureTextEntry
          />
        </View>
        <View style={{ gap: 20 }}>
          <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.text}>Mot de passe oublié ?</Text>
          </Pressable>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={styles.buttonText}>Se connecter</Text>
          </Pressable>
        </View>
        <View style={{ gap: 10 }}>
          <View>
            <Text style={styles.footerButtonText}>Ou connectez-vous avec</Text>
          </View>
          <View style={{ gap: 10 }}>
            <Pressable style={styles.footerButton}>
              <Image source={logoImg} />
              <Text style={styles.footerButtonText}>votre compte Google</Text>
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
      <View style={styles.footer}>
        <Text style={styles.footerButtonText}>
          Vous n’avez pas encore de compte?
        </Text>
        <Pressable onPress={() => navigation.navigate("Créer mon compte")}>
          <Text style={[styles.footerButtonText, { color: Colors.primary }]}>
            Inscription
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    gap: 10,
  },
  headerText: {
    color: Colors.default,
    fontSize: 16,
    fontWeight: "600",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 18,
    borderRadius: 10,
  },
  text: {
    color: Colors.border,
    fontSize: 14,
    textDecorationLine: "underline",
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
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
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  footer: {
    marginTop: "auto",
  },
  image: {
    alignSelf: "center",
    position: "absolute",
    top: 40,
  },
  twoperson: {
    position: "absolute",
    alignSelf: "center",
    top: 130,
  },
});
