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
import { ARTICLE_DATA, AVIS_DATA, SHOP_DATA } from "../data/data";
import MapView from "react-native-maps";

export default function PyrenePager({ navigation }) {
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

          {/* <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          /> */}
          <View></View>
          <View>
            <Text style={styles.headertext}>Les prestations</Text>
            <View>
              <Pressable style={styles.button}>
                <Text style={styles.lorem}>Coupe + soin</Text>
                <Ionicons name="chevron-down" size={24} />
              </Pressable>
              <View>
                <Pressable
                onPress={() => navigate("Article")}
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
            <Pressable
              onPress={() => navigate("Appointment")}
              style={[styles.footer, { marginTop: 20 }]}
            >
              <Text style={styles.footertext}>Prendre rendez-vous</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <View key="2">
        <Text style={styles.pageText}>Avis</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={AVIS_DATA}
          renderItem={({ item }) => {
            return (
              <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <View style={styles.listContainer}>
                  <View style={{ flexDirection: "row", gap: 16 }}>
                    <Image source={item.image} />
                    <View style={{ gap: 3 }}>
                      <View style={{ flexDirection: "row", gap: 10 }}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Image source={item.icon} />
                        <Text style={[styles.name, { fontSize: 12 }]}>
                          {item.rate}
                        </Text>
                      </View>
                      <Text style={styles.caption}>{item.caption}</Text>
                      <Text style={styles.caption}>{item.caption1}</Text>
                    </View>
                  </View>

                  <View>
                    <Image source={item.post} />
                  </View>
                </View>
              </View>
            );
          }}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 30 }}></View>;
          }}
        />
        <Pressable
          onPress={() => navigate("Appointment")}
          style={[styles.footer, { marginBottom: 10, marginHorizontal: 20 }]}
        >
          <Text style={styles.footertext}>Prendre rendez-vous</Text>
        </Pressable>
      </View>
      <View key="3">
        <Text style={styles.pageText}>Boutique</Text>
        <Text style={[styles.caption, { marginLeft: 20 }]}>7 produits </Text>
        <FlatList
          data={SHOP_DATA}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => navigation.navigate("Afro")}
                style={styles.dataContainer}
              >
                <View style={styles.productContainer}>
                  <Image
                    source={item.image}
                    style={{
                      width: 172,
                      height: 164,
                    }}
                  />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.info}>{item.info}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.info}>{item.price}</Text>
                    <Image source={item.icon} />
                  </View>
                </View>
                <View style={styles.productContainer}>
                  <Image
                    source={item.image}
                    style={{
                      width: 172,
                      height: 164,
                    }}
                  />
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.info}>{item.info}</Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.info}>{item.price}</Text>
                    <Image source={item.icon} />
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
        <Pressable
          onPress={() => navigate("Appointment")}
          style={[styles.footer, { marginBottom: 10, marginHorizontal: 20 }]}
        >
          <Text style={styles.footertext}>Prendre rendez-vous</Text>
        </Pressable>
      </View>

      <View key="4">
        <Text style={styles.pageText}>Articles</Text>
        <FlatList
          data={ARTICLE_DATA}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 20,
                  gap: 12,

                  marginTop: 20,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <View style={{ gap: 8 }}>
                    <Image source={item.image} />
                    <View>
                      <Text>{item.caption}</Text>
                      <Text>{item.caption1}</Text>
                    </View>
                  </View>
                </View>
                <View style={{ alignItems: "center" }}>
                  <View style={{ gap: 8 }}>
                    <Image source={item.image} />
                    <View>
                      <Text>{item.caption}</Text>
                      <Text>{item.caption1}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
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
    lineHeight: 18,
    fontWeight: "500",
    textAlign: "center",
    borderBottomWidth: 2,
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
  dataContainer: {
    flexDirection: "row",
    paddingHorizontal: 13,
    gap: 10,

    marginTop: 20,
  },
  productContainer: {
    gap: 5,
  },
});
