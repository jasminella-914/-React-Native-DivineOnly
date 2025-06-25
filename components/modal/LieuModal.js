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
  // const radioButtons = useMemo(
  //   () => [
  //     {
  //       id: "1",
  //       label: "Pas de préférence",
  //       value: "option1",
  //     },
  //     {
  //       id: "2",
  //       label: "A domicile",
  //       value: "option2",
  //     },
  //     {
  //       id: "3",
  //       label: "Au salon",
  //       value: "option3",
  //     },
  //   ],
  //   []
  // );

  const [selectedId, setSelectedId] = useState();
  return (
    <ActionSheet
      containerStyle={{
        paddingHorizontal: 25,
        backgroundColor: "#fFFFFF",
        flex: 0.7,
      }}
      id="Lieu"
    >
      <View style={styles.secondContainer}>
        <View style={styles.border}></View>
        <View>
          <Text style={styles.headerText}>Lieu</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButtonRN
            data={data}
            selectedBtn={(e) => console.log(e)}
            activeColor="#469597"
            boxStyle={{
              borderColor: "#BBC6C8",
            }}
          />
          {/* <RadioGroup
            containerStyle={styles.radiobutton}
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          /> */}
        </View>
      </View>
      <View style={{ marginTop: 100, gap: 20 }}>
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
  // radioContainer: {
  //   borderWidth: 1,

  //   borderColor: "#BBC6C8",
  //   borderRadius: 10,
  // },
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
});
