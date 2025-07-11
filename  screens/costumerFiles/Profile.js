import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import * as Progress from "react-native-progress";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Modal from "react-native-modal";
import { useState } from "react";

export default function Profile({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.secondContainer, { flexDirection: "row" }]}>
        <Ionicons
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Progress.Bar
          progress={0.3}
          width={250}
          color="#469597"
          borderWidth={0}
          unfilledColor="#E5E3E4"
          height={7}
          style={styles.Bar}
        />
        <Ionicons name="close" size={24} onPress={() => navigation.goBack()} />
      </View>
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
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                gap: 10,
              }}
            >
              <Ionicons name="image-outline" size={40} color="#BBC6C8" />
              <Text style={[styles.ajouterText, { fontSize: 12 }]}>
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
      <View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.modal}
        >
          <View style={{ gap: 10 }}>
            <Pressable style={styles.buttonContainer}>
              <Text>Gallery</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text>Camera</Text>
            </Pressable>
            <Button
              title="Cancel"
              onPress={() => setModalVisible(!isModalVisible)}
            ></Button>
          </View>
        </Modal>
      </View>
      <Pressable style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Suivant</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    borderColor: "#BBC6C8",
    borderRadius: 20,
    width: 120,
    height: 120,
  },
  Bar: {
    marginVertical: 10,
    justifyContent: "center",
  },
  headertext: {
    color: "#0E1F20",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  text: {
    color: "#0E1F20",
    fontSize: 12,
    fontWeight: "400",
  },
  inputContainer: {
    padding: 15,
    borderColor: "#BBC6C8",
    borderWidth: 1,
    borderRadius: 15,
  },
  footerButton: {
    backgroundColor: "#469597",
    padding: 18,
    borderRadius: 10,
    marginTop: "auto",
    marginHorizontal: 20,
  },
  footerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  ajouterText: {
    color: "#BBC6C8",
    fontSize: 14,
    fontWeight: "500",
  },
  modal: {
    // backgroundColor: "#FFFFFF",
    // flex: 0.3,
    // borderRadius: 20,
    // padding: 20,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    flex: 0.25,
    marginTop: "auto",
    padding: 20,
    borderRadius: 20,
  },
  buttonContainer: {
    paddingVertical: 20,
    borderColor: "#BBC6C8",
  },
});
