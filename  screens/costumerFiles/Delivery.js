import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import RadioButtonRN from "radio-buttons-react-native";
import CheckBox from "react-native-check-box";
import { useState } from "react";

const data = [
  {
    label: "Livraison en point relais - Mondial relay.",
  },
  {
    label: "Livraison à domicile - Colissimo",
  },
  {
    label: "Livraison à domicile avec signature - Colissimo",
  },
];
export default function Delivery({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable style={styles.header}>
          <Text style={styles.monText}>Mon panier (3)</Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Text style={styles.price}>19,99€</Text>
            <Ionicons name="chevron-down" size={18} color={"#469597"} />
          </View>
        </Pressable>
        <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
          <Text
            style={[
              styles.footerButtonText,
              { textAlign: "center", color: "#000000" },
            ]}
          >
            Mode de livraison
          </Text>

          <View style={{ paddingBottom: 15}}>
            <RadioButtonRN
              selectedBtn={(e) => console.log(e)}
              data={data}
              activeColor="#469597"
            />
          </View>

          <View style={styles.info}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Expédié à</Text>
              <Pressable style={styles.modifier}>
                <Text style={styles.modifier}>Modifier</Text>
              </Pressable>
            </View>
            <Text style={styles.monText}>
              8 rue de la chapelle, 33000 Bordeaux, France
            </Text>
            <View style={styles.border}></View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Contact</Text>
              <Pressable style={styles.modifier}>
                <Text style={styles.modifier}>Modifier</Text>
              </Pressable>
            </View>
            <Text style={styles.monText}>naemi@mail.com</Text>
            <Text style={styles.monText}>0646384398</Text>
          </View>
        </View>
        <View style={styles.checkBox}>
          <CheckBox
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            checkBoxColor="#000000"
            isChecked={isChecked}
          />
          <Text style={styles.monText}>Adresse de facturation similaire</Text>
        </View>
        <View style={styles.total}>
          <View style={styles.footerContainer}>
            <Text>Sous total</Text>
            <Text>19,99€</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text>Livraison</Text>
            <Text>5,50€</Text>
          </View>
          <View style={styles.border}></View>
          <View style={styles.footerContainer}>
            <Text style={styles.price}>Total </Text>
            <Text style={styles.price}>25,49€</Text>
          </View>
        </View>
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate("Payment")}
        style={styles.footerButton}
      >
        <Text style={styles.footerButtonText}>Payer avec Mobile Money</Text>
      </Pressable>
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
    paddingBottom: 20,
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
    marginTop: "auto",
  },
  footerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#00000008",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  monText: {
    fontSize: 12,
    fontWeight: "400",
  },
  price: {
    fontWeight: "600",
    fontSize: 14,
  },
  info: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    padding: 10,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "500",
  },
  modifier: {
    color: "#469597",
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  checkBox: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#00000008",
    paddingVertical: 14,
    paddingLeft: 15,
    marginTop: 28,
  },
  total: {
    backgroundColor: "#00000008",
    marginTop: 28,
    paddingHorizontal: 28,
    marginBottom: 20,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    alignItems: "center",
  },
  border: {
    borderTopWidth: 1,
    borderColor: "#4695971A",
    marginVertical: 11,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
});
