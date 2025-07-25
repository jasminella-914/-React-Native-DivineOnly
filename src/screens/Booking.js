import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { SERVICE_DATA } from "../data/data";
import { SheetManager } from "react-native-actions-sheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Booking({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Image
          source={require("../assets/img/logoName.png")}
          style={styles.logo}
        />
        <View style={styles.input}>
          <View style={styles.header}>
            <Ionicons name="search-outline" size={22} />
            <View>
              <Text style={styles.text}>Coloration</Text>
              <Text style={styles.text}>Autour de moi</Text>
            </View>
            <Pressable style={styles.pencil}>
              <Image source={require("../assets/icon/pencil.png")} />
            </Pressable>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          <View
            style={[
              styles.header,
              { justifyContent: "space-between", paddingHorizontal: 20 },
            ]}
          >
            <Text style={styles.headerText}>Réserve ta prestation</Text>
            <Pressable
              onPress={() => SheetManager.show("Sort")}
              style={styles.button}
            >
              <Image
                source={require("../assets/icon/filter.png")}
                width={17}
                height={17}
              />
              <Text style={styles.filter}>Filtrer</Text>
            </Pressable>
          </View>
          <FlatList
            contentContainerStyle={styles.secondContainer}
            scrollEnabled={false}
            data={SERVICE_DATA}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 20 }}></View>;
            }}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => navigation.navigate("Pyrene")}>
                  <Image source={item.image} style={{ width: 353 }} />
                  <Text style={styles.service}>{item.service}</Text>
                  <View style={styles.info}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <Image source={item.icon} />
                      <Text style={styles.location}>{item.loc}</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <Image source={item.secondIcon} />
                      <Text
                        style={[
                          styles.location,
                          { textDecorationLine: "none" },
                        ]}
                      >
                        {item.rate}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                      <Text style={styles.Text}>{item.month}</Text>
                      <Text style={styles.Text}>{item.type}</Text>
                      <Text style={styles.Text}>{item.day}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    marginTop: 20,
    paddingBottom: 20,
  },
  logo: {
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  secondContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    ...FONTS.h1,
  },
  filter: {
    color: Colors.primary,
    ...FONTS.textSmallLight,
  },
  button: {
    flexDirection: "row",
    gap: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  Text: {
    backgroundColor: Colors.blueGreen,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    ...FONTS.textRegular,
    color: Colors.primary,
  },
  service: {
    backgroundColor: Colors.white,
    position: "absolute",
    top: 10,
    left: 10,
    padding: 4,
    borderRadius: 7,
    ...FONTS.textRegular,
  },
  pencil: {
    position: "absolute",
    right: 10,
  },
  location: {
    textDecorationLine: "underline",
    ...FONTS.textSmallLight,
    color: Colors.default,
  },
  info: {
    gap: 10,
    backgroundColor: Colors.white,
    paddingLeft: 8,
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: Colors.black21,
  },
  title: {
    ...FONTS.h2,
    color: Colors.default,
  },
  header: {
    flexDirection: "row",
    gap: 9,
    alignItems: "center",
  },
  text: {
    ...FONTS.textRegular,
    color: Colors.default,
  },
});
