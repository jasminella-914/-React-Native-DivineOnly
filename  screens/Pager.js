import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { FlatList } from "react-native-actions-sheet";
import { SheetManager } from "react-native-actions-sheet";

import PagerView from "react-native-pager-view";
import { APPOINTMENT_LIST, SALONS_DATA } from "../data/data";

export default function Pager() {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Text style={styles.pageText}>Rendez-vous</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headertext}>Rendez-vous à venir</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={APPOINTMENT_LIST}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => SheetManager.show("Reschedule")}
                  style={styles.list}
                >
                  <Image source={item.image} />
                  <View style={{ justifyContent: "center", gap: 10 }}>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.info}>{item.info}</Text>
                    <Text style={[styles.info, { color: "#CE2A2A"}]}>{item.info1}</Text>
                  </View>
                </Pressable>
              );
            }}
          />
        </ScrollView>
      </View>

      <View key="2">
        <Text style={styles.pageText}>Favoris</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headertext}>Salons favoris</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={SALONS_DATA}
            renderItem={({ item }) => {
              return (
                <View style={{ marginTop: 20 }}>
                  <Image source={item.image} />
                  <View style={styles.flatlist}>
                    <Text style={styles.date}>{item.title}</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                      <Image source={item.icon} width={15} height={18} />
                      <Text style={styles.location}>{item.location}</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                      <Image source={item.secondIcon} />
                      <Text>{item.rate}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
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
  location: {
    textDecorationLine: "underline",
    fontSize: 14,
    fontWeight: "400",
  },
  flatlist: {
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#00000008",
    paddingHorizontal: 8,
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
