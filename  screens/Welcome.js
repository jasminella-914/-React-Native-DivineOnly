import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import TabNav from "../TabNav";
import { useNavigation } from "@react-navigation/native";


export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/TabBg.png")}
        style={{ flex: 1 }}
      >
        <Image
          source={require("../assets/Logo.png")}
          style={{ alignSelf: "center", position: "absolute" }}
          width={80}
          height={80}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 25,
            marginTop: 80,
           
          }}
        >
          <Pressable style={styles.buttons}>
            <Image source={require("../assets/Coiffure.png")} />
            <Text>Coiffure</Text>
          </Pressable>
          <Pressable style={styles.buttons}>
            <Image source={require("../assets/Barbier.png")} />
            <Text>Barbier</Text>
          </Pressable>
          <Pressable style={styles.buttons}>
            <Image source={require("../assets//Onglerie.png")} />
            <Text>Onglerie</Text>
          </Pressable>
          <Pressable style={styles.buttons}>
            <Image source={require("../assets/istitik.png")} />
            <Text>Esthétique</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("TabNav")}
        >
          <Text style={styles.buttonText}>Prendre rendez-vous</Text>
        </Pressable>
      </ImageBackground>
      {/* <TabNav   /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    backgroundColor: "#469597",
    padding: 18,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: "auto",
    bottom: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  buttons: {
    gap: 5,
    alignItems: "center"
  }
});
