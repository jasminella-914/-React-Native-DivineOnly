import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
// import Modal from "react-native-modal";
// import React, { useState,  useCallback, useMemo, useRef } from "react";
// import TopNav from "../../TopNav";
// import { useNavigation } from "@react-navigation/native";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function Profile({ navigation }) {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const toggleModal = () => {
  //   setIsModalVisible(!isModalVisible);
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate("Edit Profile")}
          style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
        >
          <Image source={require("../../assets/profile.png")} />
          <Text style={styles.headertext}>Manon</Text>
        </Pressable>
        <Pressable>
          <Ionicons name="settings-outline" size={29} />
        </Pressable>
      </View>

      {/* <View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          style={styles.modal}
        >
          <View style={{ gap: 10 }}>
            <Pressable style={styles.buttonContainer}>
              <Text>Gallery</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
              <Text>Camera</Text>
            </Pressable>
            <Button title="Cancel" onPress={() => setModalVisible(!isModalVisible)}>
                    
                </Button>
          </View>
        </Modal>
      </View> */}
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
});
