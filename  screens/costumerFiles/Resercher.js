import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Pressable,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";
import { navigate } from "../../navigationService";

export default function Resercher({ navigation }) {
  // const [search, setSearch] = useState("");
  // const [filteredDataSource, setFilteredDataSource] = useState([]);
  // const [masterDataSource, setMasterDataSource] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setFilteredDataSource(responseJson);
  //       setMasterDataSource(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // const searchFilterFunction = (text) => {
  //   if (text) {
  //     const newData = masterDataSource.filter(function (item) {
  //       const itemData = item.title
  //         ? item.title.toUpperCase()
  //         : "".toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setFilteredDataSource(newData);
  //     setSearch(text);
  //   } else {
  //     setFilteredDataSource(masterDataSource);
  //     setSearch(text);
  //   }
  // };

  // const ItemView = ({ item }) => {
  //   return (
  //     <Text style={styles.itemStyle} onPress={() => getItem(item)}>
  //       {item.id}
  //       {"."}
  //       {item.title.toUpperCase()}
  //     </Text>
  //   );
  // };

  // const ItemSeparatorView = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 0.5,
  //         width: "100%",
  //         backgroundColor: "#C8C8C8",
  //       }}
  //     />
  //   );
  // };

  // const getItem = (item) => {
  //   alert("Id : " + item.id + " Title : " + item.title);
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={24} />
        </Pressable>
        <Text style={styles.headertext}>Resercher</Text>
      </View>
      <View style={styles.secondcontainer}>
        <TextInput placeholder="Où ?" style={styles.input} />
        <Pressable
        onPress={() => navigate("Booking")}
        style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
      >
        <Ionicons name="location-outline" size={24} color={"#469597"} />
        <Text style={styles.locText}>Autour de moi</Text>
      </Pressable> 
      </View>
      
      {/* <View style={styles.secondcontainer}>
        <View style={{ gap: 10 }}>
          <Ioniconse         
            name="search-outline"
            size={22}
            color={"#BBC6C8"}
            style={{ padding: 10 }}
          />
          <TextInput placeholder="Où ? " style={styles.input} />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Où ? "
          />

          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "# ",
    paddingTop: StatusBar.currentHeight,
  },
  headertext: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F20",
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  header: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  secondcontainer: {
    backgroundColor: "#4695971A",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#BBC6C8",
    backgroundColor: "#FFFFFF",
    paddingVertical: 21,
    borderRadius: 14,
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  locText: {
    color: "#469597",
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,

    paddingVertical: 21,
    paddingLeft: 20,
    margin: 5,

    backgroundColor: "#FFFFFF",
    borderRadius: 14,
  },
});
