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
} from "react-native";
import TabNav from "../TabNav";
import { useNavigation } from "@react-navigation/native";
import { SERVICES_DATA } from "../data/data";

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
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.scrollView}>
          <FlatList
            horizontal
            data={SERVICES_DATA}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => navigation.navigate("Booking")} style={styles.buttons}>
                  <Image source={item.image} />
                  <Text>{item.text}</Text>
                </Pressable>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ width: 21 }}></View>;
            }}
          />
        </ScrollView>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("TabNav")}
        >
          <Text style={styles.buttonText}>Prendre rendez-vous</Text>
        </Pressable>
      </ImageBackground>
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
    alignItems: "center",
  },
  scrollView: {
    marginTop: 80,
    marginHorizontal: 20,
    padding: 12,
  },
});
