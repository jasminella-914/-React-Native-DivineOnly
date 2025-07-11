import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function EditProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.headerBack} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} />
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 20, gap: 20 }}>
          <Pressable style={{ gap: 7}}>
            <Image
              source={require("../../../assets/profile.png")}
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
              <TextInput placeholder="Rue" />
              <TextInput placeholder="Numero" keyboardType="numeric" />
              <TextInput placeholder="Code postal" keyboardType="numeric" />
              <TextInput placeholder="Ville" />
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
            <Text style={[styles.buttonText, { color: "#469597"}]}>Annuler</Text>
          </Pressable>
          <View style={{ gap: 20 }}>
            <Text style={styles.headerText}>Mot de passe</Text>
            <Text
              style={[styles.editText, { color: "#A7B2B4", textAlign: "left" }]}
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
              <Text style={[styles.buttonText, { color: "#469597" }]}>
                Annuler
              </Text>
            </Pressable>
          </View>
          <View style={{ gap: 10 }}>
            <Pressable>
              <Text
                style={[
                  styles.buttonText,
                  { color: "#D24949", textAlign: "left" },
                ]}
              >
                Se déconnecter
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={[
                  styles.buttonText,
                  { color: "#0E1F20", textAlign: "left" },
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
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  headerText: {
    fontWeight: "600",
    fontSize: 16,
  },
  editText: {
    fontSize: 12,
    color: "#469597",
    fontWeight: "400",
    textAlign: "center",
  },
  input: {
    padding: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#BBC6C8",
  },
  button: {
    backgroundColor: "#469597",
    padding: 18,
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  inputText: {
    color: "#BBC6C8",
    fontSize: 13,
    fontWeight: "500",
  },
  headerBack: {
    marginLeft: 20,
    paddingBottom: 10,
  },
});
