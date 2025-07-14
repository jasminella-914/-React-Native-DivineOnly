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

const ArticleContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={() => navigation.goBack()}>
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
    </View>
  );
};

export default ArticleContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 63,
  },
  image: {
    marginTop: 15,
  },
  pager: {
    position: "absolute",
    bottom: 0,
    top: 300,
    left: 0,
    right: 0
  },
});
