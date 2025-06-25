import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Votre({ navigation }) {
  return (
    <SafeAreaView style={{backgroundColor: "#FFFFFF" }}>
      <View style={styles.header}>
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Votre rendez-vous</Text>
      </View>
      <Image source={require("../../assets/lashPhoto.png")} />
      <View style={styles.tabContainer}>
        <View>
          {["Lola Brazilia"].map((item, index) => (
            <View
              style={{
                flex: 1,
                // alignItems: "center",
                paddingVertical: 12,
                paddingHorizontal: 20,
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F20",
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  tabContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
   
   
  },
});
