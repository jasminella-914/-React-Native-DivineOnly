import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { navigate } from "../navigation/navigationService";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";


export default function SettingsModal() {
  return (
    <ActionSheet containerStyle={{ flex: 0.7 }} id="Settings">
      <View>
        <View style={styles.border}></View>

        <Text style={styles.headerText}>Paramètres</Text>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => {
              SheetManager.hide("Settings");
              navigate("EditProfile");
            }}
          >
            <Text style={styles.buttonsText}>Mon compte</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              SheetManager.hide("Settings");
              navigate("NotificationSetting");
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
    ...FONTS.h1,
    textAlign: "center",
    marginTop: 10,
  },
  buttons: {
    alignItems: "center",
    gap: 50,
    marginTop: 50,
  },
  buttonsText: {
   ...FONTS.textRegular,
  },
  border: {
    borderWidth: 3,
    borderColor: Colors.gray,
    width: 52,
    height: 5,
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 5,
  },
});
