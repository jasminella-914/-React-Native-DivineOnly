import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import RadioButtonRN from "radio-buttons-react-native";

const data = [
  {
    label: "Livraison en point relais - Mondial relay",
  },
  {
    label: "Livraison à domicile - Colissimo",
  },
  {
    label: "Livraison à domicile avec signature - Colissimo",
  },
];
export default function Delivery({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <Ionicons
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headertext}>Livraison</Text>
        <Ionicons name="close" size={24} onPress={() => navigation.goBack()} />
      </View>
      <Pressable onPress={() => navigation.navigate("Payment")} style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Payer avec Mobile Money</Text>
      </Pressable>
      {/* <View>
        <RadioButtonRN
          selectedBtn={(e) => console.log(e)}
          data={data}
          activeColor="#000000"
          // icon={<Ionicons name="checkmark-outline" color={"#FFFFFF"}  style={{ backgroundColor: "#000000"}}/>}
        />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  secondContainer: {
    marginHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headertext: {
    fontSize: 18,
    fontWeight: "700",
  },
  footerButton: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    paddingHorizontal: 72,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: "auto"
    
  },
  footerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
