import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { SERVICE_DATA } from "../data/data";
import { SheetManager } from "react-native-actions-sheet";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Booking({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <Image source={require("../assets/logoName.png")} style={styles.logo} />
        <View style={styles.input}>
          <View style={{ flexDirection: "row", gap: 9, alignItems: "center" }}>
            <Ionicons name="search-outline" size={22} />
            <View>
              <Text>Coloration</Text>
              <Text>Autour de moi</Text>
            </View>
            <Pressable style={styles.pencil}>
              <Image source={require("../assets/pencil.png")} />
            </Pressable>
          </View>
        </View>
        {/* <TextInput placeholder="Où ? " style={styles.input} /> */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.headerText}>Réserve ta prestation</Text>
          <Pressable
            onPress={() => SheetManager.show("Sort")}
            style={styles.button}
          >
            <Image
              source={require("../assets/filter.png")}
              width={17}
              height={17}
            />
            <Text style={styles.filter}>Filtrer</Text>
          </Pressable>
        </View>
        <FlatList
          data={SERVICE_DATA}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 20 }}></View>;
          }}
          renderItem={({ item }) => {
            return (
              <Pressable onPress={() => navigation.navigate("Pyrene")}>
                <Image source={item.image} />
                <Text style={styles.service}>{item.service}</Text>
                <View style={styles.info}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <Image source={item.icon} width={15} height={18} />

                    <Text style={styles.location}>{item.loc}</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Image source={item.secondIcon} />
                    <Text
                      style={[styles.location, { textDecorationLine: "none" }]}
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    borderRadius: 14,
    padding: 10,
  },
  secondContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
  },
  filter: {
    color: "#469597",
    fontSize: 12,
    fontWeight: "400",
  },
  button: {
    flexDirection: "row",
    gap: 8,
    borderWidth: 1,
    borderColor: "#469597",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  Text: {
    backgroundColor: "#4695971A",
    paddingVertical: 9,
    paddingHorizontal: 8,
    borderRadius: 18,
    fontSize: 12,
    fontWeight: "500",
    color: "#449598",
  },
  service: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: 10,
    left: 10,
    padding: 4,
    borderRadius: 7,
    fontSize: 12,
    fontWeight: "500",
  },
  pencil: {
    position: "absolute",
    right: 10,
  },
  location: {
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "400",
  },
  info: {
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: "#00000021",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
});
