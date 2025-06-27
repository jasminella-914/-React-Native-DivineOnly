import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

export default function RateModal() {
  return (
    <ActionSheet id="Rate">
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.header}>Institut Pyrène</Text>
        <Text style={styles.text}>Rendez-vous passé • 17 juin 2022 à 16h</Text>
        <View>
          <Text style={[styles.header, { fontSize: 16, fontWeight: "600" }]}>
            Notez votre rendez-vous
          </Text>
        </View>
        <Text>Ajoutez une photo ou une vidéo</Text>
        <TextInput
          multiline
          placeholder="Rajoutez votre commentaire ici...."
          style={styles.input}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            SheetManager.hide("Rate");
            navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.buttonText}>Envoyer mon avis</Text>
        </Pressable>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    minHeight: 100,
    borderRadius: 10,
    borderColor: "#BBC6C8",
    textAlignVertical: "top",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#469597",
    paddingVertical: 18,
    borderRadius: 10,
    paddingHorizontal: 94,
    marginTop: "auto",
  },
});
