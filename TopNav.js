import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Rendezvous from "./ screens/tabScreens/profile/Rendezvous";
import Favoris from "./ screens/tabScreens/profile/Favoris";


const TopTab = createMaterialTopTabNavigator();

export default function TopNav() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Rendez-vous" component={Rendezvous} />
            <TopTab.Screen name="Favoris" component={Favoris} />
        </TopTab.Navigator>
    )
}