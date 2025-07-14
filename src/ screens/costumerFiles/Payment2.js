import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";

export default function Payment2({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Appointment Confirmation")}>
        <Text style={styles.text}>Mobile Money</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center"
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});