import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import Je_suis from "./ screens/Je_suis";
import Je_travaille from "./ screens/Je_travaille";
import CreateAccount from "./ screens/CreateAccount";
import CreateAccount2 from "./ screens/CreateAccount2";
import ContactDetails from "./ screens/costumerFiles/ContactDetails";
import Ionicons from "@expo/vector-icons/Ionicons";
import Profile from "./ screens/costumerFiles/Profile";
import Connexion from "./ screens/Connexion";
import ForgotPassword from "./ screens/password/ForgotPassword";

const logoImg = require("./assets/Logo.png");

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Je suis" component={Je_suis} />
        <Stack.Screen name="Je travaille" component={Je_travaille} />
        <Stack.Screen
          name="Créer mon compte"
          component={CreateAccount}
          options={{
            headerTitle: "",
            // headerTitle: () => (
            //   <Image source={logoImg}  />
            // )
          }}
        />
        <Stack.Screen name="Créer moncompte" component={CreateAccount2} />
        <Stack.Screen
          name="Mes coordonnées"
          component={ContactDetails}
          options={{
            headerShown: false,
            headerRight: () => (
              <Ionicons name="close" size={24} color="#0E1F20"   />
            )
           }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            headerRight: () => (
              <Ionicons name="close" size={24} color="#0E1F20"   />
            )
           }}
        />
        <Stack.Screen
          name="Connexion"
          component={Connexion}
          options={{
            headerShown: false,
            headerRight: () => (
              <Ionicons name="close" size={24} color="#0E1F20"   />
            )
           }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
          options={{
            headerShown: false,
            headerRight: () => (
              <Ionicons name="close" size={24} color="#0E1F20"   />
            )
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
