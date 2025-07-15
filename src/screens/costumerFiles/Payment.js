import { StyleSheet, Text, SafeAreaView, Pressable, View } from "react-native";
import React from "react";
import { Colors } from "../../styles/Colors";

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
