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
import { Colors } from "../../styles/Colors";

const bgImg = require("../../assets/img/Bg.png");
export default function LinkSent({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white}}>
      <Image source={bgImg} />
      <Image source={require("../../assets/icon/Logo.png")} style={styles.logo} />
      <Image
        source={require("../../assets/img/twoperson.png")}
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
    color: Colors.default,
    fontSize: 16,
    fontWeight: "600",
  },
  text: {
    color: Colors.default,
    fontSize: 12,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 50,
  },
  buttonText: {
    color: Colors.white,
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
