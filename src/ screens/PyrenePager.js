import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigate } from "../src/navigation/navigationService";
import Information from "./Information";
import Avis from "./Avis";
import Boutique from "./Boutique";
import Articles from "./Articles";

export default function PyrenePager() {
  return (
    <PagerView style={styles.container} initialPage={0}>
      <View key="1">
        <Text style={styles.pageText}>Informations</Text>
        <Information />
        <Pressable
          onPress={() => navigate("Appointment")}
          style={[styles.footer, { marginBottom: 10, marginHorizontal: 20 }]}
        >
          <Text style={styles.footertext}>Prendre rendez-vous</Text>
        </Pressable>
      </View>

      <View key="2">
        <Text style={styles.pageText}>Avis</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Avis />
        </ScrollView>
        <Pressable
          onPress={() => navigate("Appointment")}
          style={[styles.footer, { marginBottom: 10, marginHorizontal: 20 }]}
        >
          <Text style={styles.footertext}>Prendre rendez-vous</Text>
        </Pressable>
      </View>

      <View key="3">
        <Text style={styles.pageText}>Boutique</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Boutique />
        </ScrollView>
        <Pressable
          onPress={() => navigate("Appointment")}
          style={[styles.footer, { marginBottom: 10, marginHorizontal: 20 }]}
        >
          <Text style={styles.footertext}>Prendre rendez-vous</Text>
        </Pressable>
      </View>

      <View key="4">
        <Text style={styles.pageText}>Articles</Text>
        <Articles />

        <Pressable
          onPress={() => navigate("Appointment")}
          style={[styles.footer, { marginBottom: 10, marginHorizontal: 20 }]}
        >
          <Text style={styles.footertext}>Prendre rendez-vous</Text>
        </Pressable>
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  pageText: {
    color: "#469597",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: "#469597",
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  lorem: {
    fontSize: 14,
    fontWeight: "500",
  },
  headertext: {
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: "#BBC6C8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footertext: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
  },
  caption: {
    fontSize: 12,
    fontWeight: "400",
  },
  listContainer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderColor: "#E5E3E4",
    justifyContent: "space-between",
  },

  productContainer: {
    gap: 5,
  },
  info: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  map: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  mapContainer: {
    width: 340,
    height: 300,
    borderWidth: 1,
    borderColor: "#C9C9C9",
  },
});
