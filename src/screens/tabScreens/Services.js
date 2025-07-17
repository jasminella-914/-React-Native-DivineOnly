import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
import RadioButtonRN from "radio-buttons-react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";
const data = [
  {
    label: "Au Salon",
  },
  {
    label: "A domicile",
  },
];

export default function Services({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/img/logoName.png")}
        style={styles.logo}
      />

      <View style={styles.secondContainer}>
        <View style={styles.thirdContainer}>
          <Text style={styles.headerText}>Réserve ta prestation</Text>

          <RadioButtonRN
            data={data}
            selectedBtn={(e) => console.log(e)}
            activeColor={Colors.primary}
            deactiveColor={Colors.primary}
            box={false}
            style={styles.radiobutton}
          />
          <View>
            <TextInput
              placeholder="Nom du professionnel, prestations..."
              style={styles.inputContainer}
            />
          </View>
          <TextInput
            placeholder="Adresse, ville..."
            style={styles.inputContainer}
          />
          <Pressable
            onPress={() => navigation.navigate("Resercher")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Rechercher</Text>
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
  logo: {
    alignSelf: "center",
    marginTop: 20,
  },

  secondContainer: {
    backgroundColor: Colors.whiteSmoke,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  headerText: {
    ...FONTS.h1,
    color: Colors.default,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: Colors.white,
    ...FONTS.textRegular,
  },
  thirdContainer: {
    margin: 20,
    gap: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  radiobutton: {
    borderWidth: 1,
    paddingBottom: 10,
    borderColor: Colors.border,
    borderRadius: 15,
    backgroundColor: Colors.white,
  },
});
