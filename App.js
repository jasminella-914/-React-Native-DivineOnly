import { NavigationContainer } from "@react-navigation/native";

import { SheetProvider } from "react-native-actions-sheet";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./utils/Sheet";

import { navigationRef } from "./src/navigation/navigationService";

import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SheetProvider>
        <NavigationContainer ref={navigationRef}>
          <StackNavigator  />
        </NavigationContainer>
      </SheetProvider>
    </GestureHandlerRootView>
  );
}
