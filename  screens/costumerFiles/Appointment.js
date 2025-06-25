import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Appointment({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <View style={styles.header}>
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Prendre rendez-vous</Text>
      </View>
      <Text style={styles.title}>Lola Brazilia</Text>
      <View style={styles.container}>
        <Text style={styles.name}>Soin nettoyant au charbon végétal</Text>
        <Text style={styles.text}>Convient à tout type de peau</Text>
        <View
          style={{
            // borderBottomWidth: 1,
            borderColor: "#BBC6C873",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Image source={require("../../assets//Clock.png")} />
          <Text style={styles.time}>30 min</Text>
          <Text style={[styles.time, { color: "#469597" }]}>45€</Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.button}>
          <Image source={require("../../assets/add.png")} />
          <Text style={styles.addText}> Ajouter une prestation à la suite</Text>
        </Pressable>
        <Text>Avec qui ? </Text>
        <View>
          <Pressable style={styles.buttonPhoto}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#000000",
                  textAlign: "center",
                  backgroundColor: "#F5F5F5",
                  paddingVertical: 46
                },
              ]}
            >
              Première disponibilité
            </Text>
          </Pressable>
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
  header: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#BBC6C873",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#BBC6C873",
    paddingVertical: 30,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
  },
  text: {
    color: "#00000080",
    fontSize: 12,
    fontWeight: "400",
  },
  time: {
    color: "#0E1F20",
    fontSize: 14,
    fontWeight: "600",
  },
  container: {
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#BBC6C873",
    paddingHorizontal: 14,
  },
  addText: {
    color: "#469597",
    fontSize: 18,
    fontWeight: "700",
  },
  button: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  buttonPhoto: {},
});
