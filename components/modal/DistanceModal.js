import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { TextInput } from "react-native-gesture-handler";
import * as Progress from "react-native-progress";

export default function DistanceModal() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ActionSheet containerStyle={styles.container} id="Distance">
      <View style={{ gap: 20 }}>
        <View style={styles.border}></View>
        <Text style={styles.headerText}>Distance</Text>
        <View>
          <TextInput placeholder="Ville" style={styles.input} />
        </View>
        <Pressable>
          <Text style={styles.text}>Marseille (130008) - 30km</Text>
        </Pressable>
        <View style={{ gap: 20}}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text>Dans un rayon autour de </Text>
            <Text style={[styles.Text, { color: "#469597" }]}>30km</Text>
          </View>
          <Progress.Bar
            progress={0.5}
            width={367}
            color="#469597"
            borderWidth={0}
            unfilledColor="#E5E3E4"
            height={8}
            style={styles.Bar}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30
            }}
          >
            <Text>Autour de moi</Text>
            <Switch
              trackColor={{ false: "#D4D4D4", true: "#469597" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              ios_backgroundColor="#D4D4D4"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 100, gap: 20 }}>
        <Pressable onPress={() => SheetManager.hide("Distance")} style={styles.button}>
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
  input: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    paddingVertical: 21,
    borderRadius: 14,
    padding: 10,
  },
  text: {
    color: "#0E1F20",
    fontSize: 12,
    fontWeight: "400",
    backgroundColor: "#4695971A",
    borderRadius: 10,
    marginRight: "auto",
    paddingVertical: 4,
    paddingHorizontal: 8,
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
  Text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
