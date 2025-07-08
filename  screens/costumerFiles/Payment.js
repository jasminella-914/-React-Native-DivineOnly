import { StyleSheet, Text, SafeAreaView, Pressable, View } from "react-native";
import React from "react";

export default function Payment({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Confirmation")}>
        <Text style={styles.text}>Mobile Money</Text>
      </Pressable>
    </View>
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
