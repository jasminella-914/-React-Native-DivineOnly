import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  SafeAreaView,
  requireNativeComponent,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Calendar } from "react-native-calendars";
import { TIME_DATA } from "../../data/data";

export default function Reschedule({ navigation, index }) {
  const [selected, setSelected] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Afro</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.secContainer}>
          <Image source={require("../../assets/Photo.png")} />
          <View style={{ gap: 8 }}>
            <Text style={styles.date}>Dimanche 17 Juin • 16h</Text>
            <Text style={styles.text}>Institut Pyrène • 4 prestations</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <View style={{ gap: 10, paddingHorizontal: 20 }}>
          <Text style={styles.date}>
            Date et heure de rendez-vous disponibles
          </Text>
          <Calendar
            hideExtraDays
            style={{
              borderRadius: 20,
            }}
            theme={styles.calendarTheme}
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <FlatList

              numColumns={Math.ceil(TIME_DATA.length / 2)}
              contentContainerStyle={{ gap: 10 }}
              columnWrapperStyle={{ gap: 10 }}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              data={TIME_DATA}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ gap: 10 }}>
                    <Pressable
                      onPress={() => {
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
          <View style={{ marginTop: 20, gap: 5 }}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.footer}
            >
              <Text style={[styles.footerTexT, { color: "#FFFFFF" }]}>
                Confirmer
              </Text>
            </Pressable>
            <Pressable style={[styles.footer, { backgroundColor: "#FFFFFF" }]}>
              <Text style={[styles.footerTexT]}>Annuler</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 10,
  },
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F20",
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  secContainer: {
    backgroundColor: "#00000008",
    paddingVertical: 23,
    marginHorizontal: 20,
    borderRadius: 15,
    paddingHorizontal: 28,
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
    marginTop: 20,
  },
  date: {
    fontSize: 14,
    fontWeight: "600",
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
  },
  border: {
    borderBottomWidth: 1,
    borderColor: "#BBC6C8",
    marginTop: 20,
    marginBottom: 37,
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
  footer: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    borderRadius: 10,
  },
  footerTexT: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#469597",
  },
  calendarTheme: {
    backgroundColor: "#F5F5F5",
    calendarBackground: "#F5F5F5",
    selectedDayBackgroundColor: "#469597",
    todayTextColor: "#469597",
    arrowColor: "#0E1F20",
    textDayStyle: {
      fontSize: 14,
      fontWeight: "600",
    },
  },
});
