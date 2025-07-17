import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import PyrenePager from "../PyrenePager";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

export default function Pyrene() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: "100%", height: 468 }}
          source={require("../../assets/img/bgPhoto.png")}
        />

        <View style={styles.secondContainer}>
          <Text style={styles.headerText}>Institut Pyrène</Text>
          <View style={styles.info}>
            <Image source={require("../../assets/icon//location.png")} />
            <Text style={styles.Text}>500 Rte de Berre, 33300 Bordeaux</Text>
          </View>
          <View style={styles.rate}>
            <Image source={require("../../assets/icon/star.png")} />
            <Text style={[styles.Text, { textDecorationLine: "none" }]}>
              4,9 17 avis
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.pagerView} initialPage={0}>
        <PyrenePager />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.white, flex: 1 },
  image: {
    width: 393,
    height: 360,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  secondContainer: {
    backgroundColor: Colors.white,
    position: "absolute",
    alignSelf: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 13,
    top: 200,
    zIndex: 1,
    gap: 6,
  },
  headerText: {
    ...FONTS.h2,
    color: Colors.default,
  },
  Text: {
    ...FONTS.textSmallLight,
    textDecorationLine: "underline",
    color: Colors.default,
  },
  pagerView: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,

    top: 300,
    // backgroundColor: "red",
  },
  info: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingRight: 100,
  },
  rate: { flexDirection: "row", gap: 5, alignItems: "center" },
});
