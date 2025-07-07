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
export default function LinkSent({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Image source={bgImg} />
      <Image source={require("../../assets/Logo.png")} style={styles.logo} />
      <Image
        source={require("../../assets/twoperson.png")}
        style={styles.twoperson}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    gap: 10,
    alignItems: "center",
  },
  headerText: {
    color: "#0E1F20",
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    color: "#0E1F20",
    fontSize: 12,
  },
  buttonContainer: {
    backgroundColor: "#469597",
    padding: 18,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 50,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  twoperson: {
    position: "absolute",
    alignSelf: "center",
    top: 130,
  },
  logo: {
    alignSelf: "center",
    position: "absolute",
    top: 40,
  },
});
