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
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

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
          style={styles.back}
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headertext}>Livraison</Text>
        <Ionicons
          name="close"
          size={24}
          style={styles.close}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Pressable style={styles.header}>
          <Text style={styles.monText}>Mon panier (3)</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>19,99€</Text>
            <Ionicons name="chevron-down" size={18} color={Colors.primary} />
          </View>
        </Pressable>
        <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
          <Text style={styles.modeText}>Mode de livraison</Text>

          <View style={{ paddingBottom: 15 }}>
            <RadioButtonRN
              selectedBtn={(e) => console.log(e)}
              data={data}
              box={false}
              circleSize={16}
              style={styles.radioButton}
              activeColor={Colors.black}
              deactiveColor={Colors.black}
              borderColor={Colors.primary}
              boxActiveBgColor={Colors.blueGreen}
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
            checkBoxColor={Colors.black}
            isChecked={isChecked}
          />
          <Text style={styles.monText}>Adresse de facturation similaire</Text>
        </View>
        <View style={styles.total}>
          <View style={styles.footerContainer}>
            <Text style={styles.monText}>Sous total</Text>
            <Text style={styles.monText}>19,99€</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.monText}>Livraison</Text>
            <Text style={styles.monText}>5,50€</Text>
          </View>
          <View style={styles.border}></View>
          <View style={styles.footerContainer}>
            <Text style={styles.price}>Total </Text>
            <Text style={styles.price}>25,49€</Text>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Payment")}
          style={styles.footerButton}
        >
          <Text style={styles.footerButtonText}>Payer avec Mobile Money</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  secondContainer: {
    paddingVertical: 10,
  },
  headertext: {
    ...FONTS.h1,
    color: Colors.default,
    alignSelf: "center",
  },
  footerButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 30
  },
  footerButtonText: {
    color: Colors.white,
    ...FONTS.h2,
    textAlign: "center",
  },
  header: {
    backgroundColor: Colors.lightBlack,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  monText: {
    ...FONTS.textSmallLight,
  },
  price: {
    ...FONTS.textRegBold,
    color: Colors.black,
  },
  info: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 10,
    borderRadius: 10,
  },
  infoText: {
    ...FONTS.textRegular,
    color: Colors.grayBlack,
  },
  modifier: {
    color: Colors.primary,
    ...FONTS.textRegular,
    textDecorationLine: "underline",
  },
  checkBox: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: Colors.lightBlack,
    paddingVertical: 14,
    paddingLeft: 15,
    marginTop: 28,
  },
  total: {
    backgroundColor: Colors.lightBlack,
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
    borderColor: Colors.blueGreen,
    marginVertical: 11,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  modeText: {
    ...FONTS.h2,
    color: Colors.black,
    textAlign: "center",
  },
  radioButton: {
    borderWidth: 0.8,
    paddingBottom: 15,
    borderColor: Colors.border,
    borderRadius: 15,
    marginTop: 10,
  },
  back: {
    position: "absolute",
    left: 20,
    top: 10,
  },
  close: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});
