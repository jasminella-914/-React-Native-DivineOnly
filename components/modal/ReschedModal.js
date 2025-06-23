import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

export default function ReschedModal() {
  return (
    <ActionSheet containerStyle={{ flex: 0.55 }} id="Reschedule">
      <View>
        <Image source={require("../../assets/groupPhoto.png")} />
        <View style={{ alignItems: "center", gap: 20, marginTop: 20 }}>
          <Text style={styles.headerText}>Institut Pyrène</Text>
          <Text style={styles.bodyText}>
            Rendez-vous prévu le 17 juin 2022 à 16h
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,

              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/location.png")} />
            <Text style={[styles.bodyText, { fontSize: 13 }]}>
              500 Rte de Berre, 33300 Bordeaux
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[styles.headerText, { textAlign: "center", marginTop: 20 }]}
          >
            Votre rendez-vous
          </Text>
          <View style={{ gap: 10, marginTop: 20, marginHorizontal: 20 }}>
            <Text style={styles.bodyText}>Épilation par haute fréquence</Text>
            <Text style={styles.bodyText}>French Manucure</Text>
            <Text style={styles.bodyText}>Soin des pieds brésiliens</Text>
            <Text style={styles.bodyText}>Massage à l’huile chaude</Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.footerbutton}>
        <Text style={styles.footertext}>Replanifier</Text>
      </Pressable>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "700",
  },
  bodyText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "500",
  },
  footerbutton: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    paddingHorizontal: 132,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  footertext: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
