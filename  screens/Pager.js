import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-actions-sheet";

import PagerView from "react-native-pager-view";
import { APPOINTMENT_LIST } from "../data/data";

export default function Pager() {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Text style={styles.pageText}>Rendez-vous</Text>
        <FlatList
          data={APPOINTMENT_LIST}
          renderItem={({ item }) => {
            return (
              <View  style={styles.list}>
                <Image source={item.image} />
                <View style={{ justifyContent: "center", gap: 10 }}>
                  <Text style={styles.date}>{item.date}</Text>
                  <Text style={styles.info}>{item.info}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View key="2">
        <Text style={styles.pageText}>Favoris</Text>
        <View>
          <Text style={styles.headertext}>Salons favoris</Text>
        </View>
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    marginHorizontal: 20,
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
  headertext: {
    color: "#469597",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
  },
  list: {
    flexDirection: "row",
    backgroundColor: " rgba(0, 0, 0, 0.03)",
    justifyContent: "space-around",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  date: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "600",
  },
  info: {
    fontSize: 12,
    fontWeight: "400",
    color: "#000000",
  },
});
