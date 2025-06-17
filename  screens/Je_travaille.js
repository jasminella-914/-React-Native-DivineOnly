import { View, Text, Button, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; 



const logoImg = require("../assets/Bg.png");
export default function Je_travaille() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      <View style={styles.secondContainer}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Je travaille</Text>
        </View>
        <View style={{ gap: 10 }}>
          <Pressable onPress={() => navigation.navigate("Créer moncompte")}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>dans un salon</Text>
            </View>
          </Pressable>
          <Pressable>
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
                à domicile
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
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
});
