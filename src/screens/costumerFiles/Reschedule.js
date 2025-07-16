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
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

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
          <Image source={require("../../assets/img/Photo.png")} />
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
          <View style={{ marginTop: 20, gap: 5 }}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.footer}
            >
              <Text style={[styles.footerTexT, { color: Colors.white }]}>
                Confirmer
              </Text>
            </Pressable>
            <Pressable
              style={[styles.footer, { backgroundColor: Colors.white }]}
            >
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
    ...FONTS.h1,
    color: Colors.default,
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  secContainer: {
    backgroundColor: Colors.lightBlack,
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
    ...FONTS.textRegBold,
    color: Colors.black,
  },
  text: {
    ...FONTS.textSmallLight,
    color: Colors.black,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: Colors.border,
    marginTop: 20,
    marginBottom: 37,
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
  footer: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
  },
  footerTexT: {
    textAlign: "center",
    ...FONTS.h2,
    color: Colors.primary,
  },
  calendarTheme: {
    backgroundColor: Colors.whiteSmoke,
    calendarBackground: Colors.whiteSmoke,
    selectedDayBackgroundColor: Colors.primary,
    todayTextColor: Colors.primary,
    arrowColor: Colors.default,
    textDayStyle: {
      ...FONTS.textRegBold,
    },
  },
});
