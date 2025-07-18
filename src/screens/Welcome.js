import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
  FlatList,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SERVICES_DATA } from "../data/data";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ImageBackground
        source={require("../assets/img/TabBg.png")}
        style={{ flex: 1 }}
      >
        <Image
          source={require("../assets/icon/Logo.png")}
          style={styles.logo}
          width={80}
          height={80}
        />
        <View style={styles.container}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            data={SERVICES_DATA}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => navigation.navigate("Booking")}
                  style={styles.buttons}
                >
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.title}>{item.text}</Text>
                </Pressable>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ width: 31 }}></View>;
            }}
          />
          <View style={{ flex: 1 }}></View>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("TabNav")}
          >
            <Text style={styles.buttonText}>Prendre rendez-vous</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 20 },
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 10,
    bottom: 50,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  buttons: {
    gap: 5,
    alignItems: "center",
  },
  scrollView: {
    marginTop: 80,
    marginHorizontal: 20,
    padding: 12,
  },
  list: { position: "absolute", top: 90, paddingLeft: 10 },
  title: {
    ...FONTS.textRegular,
    color: Colors.default,
  },
  logo: { alignSelf: "center", position: "absolute", top: 0 },
});
