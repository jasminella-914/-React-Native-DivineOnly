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
          progress={0.3}
          width={250}
          color="#469597"
          borderWidth={0}
          unfilledColor="#E5E3E4"
          height={7}
          style={styles.Bar}
        />
        <Ionicons name="close" size={24} />
      </View>
      <View style={[styles.secondContainer, { gap: 30 }]}>
        <Text style={styles.text}>Mes coordonnées</Text>
        <View style={{ gap: 10 }}>
          <TextInput placeholder="Prénom" style={styles.inputContainer} />
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
        <Pressable style={styles.footerButton} 
        onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.footerButtonText}>Suivant</Text>
        </Pressable>
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
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  Bar: {
    marginVertical: 10,
    justifyContent: "center",
  },
  text: {
    color: "#0E1F20",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20
  },
  inputContainer: {
    padding: 15,
    borderColor: "#BBC6C8",
    borderWidth: 1,
    borderRadius: 15,
  },
  footerButton: {
    backgroundColor: "#469597",
    padding: 18,
    borderRadius: 10,
  },
  footerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
