import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AfroPager from "../AfroPager";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Afro({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Afro</Text>
      </View>
      <Image
        source={require("../../assets/img/bgPhoto.png")}
        style={styles.image}
      />
      <View style={styles.pager}>
        <AfroPager />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headertext: {
    ...FONTS.h1,
    color: Colors.default,
    alignSelf: "center",
    position: "absolute",
    top: 10,
  },
  image: {
    width: "100%",
    height: 360,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  pager: {
    position: "absolute",
    bottom: 0,
  },
  header: {
    paddingVertical: 10,
  },
});
