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
const twoperson = require("../../assets//twoperson.png");
export default function ForgotPassword() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView>
     
        <View>
          <Image
            source={bgImg}
            style={{ position: "relative" }}
          />
          <Image
            source={twoperson}
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
          <View>
            <Text style={styles.headerText}>Mot de passe oublié</Text>
          </View>
          <View>
            <Text>
              Renseignez votre adresse mail afin de recevoir un lien vous
              permettant de changer votre mot de passe.
            </Text>
          </View>
          <View style={{ gap: 10 }}>
            <TextInput
              placeholder="Adresse mail"
              style={styles.inputContainer}
            />
          </View>
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerButtonText}>Retour à la</Text>
          <Pressable>
            <Text style={[styles.footerButtonText, { color: "#fff" }]}>
              connexion
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
