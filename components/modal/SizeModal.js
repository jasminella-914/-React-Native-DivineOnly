import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioButtonRN from "radio-buttons-react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RadioGroup } from "react-native-radio-buttons-group";

// const data = [
//   {
//     label: "150ml",
//   },
//   {
//     label: "30ml 19,99 € ",
//   },
//   {
//     label: "100ml",
//   },
//   {
//     label: "250ml",
//   },
// ];

const radioButtons = [
  {
    label: "",
  },
  {
    label: "",
  },
  {
    label: "",
  },
  {
    label: "",
  },
];

export default function SizeModal() {
  const [selectedId, setSelectedId] = useState();
  return (
    <ActionSheet containerStyle={{ flex: 0.4 }} id="Size">
      <View>
        <Text style={styles.headerText}>Choisissez un volume</Text>
        <View
          style={{ paddingRight: 50, paddingTop: 20, gap: 15, paddingLeft: 20 }}
        >
          <Pressable style={styles.buttons}>
            <Text>150ml</Text>
            <Text>19,99 €</Text>
          </Pressable>
          <Pressable style={styles.buttons}>
            <Text>30ml</Text>
            <Text>19,99 €</Text>
          </Pressable>
          <Pressable style={styles.buttons}>
            <Text>100ml</Text>
            <Text>Épuise</Text>
          </Pressable>
          <Pressable style={styles.buttons}>
            <Text>250ml</Text>
            <Text>19,99 €</Text>
          </Pressable>
        </View>

        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          selectedBtn={(e) => console.log(e)}
          containerStyle={{
            // backgroundColor: "red",
            position: "absolute",
            right: 0,
            top: 50,
           outlineColor: "green"
          }}
        
        />
        {/* <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          activeColor="#469597"
          boxStyle={{
            borderColor: "#FFFFFF",
          }}
          
        /> */}
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 1,
  },
});
