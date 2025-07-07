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

const bgImg = require("../../assets/Bg.png");
export default function ForgotPassword({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Image source={bgImg} />
      <Image
        source={require("../../assets/Logo.png")}
        style={{ alignSelf: "center", position: "absolute", top: 40 }}
      />
      <Image
        source={require("../../assets/twoperson.png")}
        style={{
          position: "absolute",
          alignSelf: "center",
          top: 130,
        }}
      />

      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Mot de passe oublié</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Renseignez votre adresse mail afin de recevoir un lien vous
            permettant de changer votre mot de passe.
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          <TextInput placeholder="Adresse mail" style={styles.inputContainer} />
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Link Sent")}
        >
          <Text style={styles.buttonText}>Réinitialiser mon mot de passe</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerButtonText}>Retour à la </Text>
        <Pressable onPress={() => navigation.navigate("Connexion")}>
          <Text style={[styles.footerButtonText, { color: "#469597" }]}>
            connexion
          </Text>
        </Pressable>
      </View>
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
    padding: 10,
    borderRadius: 15,
    paddingVertical: 20
  },
  text: {
    color: "#0E1F20",
    fontSize: 12,
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
    flexDirection: "row",
    justifyContent: "center",
  },
});
