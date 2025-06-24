import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { Switch } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SortModal() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ActionSheet containerStyle={{ flex: 0.7 }} id="Sort">
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <View></View>
        <Text style={styles.headerText}>Trier et filtrer</Text>
        <View style={{ gap: 30, marginTop: 20 }}>
          <Pressable
            onPress={() => SheetManager.show("Lieu")}
            style={styles.filter}
          >
            <Text>Lieu</Text>
            <Image source={require("../../assets/chevronRight.png")} />
          </Pressable>
          <Pressable style={styles.filter}>
            <Text>Prix</Text>
            <Image source={require("../../assets/chevronRight.png")} />
          </Pressable>
          <Pressable style={styles.filter}>
            <Text>Note</Text>
            <Image source={require("../../assets/chevronRight.png")} />
          </Pressable>
          <Pressable style={styles.filter}>
            <Text>Distance</Text>
            <Image source={require("../../assets/chevronRight.png")} />
          </Pressable>
          <Pressable style={styles.filter}>
            <Text>Disponibilités</Text>
            <Image source={require("../../assets/chevronRight.png")} />
          </Pressable>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginVertical: 30,
            borderColor: "#F0F0F0",
          }}
        ></View>
        <View style={{ gap: 20, marginBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Choisis pour vous</Text>
            <Switch
              trackColor={{ false: "#D4D4D4", true: "#469597" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#D4D4D4"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Disponible aujourd’hui</Text>
            <Switch
              trackColor={{ false: "#D4D4D4", true: "#469597" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#D4D4D4"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={{ marginTop: "auto", gap: 20 }}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Appliquer</Text>
          </Pressable>
          <Pressable>
            <Text style={[styles.buttonText, { color: "#469597" }]}>
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
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
