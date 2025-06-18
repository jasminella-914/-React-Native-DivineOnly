import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Shop from "./ screens/tabScreens/Shop";
import IA from "./ screens/tabScreens/IA";
import Profile from "./ screens/tabScreens/Profile";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Services from "./ screens/tabScreens/Services";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={25} color={color} />
          ),
          tabBarActiveBackgroundColor: "#469597",
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#0E1F20",
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={25} color={color} />
          ),
          tabBarActiveBackgroundColor: "#469597",
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#0E1F20",
        }}
      />
      <Tab.Screen
        name="IA"
        component={IA}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="star-outline" size={25} color={color} />
          ),
          tabBarActiveBackgroundColor: "#469597",
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#0E1F20",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={25} color={color} />
          ),
          tabBarActiveBackgroundColor: "#469597",
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#0E1F20",
        }}
      />
    </Tab.Navigator>
  );
}

// export default function App() {
//     return (
//         <NavigationContainer>
//             <TabNav />
//             {/* Add other navigators or screens here if needed */}
//         </NavigationContainer>
//     )
// }
