import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SheetManager } from "react-native-actions-sheet";

const AfroPager = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SVContainer}>
        <View style={{ gap: 11 }}>
          <View style={styles.header}>
            <Image
              source={require("../assets/article5.png")}
              style={styles.image}
            />
            <Image
              source={require("../assets/brush.png")}
              style={styles.image}
            />
            <Image source={require("../assets//circlePhoto.png")} />
          </View>
          <View>
            <Text style={styles.headertext}>
              Shampooing BIO solide nourissant et{" "}
            </Text>
            <Text style={styles.headertext}>réparateur</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable>
              <Text style={styles.buttonText}>Cheveux secs</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.buttonText}>Cheveux abimés</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.text}>
          D’origine naturelle, vegan et fabriqué en France, ce shampooing solide
          BIO aux huiles végétales d’Avocat et de Coco Bio, au beurre de Karité
          bio et au lait de Coco...
        </Text>
        <View style={{ paddingTop: 16, gap: 20 }}>
          <Pressable
            onPress={() => SheetManager.show("Size")}
            style={styles.sizeContainer}
          >
            <Text></Text>
            <Ionicons
              name="chevron-down"
              size={24}
              color={"#469597"}
              style={styles.icon}
            />
          </Pressable>
          <View style={styles.numButton}>
            <Pressable style={styles.add}>
              <Ionicons name="add" size={15} />
            </Pressable>
            <Text style={[styles.headertext, { textAlign: "center" }]}>1</Text>
            <Pressable style={styles.add}>
              <View style={styles.border}></View>
            </Pressable>
            <Text style={{ position: "absolute", right: 5 }}>5,99 €</Text>
          </View>
          <Pressable style={styles.footerButton}>
            <Text style={styles.footerText}>Ajouter au panier</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AfroPager;

const styles = StyleSheet.create({
  headertext: {
    fontSize: 16,
    fontWeight: "600",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  SVContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameinfo: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 41,
    height: 41,
    borderRadius: 34,
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
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  text: {
    paddingTop: 8,
    fontSize: 12,
    fontWeight: "400",
  },
  sizeContainer: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    padding: 20,
    flexDirection: "row",
    borderRadius: 14,
  },
  add: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    padding: 5,
    borderRadius: 6,
  },
  footerButton: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 97,
    marginTop: 20,
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 18,
  },
  border: {
    borderWidth: 0.5,
    width: 14,
    backgroundColor: "red",
    marginVertical: 6,
  },
  numButton: { flexDirection: "row", gap: 10, alignItems: "center" },
});
