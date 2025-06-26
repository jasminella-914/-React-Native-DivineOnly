import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import React from "react";

export default function RateModal() {
  return (
    <SafeAreaView
      style={{
        justifyContent: "flex-start",
        backgroundColor: "red",
        flex: 0.25,
        marginTop: "auto",
        padding: 20,
        borderRadius: 20,
      }}
    >
      <Text>RateModal</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
