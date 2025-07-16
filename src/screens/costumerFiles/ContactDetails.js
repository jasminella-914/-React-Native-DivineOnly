import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import * as Progress from "react-native-progress";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

export default function ContactDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.secondContainer, { flexDirection: "row" }]}>
        <Ionicons
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Progress.Bar
          progress={0.2}
          width={250}
          color={Colors.primary}
          borderWidth={0}
          unfilledColor={Colors.grey}
          height={7}
          style={styles.Bar}
        />
        <Ionicons name="close" size={24} onPress={() => navigation.goBack()} />
      </View>
      <View style={[styles.secondContainer, { gap: 30 }]}>
        <Text style={styles.text}>Mes coordonnées</Text>
        <View style={{ gap: 10 }}>
          <TextInput placeholder="Prénom" style={styles.inputContainer} />
          <TextInput placeholder="Nom" style={styles.inputContainer} />
          <TextInput placeholder="Rue" style={styles.inputContainer} />
          <TextInput
            placeholder="Numéro de rue"
            style={styles.inputContainer}
          />
          <TextInput placeholder="Code postal" style={styles.inputContainer} />
          <TextInput placeholder="Ville" style={styles.inputContainer} />
          <TextInput
            placeholder="Numéro de téléphone"
            style={styles.inputContainer}
          />
        </View>
      </View>
      <Pressable
        style={styles.footerButton}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.footerButtonText}>Suivant</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  secondContainer: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  Bar: {
    marginVertical: 10,
    justifyContent: "center",
  },
  text: {
    color: Colors.default,
    ...FONTS.h2,
    marginTop: 20,
  },
  inputContainer: {
    padding: 10,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 15,
    ...FONTS.textRegMed,
    paddingVertical: 21,
  },
  footerButton: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 10,
    marginTop: "auto",
    marginHorizontal: 20
  },
  footerButtonText: {
    color: Colors.white,

    textAlign: "center",
    ...FONTS.h2,
  },
});
