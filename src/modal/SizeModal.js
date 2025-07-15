import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import RadioButtonRN from "radio-buttons-react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RadioGroup } from "react-native-radio-buttons-group";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

const radioButtons = [
  {
    id: 0,
    label: "",
  },
  {
    id: 1,
    label: "",
  },
  {
    id: 2,
    label: "",
  },
  {
    id: 3,
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
            <Text style={styles.size}>150ml</Text>
            <Text style={styles.price}>19,99 €</Text>
          </Pressable>
          <Pressable style={styles.buttons}>
            <Text style={styles.size}>30ml</Text>
            <Text style={styles.price}>19,99 €</Text>
          </Pressable>
          <Pressable style={styles.buttons}>
            <Text style={[styles.size, { color: Colors.border }]}>100ml</Text>
            <Text style={[styles.price, { color: Colors.border }]}>Épuise</Text>
          </Pressable>
          <Pressable style={styles.buttons}>
            <Text style={styles.size}>250ml</Text>
            <Text style={styles.price}>19,99 €</Text>
          </Pressable>
        </View>

        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          selectedBtn={(e) => console.log(e)}
          containerStyle={{
            position: "absolute",
            right: 0,
            top: 50,
          }}
        />
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    ...FONTS.h2,
    textAlign: "center",
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 1,
  },
  size: {
    ...FONTS.textSmallLight,
    color: Colors.default,
  },
  price: {
    ...FONTS.textRegular,
    color: Colors.default,
  },
});
