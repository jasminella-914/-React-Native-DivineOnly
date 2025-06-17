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

const bgImg = require("../../assets/Bg.png");
const twoperson = require("../../assets//twoperson.png");
export default function LinkSent({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView>
        <View>
          <Image source={bgImg} style={{ position: "relative" }} />
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    gap: 20,
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
    borderRadius: 10,
   marginHorizontal: 20,
   marginTop: 50
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
