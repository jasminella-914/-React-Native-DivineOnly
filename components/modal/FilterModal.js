import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import React from "react";

export default function FilterModal() {
  
  return (
    <ActionSheet
      containerStyle={{ flex: 0.7, paddingHorizontal: 20 }}
      id="Filter"
    >
      <View>
        <View style={{ marginBottom: 20 }}>
          <View style={styles.border}></View>
          <Text style={styles.headerText}>Prix</Text>
        </View>
        <View
          style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
        >
          <View style={{ gap: 10 }}>
            <Pressable style={styles.button}>
              <Text style={styles.buttontext}>moins de 50€</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttontext}>moins de 150€</Text>
            </Pressable>
          </View>
          <View style={{ gap: 10 }}>
            <Pressable style={styles.button}>
              <Text style={styles.buttontext}>moins de 100€</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttontext}>moins de 200€</Text>
            </Pressable>
          </View>
        </View>
        <View style={{ gap: 10, marginTop: 20 }}>
          <TextInput style={styles.input} placeholder="Prix minimum" />
          <TextInput style={styles.input} placeholder="Prix minimum" />
        </View>
        <View style={{ marginTop: 50, gap: 20 }}>
          <Pressable style={styles.footerbutton}>
            <Text style={styles.footerText}>Appliquer</Text>
          </Pressable>
          <Pressable>
            <Text style={[styles.footerText, { color: "#469597" }]}>
              Réinitialiser
            </Text>
          </Pressable>
        </View>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 17,
    borderWidth: 1,
    borderRadius: 17,
    borderColor: "#BBC6C8",
  },
  buttontext: {
    color: "#0E1F20",
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    padding: 20,
    borderRadius: 15,
  },
  footerbutton: {
    backgroundColor: "#469597",
    padding: 20,
    borderRadius: 15,
  },
  footerText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  border: {
    borderWidth: 3,
    borderColor: "#E9E9E9",
    width: 52,
    height: 5,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
  },
});
