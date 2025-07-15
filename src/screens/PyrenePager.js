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
import { navigate } from "../navigation/navigationService";
import Information from "./Information";
import Avis from "./Avis";
import Boutique from "./Boutique";
import Articles from "./Articles";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

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
    backgroundColor: Colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  pageText: {
    color: Colors.primary,
    ...FONTS.textRegular,
    textAlign: "center",
    borderBottomWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  footertext: {
    ...FONTS.h2,
    color: Colors.white,
    textAlign: "center",
  },
  footer: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
