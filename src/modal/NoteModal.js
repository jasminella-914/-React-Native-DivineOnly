import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { RATING_DATA } from "../data/data";
import Rating from "../../src/screens/Rating";

export default function NoteModal() {
  const [selected, setSelected] = useState(null);

  return (
    <ActionSheet containerStyle={styles.container} id="Note">
      <View style={styles.border}></View>
      <View>
        <Text style={styles.headerText}>Note</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 10 }}>
          <Text style={styles.partirText}>À partir de </Text>

          <FlatList
            scrollEnabled={false}
            data={RATING_DATA}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item, index }) => {
              return (
                <Rating
                  selected={selected === index}
                  onPress={() => setSelected(index)}
                  filled={item}
                />
              );
            }}
          />
        </View>
        <View style={{ marginTop: 30, gap: 20 }}>
          <Pressable
            onPress={() => {
              SheetManager.hide("Note");
            }}
            style={styles.footerButton}
          >
            <Text style={styles.buttonText}>Appliquer</Text>
          </Pressable>
          <Pressable>
            <Text style={[styles.buttonText, { color: "#469597" }]}>
              Réinitialiser
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10,
  },
  container: {
    paddingHorizontal: 23,
    flex: 0.7,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 10,
    borderColor: "#BBC6C8",
    paddingHorizontal: 50,
  },
  footerButton: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    paddingHorizontal: 114,
    borderRadius: 10,
    marginTop: "auto",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
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
  starContainer: {
    flexDirection: "row",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 75,
    gap: 10,
    borderRadius: 14,
    borderColor: "#BBC6C8",
  },
  partirText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
