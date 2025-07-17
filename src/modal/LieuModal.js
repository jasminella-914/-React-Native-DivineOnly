import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioGroup from "react-native-radio-buttons-group";
import RadioButtonRN from "radio-buttons-react-native";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

export default function LieuModal() {
  const data = [
    {
      label: "Pas de préférence",
    },
    {
      label: "A domicile",
    },
    {
      label: "Au salon",
    },
  ];

  const [selectedId, setSelectedId] = useState();
  return (
    <ActionSheet containerStyle={styles.container} id="Lieu">
      <View style={styles.border}></View>

      <Text style={styles.headerText}>Lieu</Text>
      <View style={styles.secondContainer}>
        <View style={styles.radioContainer}>
          <RadioButtonRN
            data={data}
            box={false}
            circleSize={16}
            selectedBtn={(e) => console.log(e)}
            activeColor={Colors.black}
            deactiveColor={Colors.black}
            style={styles.radioButton}
          />
        </View>
        <View style={{ gap: 20 }}>
          <Pressable
            onPress={() => SheetManager.hide("Lieu")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Appliquer</Text>
          </Pressable>
          <Pressable>
            <Text style={[styles.buttonText, { color: Colors.primary }]}>
              Réinitialiser
            </Text>
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
  radiobutton: {
    alignItems: "center",
    gap: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
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
  secondContainer: {
    marginTop: 50,
    gap: 50,
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
  container: {
    paddingHorizontal: 25,
    backgroundColor: Colors.white,
    flex: 0.7,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 15,
    paddingBottom: 10,
  },
});
