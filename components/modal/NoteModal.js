import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { Rating, AirbnbRating } from "react-native-ratings";
import { navigate } from "../../navigationService";
// import STAR_IMAGE from "../../assets/rating.png"

const STAR_IMAGE = require("../../assets/rating.png");

// ratingCompleted(Rating);
export default function NoteModal() {
  return (
    <ActionSheet containerStyle={styles.container} id="Note">
      <View>
        <Text style={styles.headerText}>Note</Text>
      </View>
      <View style={{ gap: 10 }}>
        <Text>À partir de </Text>
        <Pressable style={styles.button}></Pressable>
        <Pressable style={styles.button}></Pressable>
        <Pressable style={styles.button}></Pressable>
        <Pressable style={styles.button}></Pressable>
        <Pressable style={styles.button}></Pressable>
      </View>
      <View style={{ marginTop: 100, gap: 20 }}>
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
      {/* <View style={{ borderWidth: 1, borderColor: "#BBC6C8" }}>
          <AirbnbRating />

          <AirbnbRating
        count={11}
        defaultRating={11}
        size={20}
      />

          <Rating
            showRating
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
        </View>
        <View style={{ borderWidth: 1, borderColor: "#BBC6C8" }}>
          <AirbnbRating />

          <AirbnbRating
        count={11}
        defaultRating={11}
        size={20}
      />

          <Rating
            showRating
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
        </View> */}
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20,
  },
  container: {
    paddingHorizontal: 23,
    flex: 0.7,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 88,
    borderRadius: 10,
    borderColor: "#BBC6C8",
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
});
