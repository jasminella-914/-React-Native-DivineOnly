import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  PanResponder,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Pager from "../Pager";
import PagerView from "react-native-pager-view";
import { SheetManager } from "react-native-actions-sheet";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate("Edit Profile")}
          style={styles.profile}
        >
          <Image
            source={require("../../assets/profile.png")}
            style={styles.image}
          />
          <Text style={styles.headertext}>Manon</Text>
        </Pressable>
        <Pressable onPress={() => SheetManager.show("Settings")}>
          <Ionicons name="settings-outline" size={29} />
        </Pressable>
      </View>
      <PagerView style={styles.pagerView} initialPage={0}>
        <Pager />
      </PagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  headertext: {
    fontSize: 16,
    color: "#2E2A2B",
    fontWeight: "600",
  },
  modal: {
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    flex: 0.5,
    marginTop: "auto",
    padding: 20,
    borderRadius: 20,
  },
  pagerView: {
    flex: 1,
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
  profile: { flexDirection: "row", alignItems: "center", gap: 20 },
  image: { height: 58, width: 58 },
});
