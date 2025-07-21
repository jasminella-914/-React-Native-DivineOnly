import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigate } from "../navigation/navigationService";
import { ARTICLEPOST_DATA } from "../data/data";
import { Colors } from "../styles/Colors";
import { FONTS } from "../styles/Fonts";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Article({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} style={styles.icon} />
          </Pressable>
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <Text style={styles.text}>Lola Brazilia</Text>
            <Text style={styles.headerText}>
              Soin nettoyant au charbon végétal
            </Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <FlatList
            numColumns={Math.ceil(ARTICLEPOST_DATA.length / 3)}
            scrollEnabled={false}
            columnWrapperStyle={{ gap: 3 }}
            contentContainerStyle={{
              gap: 3,
            }}
            data={ARTICLEPOST_DATA}
            renderItem={({ item }) => {
              return (
                <View style={styles.flatList}>
                  <Image source={item.image} style={styles.image} />
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
      <View style={{ flex: 1 }} />
      <Pressable onPress={() => navigate("Appointment")} style={styles.footer}>
        <Text style={styles.footertext}>Réserver cette prestation</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingVertical: 10,
  },
  headerText: {
    ...FONTS.textRegBold,
    textAlign: "center",
  },
  text: {
    ...FONTS.textSmallLight,
    textAlign: "center",
    textTransform: "uppercase",
  },
  footertext: {
    ...FONTS.h2,
    color: Colors.white,
    textAlign: "center",
  },
  footer: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    height: 137,
    width: 137,
  },
  flatList: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 2,
  },
  icon: {
    marginLeft: 12,
    position: "absolute",
    top: 3,
  },
});
