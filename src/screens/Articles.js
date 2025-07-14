import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { ARTICLE_DATA } from "../data/data";
import { navigate } from "../navigation/navigationService";

const Articles = () => {
  return (
    <FlatList
      numColumns={Math.ceil(ARTICLE_DATA.length / 4)}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
      columnWrapperStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
      data={ARTICLE_DATA}
      renderItem={({ item }) => {
        return (
          <Pressable
            onPress={() => navigate("Article Content")}
            style={{
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
          </Pressable>
        );
      }}
    />
  );
};

export default Articles;

const styles = StyleSheet.create({});
