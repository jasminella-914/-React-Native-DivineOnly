import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { TextInput } from "react-native-gesture-handler";
import * as Progress from "react-native-progress";
import Slider from "@react-native-community/slider";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

export default function DistanceModal() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ActionSheet containerStyle={styles.container} id="Distance">
      <View style={styles.border}></View>
      <Text style={styles.headerText}>Distance</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={{ gap: 10 }}>
          <View>
            <TextInput placeholder="Ville" style={styles.input} />
          </View>
          <Pressable>
            <Text style={styles.text}>Marseille (130008) - 30km</Text>
          </Pressable>
          <View style={{ gap: 20, marginTop: 20 }}>
            <View style={styles.distance}>
              <Text style={styles.Text}>Dans un rayon autour de </Text>
              <Text style={[styles.Text, { color: Colors.primary }]}>30km</Text>
            </View>
            <Slider
              inverted={true}
              style={styles.Bar}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={Colors.grey}
              maximumTrackTintColor={Colors.primary}
            />
            <View style={styles.distance}>
              <Text style={styles.Text}>Autour de moi</Text>
              <Switch
                trackColor={{ false: Colors.darkGray, true: Colors.primary }}
                thumbColor={isEnabled ? Colors.white : Colors.white}
                ios_backgroundColor={Colors.darkGray}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 100, gap: 20 }}>
          <Pressable
            onPress={() => SheetManager.hide("Distance")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Appliquer</Text>
          </Pressable>
          <Pressable>
            <Text style={[styles.buttonText, { color: Colors.primary }]}>
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
    ...FONTS.h1,
    textAlign: "center",
    paddingVertical: 10,
  },
  container: {
    flex: 0.7,
    paddingHorizontal: 23,
  },
  border: {
    borderWidth: 3,
    borderColor: Colors.gray,
    width: 52,
    height: 5,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 21,
    borderRadius: 14,
    padding: 10,
    ...FONTS.textRegular,
  },
  text: {
    color: Colors.default,
    ...FONTS.textSmallLight,
    backgroundColor: Colors.blueGreen,
    borderRadius: 10,
    marginRight: "auto",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 114,
    borderRadius: 10,
    marginTop: "auto",
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  Text: {
    ...FONTS.textRegular,
  },
  Bar: {
    alignSelf: "center",
    height: 32,
    width: 310,
  },
  distance: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollView: {
    paddingBottom: 20,
  },
});
