import {
    FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { AVIS_DATA, INFO_DATA } from "../../data/data";

// import MapView from "react-native-maps";

export default function Pyrene({ navigation }) {
  const [selectedIndex, setIsSelectedIndex] = useState();
  const data = selectedIndex === 0 ? INFO_DATA : AVIS_DATA;

  return (
    <SafeAreaView style={ {backgroundColor: "#FFFFFF"}} >
      <View>
        <Image
          source={require("../../assets/bgPhoto.png")}
          style={styles.image}
        ></Image>
        <View style={styles.container}>
          <Text style={styles.headerText}>Institut Pyrène</Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Image source={require("../../assets/location.png")} />
            <Text style={styles.Text}>500 Rte de Berre, 33300 Bordeaux</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Image source={require("../../assets/star.png")} />
            <Text style={[styles.Text, { textDecorationLine: "none" }]}>
              4,9 17 avis
            </Text>
          </View>
        </View>
      </View>
      {/* <View>
        <SegmentedControlTab
          values={["Informations", "Avis", "Boutique", "Articles"]}
          tabsContainerStyle={{
            backgroundColor: "red"
          }}
        />
      </View> */}
      <View
        style={{
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
          position: "absolute",
          zIndex: 1,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {["Informations", "Avis", "Boutique", "Articles"].map(
            (item, index) => (
              <Pressable
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingVertical: 12,
                  borderBottomWidth: selectedIndex === index ? 2 : 1,
                  borderColor: selectedIndex === index ? "#469597" : "#BBC6C8",
                }}
                onPress={() => setIsSelectedIndex(index)}
                key={index}
              >
                <Text
                  style={{
                    color: selectedIndex === index ? "#469597" : "#BBC6C8",
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  {item}
                </Text>
              </Pressable>
            )
          )}
        </View>
        <ScrollView>
            <View>
                <Text></Text>
                <Pressable onPress={() => navigation.navigate("Appointment")} style={styles.button}>
                    <Text style={styles.buttonText}>Prendre rendez-vous</Text>
                </Pressable>
            </View>
        </ScrollView>
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 393,
    height: 360,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  container: {
    gap: 5,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    bottom: 50,
    left: 45,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 13,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  Text: {
    fontSize: 12,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#469597",
    paddingVertical: 15,
    paddingHorizontal: 91,
    borderRadius: 10
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
  }
});
