import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioGroup from "react-native-radio-buttons-group";
import RadioButtonRN from "radio-buttons-react-native";

export default function LieuModal({ navigation }) {
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
            activeColor="#000000"
            boxStyle={{
              borderColor: "#BBC6C8",
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
          <Text style={[styles.buttonText, { color: "#469597" }]}>
            Réinitialiser
          </Text>
        </Pressable>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: "700",
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
    backgroundColor: "#469597",
    paddingVertical: 15,
    paddingHorizontal: 114,
    borderRadius: 10,
    marginTop: "auto",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  }, 
  secondContainer: {
    gap: 20,
  },
  border: {
    borderWidth: 3,
    borderColor: "#E9E9E9",
    width: 52,
    height: 5,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
  },
  container: {
    paddingHorizontal: 25,
    backgroundColor: "#fFFFFF",
    flex: 0.7,
  },
});
