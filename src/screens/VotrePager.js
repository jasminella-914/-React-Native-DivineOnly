import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../styles/Colors";

const VotrePager = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.headertext}>Lola Brazilia</Text>
        <View style={{ gap: 5 }}>
          <Text style={styles.text}>
            Rendez-vous prévu le 22 juin 2022 à 16h
          </Text>
          <Text style={[styles.text, { textDecorationLine: "underline" }]}>
            36 rue de la Joie, 13008 Marseille
          </Text>
        </View>
        <View style={{ gap: 8, marginTop: 24 }}>
          <Text style={styles.bodyText}>Services</Text>
          <View
            style={styles.info}
          >
            <Text style={styles.text}>Soin nettoyant au charbon végétal</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={[styles.text, { fontSize: 12 }]}>30 min</Text>
              <Text style={[styles.text, { fontSize: 12 }]}>45€</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>Extension des cils</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Text style={[styles.text, { fontSize: 12 }]}>30 min</Text>
              <Text style={[styles.text, { fontSize: 12 }]}>45€</Text>
            </View>
          </View>
        </View>
        <View style={{ gap: 10, marginTop: 24 }}>
          <Text style={[{ fontSize: 16, fontWeight: "600" }]}>
            Informations complémentaires
          </Text>
          <TextInput
            multiline
            placeholder="Besoins précis,..."
            style={styles.input}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Payment2")}
        >
          <Text style={styles.buttonText}>Confirmer pour 90€</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default VotrePager;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "600",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 10,
    paddingHorizontal: 94,
    marginTop: 30,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    minHeight: 100,
    borderRadius: 10,
    borderColor: Colors.border,
    textAlignVertical: "top",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
