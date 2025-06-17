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

const logoImg = require("../assets/Bg.png");
export default function Je_suis() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} />
      <Image
        source={require("../assets/Logo.png")}
        style={{ alignSelf: "center", position: "absolute",  top: 40 }}
      />

      <Image
          source={require("././../assets/twoperson.png")}
         style={{
          position: "absolute",
          alignSelf: "center",
          top: 130
         }}
        />

      <View style={styles.secondContainer}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Je suis</Text>
        </View>
        <View style={{ gap: 10 }}>
          <Pressable onPress={() => navigation.navigate("Créer mon compte")}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>client(e)</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Je travaille")}>
            <View
              style={[
                styles.buttonContainer,
                {
                  borderColor: "#469597",
                  borderWidth: 1,
                  backgroundColor: "#FFFFFF",
                },
              ]}
            >
              <Text style={[styles.buttonText, { color: "#5BA199" }]}>
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
    backgroundColor: "#FFFFFF",
  },
  secondContainer: {
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0E1F20",
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
  Image: {
    alignItems: "center",
    justufyContent: "center",
    position: "relative",
  },
});
