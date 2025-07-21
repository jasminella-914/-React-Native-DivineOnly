import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as Progress from "react-native-progress";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ContactDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.secondContainer,
          { flexDirection: "row", paddingVertical: 5 },
        ]}
      >
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
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingBottom: 20 }}>
          <KeyboardAvoidingView
            behavior="padding"
            style={[styles.secondContainer, { gap: 30 }]}
          >
            <Text style={styles.text}>Mes coordonnées</Text>
            <View style={{ gap: 10 }}>
              <TextInput placeholder="Prénom" style={styles.inputContainer} />
              <TextInput placeholder="Nom" style={styles.inputContainer} />
              <TextInput placeholder="Rue" style={styles.inputContainer} />
              <TextInput
                placeholder="Numéro de rue"
                style={styles.inputContainer}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Code postal"
                style={styles.inputContainer}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Ville"
                style={styles.inputContainer}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Numéro de téléphone"
                keyboardType="numeric"
                style={styles.inputContainer}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={{ paddingTop: 20 }}>
            <Pressable
              style={styles.footerButton}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text style={styles.footerButtonText}>Suivant</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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
    paddingVertical: 18,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  footerButtonText: {
    color: Colors.white,

    textAlign: "center",
    ...FONTS.h2,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: Platform.OS === "android" ? 20 : 0,
  },
});
