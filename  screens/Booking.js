import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { SERVICE_DATA } from "../data/data";
import { SheetManager } from "react-native-actions-sheet";

export default function Booking() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secondContainer}>
        <Image source={require("../assets/logoName.png")} style={styles.logo} />

        <TextInput placeholder="Où ? " style={styles.input} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.headerText}>Réserve ta prestation</Text>
          <Pressable
            onPress={() => SheetManager.show("Sort")}
            style={styles.button}
          >
            <Image
              source={require("../assets/filter.png")}
              width={19}
              height={19}
            />
            <Text style={styles.filter}>Filtrer</Text>
          </Pressable>
        </View>
        <FlatList
          data={SERVICE_DATA}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 20 }}></View>;
          }}
          renderItem={({ item }) => {
            return (
              <View style={{ marginTop: 20 }}>
                <Image source={item.image} />
                <View
                  style={{
                    justifyContent: "center",
                    gap: 10,
                    backgroundColor: "#00000008",
                    paddingHorizontal: 8,
                    paddingVertical: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                >
                  <Text style={styles.date}>{item.title}</Text>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <Image source={item.icon} width={15} height={18} />
                    <Text style={styles.location}>{item.loc}</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 5 }}>
                    <Image source={item.secondIcon} />
                    <Text>{item.rate}</Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <Text style={styles.Text}>{item.month}</Text>
                    <Text style={styles.Text}>{item.type}</Text>
                    <Text style={styles.Text}>{item.day}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    backgroundColor: "#FFFFFF",
    paddingVertical: 21,
    borderRadius: 14,
    fontSize: 14,
    fontWeight: "500",
  },
  secondContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
  },
  filter: {
    color: "#469597",
    fontSize: 14,
    fontWeight: "400",
  },
  button: {
    flexDirection: "row",
    gap: 5,
    borderWidth: 1,
    borderColor: "#469597",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  Text: {
    backgroundColor: "#4695971A",
    paddingVertical: 9,
    paddingHorizontal: 8,
    borderRadius: 18,
    fontSize: 12,
    fontWeight: "500",
    color: "#449598",
  },
});
