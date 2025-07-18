import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  Image,
  Button,
  ScrollView,
  Platform,
} from "react-native";
import * as Progress from "react-native-progress";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Modal from "react-native-modal";
import { useState } from "react";
import { Colors } from "../../styles/Colors";
import { FONTS } from "../../styles/Fonts";

export default function Profile({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.secondContainer,
          { flexDirection: "row", paddingVertical: 5 },
        ]}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Progress.Bar
          progress={0.3}
          width={250}
          color={Colors.primary}
          borderWidth={0}
          unfilledColor={Colors.grey}
          height={7}
          style={styles.Bar}
        />
        <Ionicons name="close" size={24} onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.secondContainer, { gap: 30, marginTop: 20 }]}>
          <View>
            <Text style={styles.headertext}>Photo de profil</Text>
            <Text style={styles.text}>
              Nous vous recommandons d’utiliser une photo type d’identité pour
              pouvoir profiter de l’outil IA. Vous pourrez toujours la modifier
              plus tard.
            </Text>
          </View>
          <View style={styles.thirdContainer}>
            <Pressable onPress={toggleModal} style={styles.pressContainer}>
              <View style={styles.editPhoto}>
                <Ionicons
                  name="image-outline"
                  size={40}
                  color={Colors.border}
                />
                <Text
                  style={[
                    styles.ajouterText,
                    { fontSize: 12, textAlign: "center" },
                  ]}
                >
                  ajouter une photop
                </Text>
              </View>
            </Pressable>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.ajouterText}>Ajouter une photo</Text>
            </View>
            {/* <Pressable onPress={toggleModal}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                source={require("../../assets/profile.png")}
                style={{ width: 117, height: 117 }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.ajouterText}>Modifier la photo</Text>
            </View>
          </Pressable> */}
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <Pressable style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Suivant</Text>
        </Pressable>
      </ScrollView>
      <View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.modal}
        >
          <View style={{ gap: 10 }}>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.modalText}>Gallery</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.modalText}>Camera</Text>
            </Pressable>
            <Button
              title="Cancel"
              onPress={() => setModalVisible(!isModalVisible)}
            ></Button>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  secondContainer: {
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  thirdContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  pressContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    width: 120,
    height: 120,
  },
  Bar: {
    marginVertical: 10,
    justifyContent: "center",
  },
  headertext: {
    color: Colors.default,
    ...FONTS.h2,
    marginBottom: 10,
  },
  text: {
    color: Colors.default,
    ...FONTS.textSmallLight,
  },
  inputContainer: {
    padding: 15,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 15,
  },
  footerButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  footerButtonText: {
    color: Colors.white,

    textAlign: "center",
    ...FONTS.h2,
  },
  ajouterText: {
    color: Colors.border,
    ...FONTS.textRegular,
  },
  modal: {
    justifyContent: "flex-start",
    backgroundColor: Colors.white,
    flex: 0.25,
    marginTop: "auto",
    padding: 20,
    borderRadius: 20,
  },
  buttonContainer: {
    paddingVertical: 20,
    borderColor: Colors.border,
  },
  editPhoto: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  modalText: {
    ...FONTS.textRegular,
    color: Colors.black,
  },
  scrollView: { flexGrow: 1,
    paddingBottom: 20
   }
});
