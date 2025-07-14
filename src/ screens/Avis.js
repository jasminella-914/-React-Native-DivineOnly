import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AVIS_DATA } from "../data/data";
import { navigate } from "../src/navigation/navigationService";

const Avis = () => {
  return (
    <View style={{ marginTop: 10 }}>
      {AVIS_DATA.map((item) => {
        return (
          <View style={{ paddingHorizontal: 20 }} key={item.id}>
            <View style={styles.listContainer}>
              <View style={{ flexDirection: "row", gap: 16 }}>
                <Image source={item.image} />
                <View style={{ gap: 3 }}>
                  <View style={styles.info}>
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
      })}
    </View>
  );
};

export default Avis;

const styles = StyleSheet.create({
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
  info: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
