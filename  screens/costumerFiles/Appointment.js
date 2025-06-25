import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Calendar, LocaleConfig } from "react-native-calendars";

// import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = "fr";

export default function Appointment({ navigation }) {
  const [selected, setSelected] = useState("");

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
      <ScrollView>
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
            <Text style={styles.addText}>
              {" "}
              Ajouter une prestation à la suite
            </Text>
          </Pressable>
          <View style={{ paddingHorizontal: 20, gap: 20 }}>
            <Text style={styles.name}>Avec qui ? </Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Pressable onPress={() => navigation.navigate("Your Appointment")} style={styles.buttonPhoto}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 14,
                      fontWeight: "500",
                      color: "#000000",
                      textAlign: "center",
                      backgroundColor: "#F5F5F5",
                      paddingVertical: 30,
                    },
                  ]}
                >
                  Première disponibilité
                </Text>
              </Pressable>
            </View>
            <View style={{ gap: 10}}>
              <Text style={[styles.name, { paddingLeft: 20}]}>Date et heure de rendez-vous </Text>
              <View>
                <Calendar
                style={{
                    // height: 100,
                    borderRadius: 20
                }}
                  theme={{
                    backgroundColor: "#F5F5F5",
                    calendarBackground: "#F5F5F5",
                    selectedDayBackgroundColor: "#469597",
                    todayTextColor: "#469597",
                    arrowColor:  "#469597",
                    textDayStyle: {
                        fontSize: 14,
                        fontWeight: "600"
                    },
                    
                    
                  }}
                  onDayPress={(day) => {
                    setSelected(day.dateString);
                  }}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedDotColor: "orange",
                    },
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
  buttonPhoto: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 23,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
