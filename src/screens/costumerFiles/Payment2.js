import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

export default function Payment2({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate("AppointmentConfirmation")}>
        <Text style={styles.text}>Mobile Money</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
  },
  text: {
    color: Colors.black,
    ...FONTS.h2,
    textAlign: "center",
  },
});
