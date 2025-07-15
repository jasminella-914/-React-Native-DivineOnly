import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigate } from "../navigation/navigationService";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";

const Information = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <Text style={styles.lorem}>
        Lorem ipsum dolor sit amet consectetur. In laoreet in sed vel nibh morbi
        massa nulla vel. Nisl convallis dignissim auctor neque et amet varius
        auctor tincidunt. Dui pellentesque sit donec suspendisse scelerisque
        lectus justo. Ut feugiat ut a neque interdum.
      </Text>
      <Text
        style={[
          styles.lorem,
          {
            color: Colors.primary,
            textDecorationLine: "underline",
            marginTop: 10,
          },
        ]}
      >
        Voir plus
      </Text>

      <View style={styles.map}>
        <MapView
          style={styles.mapContainer}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          />
        </MapView>
      </View>

      <View style={{ marginTop: 20 }}>
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
                  gap: 15,
                },
              ]}
            >
              <View style={{ gap: 10 }}>
                <View>
                  <Text style={styles.info}>
                    Soin nettoyant au charbon végétal
                  </Text>
                  <Text style={styles.caption}>
                    Convient à tout type de peau
                  </Text>
                </View>
                <View style={styles.time}>
                  <Image source={require("../assets/icon/Clock.png")} />
                  <Text style={styles.info}>30 min</Text>
                  <Text style={[styles.info, { color: Colors.primary }]}>
                    45€
                  </Text>
                </View>
              </View>
              <View>
                <Image source={require("../assets/img/article.png")} />
              </View>
            </Pressable>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.coupeText}>Coupe + soin</Text>
            <Ionicons name="chevron-down" size={24} />
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.coupeText}>Coupe + soin</Text>
            <Ionicons name="chevron-down" size={24} />
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.coupeText}>Coupe + soin</Text>
            <Ionicons name="chevron-down" size={24} />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Information;

const styles = StyleSheet.create({
  lorem: {
    ...FONTS.textRegular,
    color: Colors.default,
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
    borderColor: Colors.border,
  },
  button: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: Colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headertext: {
    ...FONTS.h2,
  },
  scrollView: { paddingHorizontal: 20, paddingTop: 30 },
  time: { flexDirection: "row", gap: 15 },
  info: {
    ...FONTS.textRegBold,
    color: Colors.default,
  },
  caption: {
    ...FONTS.textSmallLight,
    color: Colors.lightBlack,
  },
  coupeText: {
    ...FONTS.urbanistSemiBold,
    color: Colors.default,
  },
});
