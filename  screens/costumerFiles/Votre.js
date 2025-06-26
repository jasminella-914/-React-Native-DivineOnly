import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollState } from "react-native-actions-sheet/dist/src/hooks/use-scroll-handlers";
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
        {/* <Text style={styles.headertext}>Votre rendez-vous</Text> */}
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
            <ScrollView
              style={{
                paddingVertical: 25,
                paddingHorizontal: 20,
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  paddingBottom: 8,
                }}
              >
                {item}
              </Text>

              <View style={{ gap: 20 }}>
                <View>
                  <Text style={styles.text}>
                    Rendez-vous prévu le 22 juin 2022 à 16h
                  </Text>
                  <Text
                    style={[styles.text, { textDecorationLine: "underline" }]}
                  >
                    36 rue de la Joie, 13008 Marseille
                  </Text>
                </View>
                <View style={{ gap: 8 }}>
                  <Text style={styles.bodyText}>Services</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.text}>
                      Soin nettoyant au charbon végétal
                    </Text>
                    <View style={{ flexDirection: "row", gap: 8 }}>
                      <Text style={[styles.text, { fontSize: 12 }]}>
                        30 min
                      </Text>
                      <Text style={[styles.text, { fontSize: 12 }]}>45€</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.text}>Extension des cils</Text>
                    <View style={{ flexDirection: "row", gap: 8 }}>
                      <Text style={[styles.text, { fontSize: 12 }]}>
                        30 min
                      </Text>
                      <Text style={[styles.text, { fontSize: 12 }]}>45€</Text>
                    </View>
                  </View>
                </View>
                <View style={{ gap: 10 }}>
                  <Text style={[{ fontSize: 16, fontWeight: "600" }]}>
                    Informations complémentaires
                  </Text>
                  <TextInput
                    multiline
                    placeholder="Besoins précis,..."
                    style={styles.input}
                  />
                </View>
                <Pressable
                  style={styles.button}
                  onPress={() => navigation.navigate("Payment2")}
                >
                  <Text style={styles.buttonText}>Confirmer pour 90€</Text>
                </Pressable>
              </View>
            </ScrollView>
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
    // alignSelf: "center",
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
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#469597",
    paddingVertical: 18,
    borderRadius: 10,
    paddingHorizontal: 94,
    marginTop: "auto",
  },
  header: {
    flexDirection: "row",
    gap: 100,

    justifyContent: "space-between",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    minHeight: 100,
    borderRadius: 10,
    borderColor: "#BBC6C8",
    textAlignVertical: "top",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
