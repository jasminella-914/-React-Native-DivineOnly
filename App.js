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
import LinkSent from "./ screens/password/LinkSent";
import { SheetProvider } from "react-native-actions-sheet";
import Welcome from "./ screens/Welcome";
import TabNav from "./TabNav";
import EditProfile from "./ screens/tabScreens/profile/EditProfile";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import "./utils/Sheet"
import Notifications from "./ screens/tabScreens/profile/Notifications";
import MyBasket from "./ screens/costumerFiles/MyBasket";
// const logoImg = require("./assets/Logo.png");

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SheetProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Je suis"
            component={Je_suis}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Je travaille"
            component={Je_travaille}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Créer mon compte"
            component={CreateAccount}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Créer moncompte"
            component={CreateAccount2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Mes coordonnées"
            component={ContactDetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Connexion"
            component={Connexion}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Link Sent"
            component={LinkSent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TabNav"
            component={TabNav}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Edit Profile"
            component={EditProfile}
            options={{
              headerShown: false,
            }}
          />
           <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              headerShown: false,
            }}
          />
           <Stack.Screen
            name="My Basket"
            component={MyBasket}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SheetProvider>
    </GestureHandlerRootView>
  );
}
