import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";


export default function Services() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground
        source={require("../../assets/TabBg.png")}
        style={{ flex: 1 }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../../assets/Logo.png")} />
        </View>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Prendre rendez-vous</Text>
        </Pressable>
      </ImageBackground> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    marginTop: "auto",
    bottom: 15
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
