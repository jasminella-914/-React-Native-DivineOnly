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
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

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
    <SafeAreaView style={styles.viewContainer}>
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
          <View>
            <Text style={styles.name}>Soin nettoyant au charbon végétal</Text>
            <Text style={styles.text}>Convient à tout type de peau</Text>
          </View>
          <View
            style={{
              borderColor: Colors.lightBorder,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Image source={require("../../assets/icon/Clock.png")} />
            <Text style={styles.time}>30 min</Text>
            <Text style={[styles.time, { color: Colors.primary }]}>45€</Text>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Pressable
            style={[
              styles.button,
              {
                backgroundColor: Colors.white,
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                paddingVertical: 15,
              },
            ]}
          >
            <Image source={require("../../assets/icon/add.png")} />
            <Text style={styles.addText}>
              {" "}
              Ajouter une prestation à la suite
            </Text>
          </Pressable>
          <View style={{ paddingHorizontal: 20, gap: 10, marginTop: 15 }}>
            <Text style={styles.time}>Avec qui ? </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10 }}
            >
              <Pressable style={styles.buttonPhoto}>
                <Text style={styles.textBox}>Première</Text>
                <Text style={styles.textBox}>disponibilité</Text>
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
                            selectedIndex === index
                              ? Colors.primary
                              : Colors.whiteSmoke,
                        },
                      ]}
                    >
                      <Image source={item.image} />
                      <Text
                        style={[
                          styles.name,
                          {
                            color:
                              selectedIndex === index
                                ? Colors.white
                                : Colors.black,
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

            <View style={{ gap: 10, marginTop: 10 }}>
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
                      navigation.navigate("YourAppointment");
                      setSelected(index);
                    }}
                    style={[
                      styles.button,
                      {
                        backgroundColor:
                          selected === index
                            ? Colors.primary
                            : Colors.whiteSmoke,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        {
                          color:
                            selected === index ? Colors.white : Colors.black,
                        },
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
  viewContainer: { backgroundColor: Colors.white, flex: 1 },
  headertext: {
    ...FONTS.h1,
    color: Colors.default,
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  header: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: Colors.lightBorder,
  },
  title: {
    ...FONTS.h0,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: Colors.lightBorder,
    paddingVertical: 30,
  },
  name: {
    ...FONTS.textRegBold,
    color: Colors.default,
  },
  text: {
    color: Colors.lightBlack,
    ...FONTS.textSmallLight,
  },
  time: {
    color: Colors.default,
    ...FONTS.textRegBold,
  },
  container: {
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: Colors.lightBorder,
    paddingHorizontal: 14,
  },
  addText: {
    color: Colors.primary,
    ...FONTS.h1,
  },
  button: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  buttonPhoto: {
    backgroundColor: Colors.whiteSmoke,
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
    backgroundColor: Colors.whiteSmoke,
    calendarBackground: Colors.whiteSmoke,
    selectedDayBackgroundColor: Colors.primary,
    todayTextColor: Colors.primary,
    arrowColor: Colors.primary,
    textDayStyle: {
      fontSize: 14,
      fontWeight: "600",
    },
  },
  button: {
    backgroundColor: Colors.lightBlack,
    paddingVertical: 14,
    paddingHorizontal: 37,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.black,
    ...FONTS.textRegBold,
  },
  text: {
    ...FONTS.textSmallLight,
    color: Colors.lightBlack,
  },
  textBox: {
    ...FONTS.textRegular,
    color: Colors.black,
    textAlign: "center",
    backgroundColor: Colors.whiteSmoke,
  },
});
