import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioGroup from "react-native-radio-buttons-group";
import RadioButtonRN from "radio-buttons-react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

const data = [
  {
    label: "Pas de préférence",
  },
  {
    label: "Ouvert actuellement",
  },
  {
    label: "Dans les trois prochains jours",
  },
];

export default function Availability() {
  return (
    <ActionSheet containerStyle={styles.container} id="Availability">
      <View style={{ gap: 10 }}>
        <View style={styles.border}></View>
        <Text style={styles.headerText}>Disponibilités</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          activeColor={Colors.primary}
          boxStyle={{
            borderColor: Colors.border,
          }}
        />
      </View>
      <View style={{ gap: 10, marginTop: 20 }}>
        <Text style={[styles.text, { color: Colors.black }]}>Horaires</Text>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Jour</Text>
          <Ionicons
            name="chevron-down"
            size={24}
            style={{ color: Colors.primary }}
          />
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Heure</Text>
          <Ionicons
            name="chevron-down"
            size={24}
            style={{ color: Colors.primary }}
          />
        </Pressable>
      </View>
      <View style={{ marginTop: 15, gap: 20 }}>
        <Pressable
          onPress={() => SheetManager.hide("Availability")}
          style={styles.footerbutton}
        >
          <Text style={styles.buttonText}>Appliquer</Text>
        </Pressable>
        <Pressable>
          <Text style={[styles.buttonText, { color: Colors.primary }]}>
            Réinitialiser
          </Text>
        </Pressable>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    ...FONTS.h1,
    textAlign: "center",
  },
  container: {
    flex: 0.7,
    paddingHorizontal: 23,
  },
  border: {
    borderWidth: 3,
    borderColor: Colors.gray,
    width: 52,
    height: 5,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  text: {
    ...FONTS.textRegular,
    color: Colors.border,
  },
  footerbutton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 114,
    borderRadius: 10,
    marginTop: "auto",
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
});
