import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigate } from "../navigation/navigationService";
import StarRating from "react-native-star-rating-widget";
import { Colors } from "../styles/Colors";

export default function RateModal({ navigation }) {
  const [rating, setRating] = useState(0);

  return (
    <ActionSheet id="Rate" containerStyle={styles.container}>
      <View>
        <Text style={[styles.header, { paddingBottom: 15 }]}>
          Institut Pyrène
        </Text>
        <Text style={[styles.text, { paddingBottom: 50 }]}>
          Rendez-vous passé • 17 juin 2022 à 16h
        </Text>
        <View>
          <Text
            style={[
              styles.header,
              { fontSize: 16, fontWeight: "600", paddingBottom: 22 },
            ]}
          >
            Notez votre rendez-vous
          </Text>
          <StarRating
            starSize={44}
            color={Colors.primary}
            emptyColor={Colors.border}
            rating={rating}
            onChange={setRating}
            enableHalfStar={false}
            style={{ paddingLeft: 33 }}
          />
        </View>

        <TextInput
          multiline
          placeholder="Rajoutez votre commentaire ici...."
          style={styles.input}
        />
        <Text style={[styles.buttonText, { color: Colors.black, paddingTop: 20 }]}>
          Ajoutez une photo ou une vidéo
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.photoButton}>
            <Ionicons name="camera-outline" color={Colors.border} size={31} />
          </Pressable>
          <Pressable style={styles.photoButton}>
            <Ionicons name="image-outline" color={Colors.border} size={31} />
          </Pressable>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            SheetManager.hide("Rate");
            navigate("Welcome");
          }}
        >
          <Text style={styles.buttonText}>Envoyer mon avis</Text>
        </Pressable>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    minHeight: 100,
    borderRadius: 10,
    borderColor: Colors.border,
    textAlignVertical: "top",
    marginTop: 20,
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
    marginTop: "auto",
  },
  container: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  photoButton: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderStyle: "dashed",
    paddingVertical: 33,
    paddingHorizontal: 33,
    borderRadius: 10,
    marginTop: 33,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 38,
  },
});
