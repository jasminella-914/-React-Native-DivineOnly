import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import TabNav from "../TabNav";

const bgImg = require("../assets//Bg.png");
const twoperson = require("../assets/twoperson.png");
export default function Welcome() {
  return (
    <View style={styles.container}>
      <TabNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  }
});
