import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../styles/Colors";

const logoImg = require("../assets/img/Bg.png");
export default function Je_suis() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/img/Bg.png")} />
      <Image source={require("../assets/icon/Logo.png")} style={styles.logo} />

      <Image
        source={require("../assets/img/twoperson.png")}
        style={styles.twoPerson}
      />

      <View style={styles.secondContainer}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Je suis</Text>
        </View>
        <View style={{ gap: 10 }}>
          <Pressable onPress={() => navigation.navigate("CréerMonCompte")}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>client(e)</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("JeTravaille")}>
            <View
              style={[
                styles.buttonContainer,
                {
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  backgroundColor: Colors.white,
                },
              ]}
            >
              <Text style={[styles.buttonText, { color: Colors.primary }]}>
                professionnel(le)
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  secondContainer: {
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.default,
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
  Image: {
    alignItems: "center",
    justufyContent: "center",
    position: "relative",
  },
  logo: { alignSelf: "center", position: "absolute", top: 40 },
  twoPerson: {
    position: "absolute",
    alignSelf: "center",
    top: 130,
  },
});
