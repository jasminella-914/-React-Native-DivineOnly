import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Je_suis from "../screens/Je_suis";
import Je_travaille from "../screens/Je_travaille";
import CreateAccount from "../screens/CreateAccount";
import CreateAccount2 from "../screens/CreateAccount2";
import ContactDetails from "../screens/costumerFiles/ContactDetails";
import Profile from "../screens/costumerFiles/Profile";
import Connexion from "../screens/Connexion";
import ForgotPassword from "../screens/password/ForgotPassword";
import LinkSent from "../screens/password/LinkSent";
import Welcome from "../screens/Welcome";
import TabNav from "../navigation/TabNav";
import EditProfile from "../screens/tabScreens/profile/EditProfile";
import Notifications from "../screens/tabScreens/profile/Notifications";
import MyBasket from "../screens/costumerFiles/MyBasket";
import Afro from "../screens/costumerFiles/Afro";
import Delivery from "../screens/costumerFiles/Delivery";
import Payment from "../screens/costumerFiles/Payment";
import Confirmation from "../screens/costumerFiles/Confirmation";
import Reschedule from "../screens/costumerFiles/Reschedule";
import NotificationSetting from "../screens/NotificationSetting";
import Resercher from "../screens/costumerFiles/Resercher";
import Booking from "../screens/Booking";
import Pyrene from "../screens/costumerFiles/Pyrene";
import Appointment from "../screens/costumerFiles/Appointment";
import Votre from "../screens/costumerFiles/Votre";
import Payment2 from "../screens/costumerFiles/Payment2";
import AppointmentConfirm from "../screens/costumerFiles/AppointmentConfirm";
import Article from "../screens/Article";
import ArticleContent from "../screens/ArticleContent";
const Stack = createNativeStackNavigator();

const StackOptions = { headerShown: false };

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Je suis" component={Je_suis} options={StackOptions} />
      <Stack.Screen name="Je travaille" component={Je_travaille} options={{}} />
      <Stack.Screen
        name="Créer mon compte"
        component={CreateAccount}
        options={StackOptions}
      />
      <Stack.Screen
        name="Créer moncompte"
        component={CreateAccount2}
        options={StackOptions}
      />
      <Stack.Screen
        name="Mes coordonnées"
        component={ContactDetails}
        options={StackOptions}
      />
      <Stack.Screen name="Profile" component={Profile} options={StackOptions} />
      <Stack.Screen
        name="Connexion"
        component={Connexion}
        options={StackOptions}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={StackOptions}
      />
      <Stack.Screen
        name="Link Sent"
        component={LinkSent}
        options={StackOptions}
      />
      <Stack.Screen name="Welcome" component={Welcome} options={StackOptions} />
      <Stack.Screen name="TabNav" component={TabNav} options={StackOptions} />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={StackOptions}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={StackOptions}
      />
      <Stack.Screen
        name="My Basket"
        component={MyBasket}
        options={StackOptions}
      />
      <Stack.Screen name="Afro" component={Afro} options={StackOptions} />
      <Stack.Screen
        name="Delivery"
        component={Delivery}
        options={StackOptions}
      />
      <Stack.Screen name="Payment" component={Payment} options={StackOptions} />
      <Stack.Screen
        name="Payment2"
        component={Payment2}
        options={StackOptions}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={StackOptions}
      />
      <Stack.Screen
        name="Reschedule"
        component={Reschedule}
        options={StackOptions}
      />
      <Stack.Screen
        name="Notification Setting"
        component={NotificationSetting}
        options={StackOptions}
      />
      <Stack.Screen
        name="Resercher"
        component={Resercher}
        options={StackOptions}
      />
      <Stack.Screen name="Booking" component={Booking} options={StackOptions} />
      <Stack.Screen name="Pyrene" component={Pyrene} options={StackOptions} />
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={StackOptions}
      />
      <Stack.Screen
        name="Your Appointment"
        component={Votre}
        options={StackOptions}
      />
      <Stack.Screen
        name="Appointment Confirmation"
        component={AppointmentConfirm}
        options={StackOptions}
      />
      <Stack.Screen name="Article" component={Article} options={StackOptions} />
      <Stack.Screen
        name="Article Content"
        component={ArticleContent}
        options={StackOptions}
      />
    </Stack.Navigator>
  );
}
