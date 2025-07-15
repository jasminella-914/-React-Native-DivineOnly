import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import filledStar from "../assets/icon/rating.png";
import emptyStar from "../assets/icon/emptyStar.png";
import { Colors } from "../styles/Colors";

const Rating = ({ selected, onPress, filled = 5 }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.starContainer,
        {
          backgroundColor: selected ? Colors.primary : Colors.white,
        },
      ]}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Image
            key={index}
            source={index < filled ? filledStar : emptyStar}
            tintColor={selected ? Colors.white : Colors.primary}
          />
        );
      })}
    </Pressable>
  );
};

export default Rating;

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 75,
    gap: 10,
    borderRadius: 14,
    borderColor: Colors.border,
  },
});
