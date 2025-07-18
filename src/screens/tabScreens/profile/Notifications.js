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
import { Colors } from "../../../styles/Colors";
import { FONTS } from "../../../styles/Fonts";

export default function Notifications({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={{ marginLeft: 20 }} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} />
      </Pressable>
      <ScrollView>
        <View style={{ marginHorizontal: 20, gap: 20 }}>
          <Pressable>
            <Text style={styles.editText}>Modifier la photo de profil</Text>
          </Pressable>

          <Text style={styles.headerText}>Mes coordonnées</Text>

          <View style={{ gap: 10 }}>
            <TextInput placeholder="Prénom" style={styles.input} />
            <TextInput placeholder="Nom" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Adresse" style={styles.input} />
            <TextInput
              placeholder="Numéro de téléphone"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Modifier</Text>
          </Pressable>
          {/* <Pressable>
            <Text style={[styles.buttonText, { color: Colors.primary}]}>Annuler</Text>
          </Pressable> */}
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
            {/* <TextInput
              placeholder="Nouveau mot de passe"
              style={styles.input}
              secureTextEntry
            />
            <TextInput
              placeholder="Confirmer le nouveau mot de passe"
              style={styles.input}
              secureTextEntry
            /> */}
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Modifier</Text>
            </Pressable>
            {/* <Pressable>
              <Text style={[styles.buttonText, { color: Colors.primary }]}>
                Annuler
              </Text>
            </Pressable> */}
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
    padding: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.border,

    ...FONTS.textRegular,
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
});
