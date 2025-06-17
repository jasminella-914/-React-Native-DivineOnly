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

const logoImg = require("../assets/google.png");
const atlogoImg = require("../assets//at.png");

export default function Connexion() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        <View>
          <Image
            source={require("../assets/Bg.png")}
            style={{ position: "relative" }}
          />
          <Image
            source={require("../assets//twoperson.png")}
            style={{
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              left: 90,
              top: 50,
            }}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.headerText}>Connexion</Text>
          <View style={{ gap: 10 }}>
            <TextInput
              placeholder="Adresse mail"
              style={styles.inputContainer}
            />
            <TextInput
              placeholder="Mot de passe"
              style={styles.inputContainer}
              secureTextEntry
            />
          </View>
          <View style={{gap: 39 }}>
            <Pressable onPress={() => navigation.navigate("Forgot Password")}>
              <Text style={styles.text}>Mot de passe oublié ?</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("Welcome")}>
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
          <Pressable>
            <Text style={[styles.footerButtonText, { color: "#469597" }]}>
              Inscription
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    gap: 20,
  },
  headerText: {
    color: "#0E1F20",
    fontSize: 16,
    fontWeight: "600",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "#BBC6C8",
    fontSize: 14,
    textDecorationLine: "underline",
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
  footerButton: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#BBC6C8",
    borderWidth: 1,
  },
  footerButtonText: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  footer: {
    marginTop: "auto",
    
  },
});
