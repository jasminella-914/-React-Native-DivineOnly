import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ActionSheet, {
  FlatList,
  SheetManager,
} from "react-native-actions-sheet";
import React, { lazy, useState } from "react";

const data = [
  {
    id: 0,
    label: "moins de 50€",
  },
  {
    id: 1,
    label: "moins de 50€",
  },
  {
    id: 2,
    label: "moins de 50€",
  },
  {
    id: 3,
    label: "moins de 50€",
  },
];
export default function FilterModal() {
  const [selected, setSelected] = useState("");
  return (
    <ActionSheet
      containerStyle={{ flex: 0.7, paddingHorizontal: 20 }}
      id="Filter"
    >
      <View>
        <View style={{ marginBottom: 20 }}>
          <View style={styles.border}></View>
          <Text style={styles.headerText}>Prix</Text>
        </View>
        <View style={styles.buttonContainer}>
          {data.map((list, index) => {
            return (
              <Pressable
                onPress={() => setSelected(index)}
                style={[
                  styles.button,
                  {
                    backgroundColor: selected === index ? "#469597" : "#FFFFFF",
                    borderColor: selected === index ? "#469597" : "#BBC6C8",
                  },
                ]}
                key={list.id}
              >
                <Text
                  style={[
                    styles.buttontext,
                    { color: selected === index ? "#FFFFFF" : "#000000" },
                  ]}
                >
                  {list.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <View style={{ gap: 10, marginTop: 20 }}>
          <TextInput style={styles.input} placeholder="Prix minimum" />
          <TextInput style={styles.input} placeholder="Prix minimum" />
        </View>
        <View style={{ marginTop: 50, gap: 20 }}>
          <Pressable style={styles.footerbutton}>
            <Text style={styles.footerText}>Appliquer</Text>
          </Pressable>
          <Pressable>
            <Text style={[styles.footerText, { color: "#469597" }]}>
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
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 17,
    borderWidth: 1,
    borderRadius: 17,
    borderColor: "#BBC6C8",
  },
  buttontext: {
    color: "#0E1F20",
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    padding: 20,
    borderRadius: 15,
  },
  footerbutton: {
    backgroundColor: "#469597",
    padding: 20,
    borderRadius: 15,
  },
  footerText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
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
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
});
