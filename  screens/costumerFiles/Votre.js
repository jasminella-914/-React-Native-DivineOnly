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
import { ScrollState } from "react-native-actions-sheet/dist/src/hooks/use-scroll-handlers";
import { ScrollView } from "react-native-actions-sheet";
import { TextInput } from "react-native-gesture-handler";

export default function Votre({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <View style={styles.header}>
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Votre rendez-vous</Text>
      </View>
      <Image
        source={require("../../assets/lashPhoto.png")}
        style={{
          width: 393,
          height: 360,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: 20,
        }}
      />
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
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                {item}
              </Text>

              <View>
                <Text style={styles.text}>Rendez-vous prévu le 22 juin 2022 à 16h</Text>
                <Text style={styles.text}>36 rue de la Joie, 13008 Marseille</Text>
              </View>
              <View>
                <Text>Services</Text>
                <View>
                  <Text>Soin nettoyant au charbon végétal</Text>
                  <Text>30 min</Text>
                  <Text>45€</Text>
                </View>
                <View>
                  <Text>Extension des cils</Text>
                  <Text>30 min</Text>
                  <Text>45€</Text>
                </View>
              </View>
              <View>
                <Text>Informations complémentaires</Text>
                <TextInput />
              </View>
              <Pressable onPress={() => navigation.navigate("Payment")}>
                <Text>Confirmer pour 90€</Text>
              </Pressable>
            </View>
          ))}
        </View>
        <ScrollView></ScrollView>
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
    backgroundColor: "pink",
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 14,
    fontWeight: "500"
  }
});
