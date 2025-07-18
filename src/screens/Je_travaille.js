import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

const logoImg = require("../assets/img/Bg.png");
export default function Je_travaille() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back"
          size={24}
          style={{ marginLeft: 20, paddingVertical: 10 }}
        />
      </Pressable>

      <Image source={logoImg} />

      <Image source={require("../assets/icon/Logo.png")} style={styles.Logo} />
      <Image
        source={require("../assets/img/twoperson.png")}
        style={styles.twoPerson}
      />
      <View style={styles.secondContainer}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Je travaille</Text>
        </View>
        <View style={{ gap: 10 }}>
          <Pressable onPress={() => navigation.navigate("CreateAccount")}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>dans un salon</Text>
            </View>
          </Pressable>
          <Pressable>
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
                à domicile
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
    marginHorizontal: 20,
  },
  text: {
    ...FONTS.h2,
    color: Colors.default,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  Logo: {
    alignSelf: "center",
    position: "absolute",
    top: 40,
    marginTop: 10,
  },
  twoPerson: {
    position: "absolute",
    alignSelf: "center",
    top: 130,
  },
});
