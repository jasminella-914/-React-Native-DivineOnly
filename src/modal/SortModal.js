import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { Switch } from "react-native-gesture-handler";

export default function SortModal() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ActionSheet containerStyle={{ flex: 0.7 }} id="Sort">
      <View style={styles.border}></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
      >
        <Text style={styles.headerText}>Trier et filtrer</Text>
        <View style={{ gap: 30, marginTop: 20 }}>
          <Pressable
            onPress={() => SheetManager.show("Lieu")}
            style={styles.filter}
          >
            <Text>Lieu</Text>
            <Image source={require("../../assets/icon/chevronRight.png")} />
          </Pressable>
          <Pressable
            onPress={() => SheetManager.show("Filter")}
            style={styles.filter}
          >
            <Text>Prix</Text>
            <Image source={require("../../assets/icon/chevronRight.png")} />
          </Pressable>
          <Pressable
            onPress={() => SheetManager.show("Note")}
            style={styles.filter}
          >
            <Text>Note</Text>
            <Image source={require("../../assets/icon/chevronRight.png")} />
          </Pressable>
          <Pressable
            onPress={() => SheetManager.show("Distance")}
            style={styles.filter}
          >
            <Text>Distance</Text>
            <Image source={require("../../assets/icon/chevronRight.png")} />
          </Pressable>
          <Pressable
            onPress={() => SheetManager.show("Availability")}
            style={styles.filter}
          >
            <Text>Disponibilités</Text>
            <Image source={require("../../assets/icon/chevronRight.png")} />
          </Pressable>
        </View>
        <View style={styles.secondBorder}></View>
        <View style={{ gap: 20, marginBottom: 20 }}>
          <View style={styles.switch}>
            <Text>Choisis pour vous</Text>
            <Switch
              trackColor={{ false: "#D4D4D4", true: "#469597" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#D4D4D4"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.switch}>
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
      </ScrollView>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
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
  border: {
    borderWidth: 3,
    borderColor: "#E9E9E9",
    width: 52,
    height: 5,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
  },
  secondBorder: {
    borderBottomWidth: 1,
    marginVertical: 30,
    borderColor: "#F0F0F0",
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
