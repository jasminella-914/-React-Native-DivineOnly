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
import { FlatList } from "react-native-actions-sheet";
import { AVAILABILTY_DATA, TIME_DATA } from "../../data/data";

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
  const [selectedIndex, setSelectedIndex] = useState("");

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Lola Brazilia</Text>
        <View style={styles.container}>
          <Text style={styles.name}>Soin nettoyant au charbon végétal</Text>
          <Text style={styles.text}>Convient à tout type de peau</Text>
          <View
            style={{
              borderColor: "#BBC6C873",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Image source={require("../../assets/icon/Clock.png")} />
            <Text style={styles.time}>30 min</Text>
            <Text style={[styles.time, { color: "#469597" }]}>45€</Text>
          </View>
        </View>
        <View>
          <Pressable
            style={[
              styles.button,
              {
                backgroundColor: "#FFFFFF",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              },
            ]}
          >
            <Image source={require("../../assets/icon/add.png")} />
            <Text style={styles.addText}>
              {" "}
              Ajouter une prestation à la suite
            </Text>
          </Pressable>
          <View style={{ paddingHorizontal: 20, gap: 20 }}>
            <Text style={styles.name}>Avec qui ? </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10 }}
            >
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
                    },
                  ]}
                >
                  Première
                </Text>
                <Text>disponibilité</Text>
              </Pressable>

              {AVAILABILTY_DATA.map((item, index) => {
                return (
                  <View key={item.id} style={{ gap: 10 }}>
                    <Pressable
                      onPress={() => setSelectedIndex(index)}
                      style={[
                        styles.buttonPhoto,
                        {
                          backgroundColor:
                            selectedIndex === index ? "#469597" : "#F5F5F5",
                        },
                      ]}
                    >
                      <Image source={item.image} />
                      <Text
                        style={[
                          styles.name,
                          {
                            color:
                              selectedIndex === index ? "#FFFFFF" : "#000000",
                          },
                        ]}
                      >
                        {item.name}
                      </Text>
                    </Pressable>
                  </View>
                );
              })}
            </ScrollView>

            <View style={{ gap: 10 }}>
              <Text style={[styles.name, { paddingLeft: 20 }]}>
                Date et heure de rendez-vous{" "}
              </Text>
              <View>
                <Calendar
                  hideExtraDays
                  style={{
                    borderRadius: 20,
                  }}
                  theme={styles.calendar}
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

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ paddingHorizontal: 20, marginTop: 20 }}
        >
          <FlatList
            numColumns={Math.ceil(TIME_DATA.length / 2)}
            contentContainerStyle={{ gap: 10 }}
            columnWrapperStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
            data={TIME_DATA}
            renderItem={({ item, index }) => {
              return (
                <View key={item.id} style={{ gap: 10 }}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Your Appointment");
                      setSelected(index);
                    }}
                    style={[
                      styles.button,
                      {
                        backgroundColor:
                          selected === index ? "#469597" : "#F5F5F5",
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        { color: selected === index ? "#FFFFFF" : "#000000" },
                      ]}
                    >
                      {item.time}
                    </Text>
                  </Pressable>
                </View>
              );
            }}
          />
        </ScrollView>
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
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingHorizontal: 16,
    gap: 5,
  },
  personName: {
    paddingTop: 5,
    fontSize: 14,
    fontWeight: "500",
  },
  calendar: {
    backgroundColor: "#F5F5F5",
    calendarBackground: "#F5F5F5",
    selectedDayBackgroundColor: "#469597",
    todayTextColor: "#469597",
    arrowColor: "#469597",
    textDayStyle: {
      fontSize: 14,
      fontWeight: "600",
    },
  },
  button: {
    backgroundColor: "#00000008",
    paddingVertical: 14,
    paddingHorizontal: 37,
    borderRadius: 10,
  },
  buttonText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "600",
  },
});
