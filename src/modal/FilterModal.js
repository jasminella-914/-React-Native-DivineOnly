import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ActionSheet, {
  FlatList,
  SheetManager,
} from "react-native-actions-sheet";
import React, { lazy, useState } from "react";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

const data = [
  {
    id: 0,
    label: "moins de 50€",
  },
  {
    id: 1,
    label: "moins de 50€",
  },
  {
    id: 2,
    label: "moins de 50€",
  },
  {
    id: 3,
    label: "moins de 50€",
  },
];
export default function FilterModal() {
  const [selected, setSelected] = useState("");
  return (
    <ActionSheet containerStyle={styles.container} id="Filter">
      <View style={styles.border}></View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.headerText}>Prix</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.buttonContainer}>
          {data.map((list, index) => {
            return (
              <Pressable
                onPress={() => setSelected(index)}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      selected === index ? Colors.primary : Colors.white,
                    borderColor:
                      selected === index ? Colors.primary : Colors.border,
                  },
                ]}
                key={list.id}
              >
                <Text
                  style={[
                    styles.buttontext,
                    { color: selected === index ? Colors.white : Colors.black },
                  ]}
                >
                  {list.label}
                </Text>
              </Pressable>
            );
          })}
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
            <Text style={[styles.footerText, { color: Colors.primary }]}>
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
    ...FONTS.h1,
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 17,
    borderWidth: 1,
    borderRadius: 17,
    borderColor: Colors.border,
  },
  buttontext: {
    color: Colors.default,
    ...FONTS.textRegular,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 20,
    borderRadius: 15,
    ...FONTS.textRegular,
  },
  footerbutton: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 15,
  },
  footerText: {
    color: Colors.white,
    textAlign: "center",
    ...FONTS.h2,
  },
  border: {
    borderWidth: 3,
    borderColor: Colors.gray,
    width: 52,
    height: 5,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  container: {
    flex: 0.7,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
