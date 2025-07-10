import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { navigate } from "../../navigationService";

// import { useNavigation } from "@react-navigation/native";

export default function SettingsModal({ navigation }) {
  return (
    <ActionSheet containerStyle={{ flex: 0.7 }} id="Settings">
      <View>
        <View style={styles.border}></View>

        <Text style={styles.headerText}>Paramètres</Text>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => {
              SheetManager.hide("Settings");
              navigate("Edit Profile");
            }}
          >
            <Text style={styles.buttonsText}>Mon compte</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              SheetManager.hide("Settings");
              navigate("Notification Setting");
            }}
          >
            <Text style={styles.buttonsText}>Notifications</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.buttonsText}>Aide</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.buttonsText}>À propos</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.buttonsText}>Confidentialité</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.buttonsText}>Déconnexion</Text>
          </Pressable>
        </View>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
  buttons: {
    alignItems: "center",
    gap: 50,
    marginTop: 50,
  },
  buttonsText: {
    fontSize: 14,
    fontWeight: "500",
  },
  border: {
    borderWidth: 3,
    borderColor: "#E9E9E9",
    width: 52,
    height: 5,
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 5,
  },
});
