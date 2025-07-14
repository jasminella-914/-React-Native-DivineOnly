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
            activeColor="#469597"
            boxStyle={{
              borderColor: "#BBC6C8",
              
              
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
    backgroundColor: "#FFFFFF",
  },
  logo: {
    alignSelf: "center",
  },

  secondContainer: {
    backgroundColor: "#F5F5F5",
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F20",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
  },
  thirdContainer: {
    margin: 20,
    gap: 20,
  },
  button: {
    backgroundColor: "#469597",
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
