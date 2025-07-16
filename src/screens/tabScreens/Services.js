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
import ICON from "../../assets/icon/salon.png";
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
            boxStyle={{
              borderColor: Colors.border,
            }}
          />
          <TextInput
            placeholder="Nom du professionnel, prestations..."
            style={styles.inputContainer}
          />
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
  },

  secondContainer: {
    backgroundColor: Colors.white,
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
    padding: 20,
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
});
