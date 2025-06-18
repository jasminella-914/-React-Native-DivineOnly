import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";

export default function Services() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/logoName.png")}
        style={styles.logo}
      />

      <View style={styles.secondContainer}>
        <View style={styles.thirdContainer}>
          <Text>Réserve ta prestation</Text>

          <TextInput
            placeholder="Nom du professionnel, prestations..."
            style={styles.inputContainer}
          />
          <TextInput
            placeholder="Adresse, ville..."
            style={styles.inputContainer}
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
  },
  logo: {
    alignSelf: "center",
  },
  secondContainer: {
    backgroundColor: "#F5F5F5",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
  },
  thirdContainer: {
    margin: 20,
    gap: 20,
  },
});
