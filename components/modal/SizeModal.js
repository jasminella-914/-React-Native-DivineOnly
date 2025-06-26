import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioButtonRN from "radio-buttons-react-native";
import { BorderlessButton } from "react-native-gesture-handler";

const data = [
  {
    label: "150ml",
  },
  {
    label: "30ml 19,99 € ",
  },
  {
    label: "100ml",
  },
  {
    label: "250ml",
  },
];

export default function SizeModal( ) {
  return (
    <ActionSheet containerStyle={{ flex: 0.4 }} id="Size">
      <View>
        <Text style={styles.headerText}>Choisissez un volume</Text>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => console.log(e)}
          activeColor="#469597"
          boxStyle={{
            borderColor: "#FFFFFF",
          }}
        />
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
});
