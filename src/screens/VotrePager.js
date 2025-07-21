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
import { FONTS } from "../styles/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";

const VotrePager = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20}}>
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
            <View style={styles.info}>
              <Text style={styles.text}>Soin nettoyant au charbon végétal</Text>
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Text style={styles.time}>30 min</Text>
                <Text style={styles.time}>45€</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>Extension des cils</Text>
              <View style={{ flexDirection: "row", gap: 8 }}>
                <Text style={styles.time}>30 min</Text>
                <Text style={styles.time}>45€</Text>
              </View>
            </View>
          </View>
          <View style={{ gap: 10, marginTop: 24 }}>
            <Text style={styles.bodyText}>Informations complémentaires</Text>
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
    </SafeAreaView>
  );
};

export default VotrePager;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
  
  },
  headertext: {
    ...FONTS.h1,
    paddingBottom: 8,
  },
  text: {
    ...FONTS.textRegular,
  },
  bodyText: {
    ...FONTS.h2,
    color: Colors.default,
  },
  buttonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 10,
    marginTop: 30,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    minHeight: 100,
    borderRadius: 10,
    borderColor: Colors.border,
    textAlignVertical: "top",
    ...FONTS.textRegular,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    ...FONTS.textSmallMed,
    color: Colors.default,
  },
});
