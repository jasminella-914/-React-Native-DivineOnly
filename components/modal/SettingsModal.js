import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet from "react-native-actions-sheet";

export default function SettingsModal() {
  return (
    <ActionSheet containerStyle={{ flex: 0.5 }} id="Settings">
      <View>
        <Text style={styles.headerText}>Paramètres</Text>
        <ScrollView style={styles.buttons}>
          <Pressable>
            <Text>Mon compte</Text>
          </Pressable>
          <Pressable>
            <Text>Notifications</Text>
          </Pressable>
          <Pressable>
            <Text>Aide</Text>
          </Pressable>
          <Pressable>
            <Text>À propos</Text>
          </Pressable>
          <Pressable>
            <Text>Confidentialité</Text>
          </Pressable>
          <Pressable>
            <Text>Déconnexion</Text>
          </Pressable>
        </ScrollView>
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
    alignItems: "center"
  }
});
