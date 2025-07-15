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
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

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
          <Text style={styles.text}>Rappel de rendez-vous</Text>
          <Switch
            trackColor={{ false: Colors.darkGray, true: Colors.primary }}
            thumbColor={isEnabled ? Colors.white : Colors.white}
            ios_backgroundColor={Colors.darkGray}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.text}>Nouvelles publications de vos salons</Text>
          <Switch
            trackColor={{ false: Colors.darkGray, true: Colors.primary }}
            thumbColor={isEnabled ? Colors.white : Colors.white}
            ios_backgroundColor={Colors.darkGray}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.text}>Nouvelles prestations de vos salons</Text>
          <Switch
            trackColor={{ false: Colors.darkGray, true: Colors.primary }}
            thumbColor={isEnabled ? Colors.white : Colors.white}
            ios_backgroundColor={Colors.darkGray}
            // onValueChange={toggleSwitch}
            // value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Text style={[styles.header, { marginBottom: 20 }]}>
          Notifications SMS
        </Text>
        <View style={styles.thirdContainer}>
          <Text style={styles.text}>Rappel de rendez-vous</Text>
          <Switch
            trackColor={{ false: Colors.darkGray, true: Colors.primary }}
            thumbColor={isEnabled ? Colors.white : Colors.white}
            ios_backgroundColor={Colors.darkGray}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.text}>Nouvelles publications de vos salons</Text>
          <Switch
            trackColor={{ false: Colors.darkGray, true: Colors.primary }}
            thumbColor={isEnabled ? Colors.white : Colors.white}
            ios_backgroundColor={Colors.darkGray}
            // onValueChange={toggleSwitch}
            // value={isEnabled}
          />
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.text}>Nouvelles prestations de vos salons</Text>
          <Switch
            trackColor={{ false: Colors.darkGray, true: Colors.primary }}
            thumbColor={isEnabled ? Colors.white : Colors.white}
            ios_backgroundColor={Colors.darkGray}
            // onValueChange={toggleSwitch}
            // value={isEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  headertext: {
    ...FONTS.h1,
    color: Colors.default,
    textAlign: "center",
  },
  header: {
    ...FONTS.h2,
    color: Colors.black,
    flexDirection: "row",
    gap: 100,
  },
  secondContainer: {
    paddingHorizontal: 20,
    marginTop: 70,
  },
  thirdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: "center",
    borderColor: Colors.snowFlake,
  },
  text: {
    ...FONTS.textRegular,
    color: Colors.default,
  },
});
