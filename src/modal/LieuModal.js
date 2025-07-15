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
      <View style={styles.secondContainer}>
        <View style={styles.border}></View>
        <View>
          <Text style={styles.headerText}>Lieu</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButtonRN
            data={data}
            selectedBtn={(e) => console.log(e)}
            activeColor={Colors.black}
            boxStyle={{
              borderColor: Colors.border,
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: "100", gap: 20 }}>
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
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    ...FONTS.h1,
    textAlign: "center",
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
    gap: 10,
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
});
