import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { Colors } from "../../styles/Colors";

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
    justifyContent: "center"
  },
  text: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});