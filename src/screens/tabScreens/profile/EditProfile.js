import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../../styles/Colors";
import { FONTS } from "../../../styles/Fonts";

export default function EditProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.headerBack} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} />
      </Pressable>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginHorizontal: 20, gap: 20 }}>
          <Pressable style={{ gap: 7 }}>
            <Image
              source={require("../../../assets/img/profile.png")}
              style={{ width: 72, height: 72, alignSelf: "center" }}
            />
            <Text style={styles.editText}>Modifier la photo de profil</Text>
          </Pressable>

          <Text style={styles.headerText}>Mes coordonnées</Text>

          <View style={{ gap: 10 }}>
            <TextInput placeholder="Prénom" style={styles.input} />
            <TextInput placeholder="Nom" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <View style={[styles.input, { gap: 30, paddingVertical: 10 }]}>
              <Text style={styles.inputText}>Adresse</Text>
              <TextInput placeholder="Rue" style={styles.inputText} />
              <TextInput
                placeholder="Numero"
                style={styles.inputText}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Code postal"
                style={styles.inputText}
                keyboardType="numeric"
              />
              <TextInput placeholder="Ville" style={styles.inputText} />
            </View>
            <TextInput
              placeholder="Numéro de téléphone"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Modifier</Text>
          </Pressable>
          <Pressable>
            <Text style={[styles.buttonText, { color: Colors.primary }]}>
              Annuler
            </Text>
          </Pressable>
          <View style={{ gap: 20 }}>
            <Text style={styles.headerText}>Mot de passe</Text>
            <Text
              style={[
                styles.editText,
                { color: Colors.darkerGray, textAlign: "left" },
              ]}
            >
              Pour modifier votre mot de passe, veuillez confirmer votre
              identité en saisissant votre mot de passe actuel.
            </Text>
            <TextInput
              placeholder="Mot de passe actuel"
              style={styles.input}
              secureTextEntry
            />
            <TextInput
              placeholder="Nouveau mot de passe"
              style={styles.input}
              secureTextEntry
            />
            <TextInput
              placeholder="Confirmer le nouveau mot de passe"
              style={styles.input}
              secureTextEntry
            />
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Modifier</Text>
            </Pressable>
            <Pressable>
              <Text style={[styles.buttonText, { color: Colors.primary }]}>
                Annuler
              </Text>
            </Pressable>
          </View>
          <View style={{ gap: 10 }}>
            <Pressable>
              <Text
                style={[
                  styles.buttonText,
                  { color: Colors.red, textAlign: "left" },
                ]}
              >
                Se déconnecter
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={[
                  styles.buttonText,
                  { color: Colors.default, textAlign: "left" },
                ]}
              >
                Supprimer mon compte
              </Text>
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
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  headerText: {
    ...FONTS.h2,
    color: Colors.default,
  },
  editText: {
    color: Colors.primary,
    ...FONTS.textSmallLight,
    textAlign: "center",
  },
  input: {
    padding: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.border,
    ...FONTS.textRegMed,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 15,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  inputText: {
    color: Colors.border,
    ...FONTS.textRegMed,
  },
  headerBack: {
    marginLeft: 20,
    paddingVertical: 10,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 50,
  },
});
