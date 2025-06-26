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
import { navigate } from "../navigationService";
import { FlatList } from "react-native-gesture-handler";
import { AVIS_DATA } from "../data/data";
import Icon from "react-native-ionicons";

export default function PyrenePager() {
  return (
    <PagerView style={styles.container} initialPage={0}>
      <View key="1">
        <Text style={styles.pageText}>Informations</Text>
        <ScrollView style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <Text style={styles.lorem}>
            Lorem ipsum dolor sit amet consectetur. In laoreet in sed vel nibh
            morbi massa nulla vel. Nisl convallis dignissim auctor neque et amet
            varius auctor tincidunt. Dui pellentesque sit donec suspendisse
            scelerisque lectus justo. Ut feugiat ut a neque interdum.
          </Text>
          <Text
            style={[
              styles.lorem,
              {
                color: "#469597",
                textDecorationLine: "underline",
                marginTop: 10,
              },
            ]}
          >
            Voir plus
          </Text>
          <View>
            <Text style={styles.headertext}>Les prestations</Text>
            <View>
              <Pressable style={styles.button}>
                <Text style={styles.lorem}>Coupe + soin</Text>
                <Ionicons name="chevron-down" size={24} />
              </Pressable>
              <View>
                <Pressable
                  style={[
                    styles.button,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 35,
                    },
                  ]}
                >
                  <View style={{ gap: 10 }}>
                    <Text>Soin nettoyant au charbon végétal</Text>
                    <Text>Convient à tout type de peau</Text>
                    <View style={{ flexDirection: "row", gap: 15 }}>
                      <Image source={require("../assets/Clock.png")} />
                      <Text>30 min</Text>
                      <Text>45€</Text>
                    </View>
                  </View>
                  <View>
                    <Image source={require("../assets/article.png")} />
                  </View>
                </Pressable>
              </View>
              <Pressable style={styles.button}>
                <Text style={styles.lorem}>Coupe + soin</Text>
                <Ionicons name="chevron-down" size={24} />
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.lorem}>Coupe + soin</Text>
                <Ionicons name="chevron-down" size={24} />
              </Pressable>
              <Pressable style={styles.button}>
                <Text style={styles.lorem}>Coupe + soin</Text>
                <Ionicons name="chevron-down" size={24} />
              </Pressable>
            </View>
            <Pressable onPress={() => navigate("Appointment")} style={styles.footer}>
              <Text style={styles.footertext}>Prendre rendez-vous</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <View key="2">
        <Text style={styles.pageText}>Avis</Text>
       <FlatList data={AVIS_DATA} renderItem={({ item }) => {
        return (
            <View>
                <Image source={item.image} />
                <Text>{item.name}</Text>
                <Image source={item.icon} />
                <Text>{item.rate}</Text>
                <Text>{item.caption}</Text>
                <Image source={item.post} />
            </View>
        )
       }} />
      </View>
      <View key="3">
        <Text style={styles.pageText}>Boutique</Text>
      </View>
      <View key="4">
        <Text style={styles.pageText}>Articles</Text>
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    backgroundColor: "red",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // borderBottomWidth: 1,
  },
  pageText: {
    color: "#469597",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "#469597",
    padding: 10,
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
    marginTop: 20
  },
});
