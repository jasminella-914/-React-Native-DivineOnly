import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/tabScreens/Profile";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Services from "../screens/tabScreens/Services";
import Shop from "../screens/tabScreens/Shop";
import IA from "../screens/tabScreens/IA";

const Tab = createBottomTabNavigator();

const TabOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarActiveBackgroundColor: "#469597",
  tabBarActiveTintColor: "#FFFFFF",
  tabBarInactiveTintColor: "#0E1F20",
};



export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          ...TabOptions,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          ...TabOptions,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/icon/shop.png")}
              size={25}
              color={color}
            />
          ),
         
        }}
      />
      <Tab.Screen
        name="IA"
        component={IA}
        options={{
          ...TabOptions,
          tabBarIcon: ({ color }) => (
            <Ionicons name="star-outline" size={25} color={color} />
          ),
         
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          ...TabOptions,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={25} color={color} />
          ),
     
        }}
      />
    </Tab.Navigator>
  );
}
