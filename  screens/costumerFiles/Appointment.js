import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Appointment() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Prendre rendez-vous</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F20",
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
});
