import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";

const bgImg = require("../../assets/img/Bg.png");
export default function LinkSent({ navigation }) {
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
            <Text style={styles.headerText}>Lien envoyé</Text>
          </View>
          <View>
            <Text style={styles.text}>Le lien vous a été envoyé par mail.</Text>
          </View>
        </View>

        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Connexion")}
        >
          <Text style={styles.buttonText}>Revenir à l’écran de connexion</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, paddingBottom: 20 },

  container: {
    marginHorizontal: 20,
    gap: 10,
    alignItems: "center",
  },
  headerText: {
    color: Colors.default,
    ...FONTS.h2,
  },
  text: {
    color: Colors.default,
    ...FONTS.textSmallLight,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 50,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  logo: { alignSelf: "center", position: "absolute", top: 0 },
  twoPerson: {
    position: "absolute",
    alignSelf: "center",
    top: 70,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bgImage: {
    width: 437,
    height: 321,
  },
});
