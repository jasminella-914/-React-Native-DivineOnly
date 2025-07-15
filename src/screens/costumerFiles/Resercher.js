import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Pressable,
  FlatList,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigate } from "../../navigation/navigationService";
import { SEARCHLIST_DATA } from "../../data/data";
import { Colors } from "../../styles/Colors";

export default function Resercher({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Resercher</Text>
      </View>
      <View style={styles.secondcontainer}>
        <TextInput
          placeholder="Où ?"
          style={styles.input}
          clearButtonMode="always"
          autoCorrect={false}
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}
        />

        {searchQuery ? (
          <FlatList
            data={SEARCHLIST_DATA}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => navigate("Booking")}
                  style={styles.listContainer}
                >
                  <Image source={item.image} />
                  <View style={styles.infoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.info}>{item.info}</Text>
                  </View>
                </Pressable>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 10 }}></View>;
            }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Pressable
            onPress={() => navigate("Booking")}
            style={styles.locContainer}
          >
            <Ionicons
              name="location-outline"
              size={24}
              color={Colors.primary}
            />
            <Text style={styles.locText}>Autour de moi</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 60,
  },
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.default,
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  header: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
  secondcontainer: {
    backgroundColor: Colors.blueGreen,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    paddingVertical: 21,
    borderRadius: 14,
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  locText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,

    paddingVertical: 21,
    paddingLeft: 20,
    margin: 5,

    backgroundColor: Colors.white,
    borderRadius: 14,
  },
  listContainer: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: Colors.blueGreen,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  infoContainer: {
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  info: {
    fontSize: 12,
    fontWeight: "400",
  },
  locContainer: { flexDirection: "row", gap: 5, alignItems: "center" },
});
