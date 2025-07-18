import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ArticlePager from "./ArticlePager";
import { Colors } from "../styles/Colors";

const ArticleContent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          style={{ paddingVertical: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} style={{ paddingLeft: 20 }} />
        </Pressable>
        <Image
          source={require("../assets/img/articlecontent.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.pager}>
        <ArticlePager />
      </View>
    </SafeAreaView>
  );
};

export default ArticleContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: "100%",
    height: 284,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  pager: {
    position: "absolute",
    bottom: 0,
    top: 300,
    left: 0,
    right: 0,
  },
});
