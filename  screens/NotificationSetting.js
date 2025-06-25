import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  Switch,
} from "react-native";
import { useState } from "react";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NotificationSettings({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Notifications</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text style={[styles.header, { marginBottom: 20 }]}>
          Notifications push
        </Text>
        <View style={styles.thirdContainer}>
          <Text style={[styles.header, { fontSize: 14, fontWeight: "500" }]}>
            Rappel de rendez-vous
          </Text>
          <Switch
            trackColor={{ false: "#D4D4D4", true: "#469597" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#D4D4D4"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.thirdContainer}>
          <Text style={[styles.header, { fontSize: 14, fontWeight: "500" }]}>
            Nouvelles publications de vos salons
          </Text>
          <Switch
            trackColor={{ false: "#D4D4D4", true: "#469597" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#D4D4D4"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.thirdContainer}>
          <Text style={[styles.header, { fontSize: 14, fontWeight: "500" }]}>
            Nouvelles prestations de vos salons
          </Text>
          <Switch
            trackColor={{ false: "#D4D4D4", true: "#469597" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#D4D4D4"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Text style={[styles.header, { marginBottom: 20 }]}>
         Notifications SMS
        </Text>
        <View style={styles.thirdContainer}>
          <Text style={[styles.header, { fontSize: 14, fontWeight: "500" }]}>
            Rappel de rendez-vous
          </Text>
          <Switch
            trackColor={{ false: "#D4D4D4", true: "#469597" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#D4D4D4"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.thirdContainer}>
          <Text style={[styles.header, { fontSize: 14, fontWeight: "500" }]}>
            Nouvelles publications de vos salons
          </Text>
          <Switch
            trackColor={{ false: "#D4D4D4", true: "#469597" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#D4D4D4"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.thirdContainer}>
          <Text style={[styles.header, { fontSize: 14, fontWeight: "500" }]}>
            Nouvelles prestations de vos salons
          </Text>
          <Switch
            trackColor={{ false: "#D4D4D4", true: "#469597" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#D4D4D4"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F20",
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  header: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
  secondContainer: {
    paddingHorizontal: 20,
    marginTop: 70,
    // gap: 20,
    // borderBottomWidth: 1,
    // borderColor: "#F0F0F0",
  },
  thirdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    // backgroundColor: "pink",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: "center",
    borderColor: "#F0F0F0",
  },
});
