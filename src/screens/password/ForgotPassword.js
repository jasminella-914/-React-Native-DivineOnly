import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

const bgImg = require("../../assets/img/Bg.png");
export default function ForgotPassword({ navigation }) {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <Image source={bgImg} style={styles.bgImage} />
        <Image
          source={require("../../assets/icon/Logo.png")}
          style={styles.logo}
        />
        <Image
          source={require("../../assets/img/twoperson.png")}
          style={styles.twoPerson}
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
            <TextInput
              placeholder="Adresse mail"
              style={styles.inputContainer}
            />
          </View>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("LinkSent")}
          >
            <Text style={styles.buttonText}>
              Réinitialiser mon mot de passe
            </Text>
          </Pressable>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={styles.footer}>
          <Text style={styles.footerButtonText}>Retour à la </Text>
          <Pressable onPress={() => navigation.navigate("Connexion")}>
            <Text style={[styles.footerButtonText, { color: Colors.primary }]}>
              connexion
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  mainContainer: { flex: 1, paddingBottom: 20 },
  container: {
    marginHorizontal: 20,
    gap: 20,
  },
  headerText: {
    color: Colors.default,
    ...FONTS.h2,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 10,
    borderRadius: 15,
    paddingVertical: 20,
    ...FONTS.textRegular,
  },
  text: {
    color: Colors.default,
    ...FONTS.textSmallLight,
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
    flexDirection: "row",
    justifyContent: "center",
  },

  logo: { alignSelf: "center", position: "absolute", top: 0 },
  twoPerson: {
    position: "absolute",
    alignSelf: "center",
    top: 70,
  },
  bgImage: {
    width: 437,
    height: 321,
  },
});
