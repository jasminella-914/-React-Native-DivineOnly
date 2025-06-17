import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./ screens/tabScreens/Search";
import Shop from "./ screens/tabScreens/Shop";
import IA from "./ screens/tabScreens/IA";
import Profile from "./ screens/tabScreens/Profile";


const Tab = createBottomTabNavigator();

export default function TabNav () {
    return (
       
        <Tab.Navigator>
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Shop" component={Shop} />
            <Tab.Screen name="IA" component={IA} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
       
    )   
}


// export default function App() {
//     return (
//         <NavigationContainer>
//             <TabNav />
//             {/* Add other navigators or screens here if needed */}
//         </NavigationContainer>
//     )
// }