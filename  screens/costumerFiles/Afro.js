import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { IA_DATA, IA_DATA2 } from "../../data/data";
import { SheetManager } from "react-native-actions-sheet";

export default function Afro({ navigation }) {
  // const [selectedIndex, setIsSelectedIndex] = useState();
  // const data = selectedIndex === 0 ? IA_DATA : IA_DATA2;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Afro</Text>
      </View>
      <Image
        source={require("../../assets/bgPhoto.png")}
        style={styles.image}
      />
      <View style={styles.tabContainer}>
        <View>
          {["Shampooing BIO solide nourissant et réparateur"].map(
            (item, index) => (
              <View
                style={{
                  flex: 1,
                  // alignItems: "center",
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                  gap: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/circlePhoto.png")}
                    width={40}
                    height={40}
                  />
                  <Image
                    source={require("../../assets/circlePhoto.png")}
                    width={40}
                    height={40}
                  />
                  <Image
                    source={require("../../assets/circlePhoto.png")}
                    width={40}
                    height={40}
                  />
                </View>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  {item}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                    alignContent: "flex-start",
                  }}
                >
                  <Pressable>
                    <Text style={styles.buttonText}>Cheveux secs</Text>
                  </Pressable>
                  <Pressable>
                    <Text style={styles.buttonText}>Cheveux abimés</Text>
                  </Pressable>
                </View>
                <Text>
                  D’origine naturelle, vegan et fabriqué en France, ce
                  shampooing solide BIO aux huiles végétales d’Avocat et de Coco
                  Bio, au beurre de Karité bio et au lait de Coco...
                </Text>
                <View style={{ gap: 20 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Pressable
                      onPress={() => SheetManager.show("Size")}
                      style={{
                        borderWidth: 1,
                        paddingVertical: 25,
                        borderColor: "#BBC6C8",
                        borderRadius: 14,
                        paddingHorizontal: 175,
                      }}
                    >
                      <Ionicons
                        name="chevron-down"
                        size={20}
                        style={styles.icon}
                      />
                    </Pressable>
                  </View>
                  <Text style={{ textAlign: "right"}}>5,99 €</Text>
                </View>
                <Pressable style={styles.button}>
                  <Text
                    style={[
                      styles.buttonText,
                      { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
                    ]}
                  >
                    Ajouter au panier
                  </Text>
                </Pressable>
              </View>
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F20",
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  image: {
    width: 393,
    height: 360,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    backgroundColor: "#4695971A",
    color: "#000000",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 14,
  },
  button: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 97,
    marginTop: "auto",
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
    // backgroundColor: "red",
  },
  icon: {
    position: "absolute",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    right: 10,
    color: "#469597",
  },
});
