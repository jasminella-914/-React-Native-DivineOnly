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
  // const radioButtons = useMemo(
  //   () => [
  //     {
  //       id: "1",
  //       label: "Pas de préférence",
  //       value: "option1",
  //     },
  //     {
  //       id: "2",
  //       label: "Ouvert actuellement",
  //       value: "option2",
  //     },
  //     {
  //       id: "3",
  //       label: "Dans les trois prochains jours",
  //       value: "option3",
  //     },
  //   ],
  //   []
  // );

  const [selectedId, setSelectedId] = useState();
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
          activeColor="#469597"
          boxStyle={{
            borderColor: "#BBC6C8",
          }}
        />
      </View>
      <View style={{ gap: 10, marginTop: 20 }}>
        <Text style={[styles.text, { color: "#000000" }]}>Horaires</Text>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Jour</Text>
          <Ionicons
            name="chevron-down"
            size={24}
            style={{ color: "#469597" }}
          />
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Heure</Text>
          <Ionicons
            name="chevron-down"
            size={24}
            style={{ color: "#469597" }}
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
  container: {
    flex: 0.7,
    paddingHorizontal: 23,
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
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BBC6C8",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  text: {
    color: "#BBC6C8",
  },
  footerbutton: {
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
  // radioContainer: {
  //   borderWidth: 1,

  //   borderColor: "#BBC6C8",
  //   borderRadius: 10,

  // },
});
