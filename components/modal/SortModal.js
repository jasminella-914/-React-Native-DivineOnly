import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

export default function SortModal() {
  return (
    <ActionSheet containerStyle={{ flex: 1}} id="Sort">
      <View>
        <Text>SortModal</Text>
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({});
