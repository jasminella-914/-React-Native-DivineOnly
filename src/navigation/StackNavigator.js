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
const screens = [
  { name: "JeSuis", component: Je_suis, id: 0 },
  {
    name: "JeTravaille",
    component: Je_travaille,
    id: 1,
  },
  {
    name: "CréerMonCompte",
    component: CreateAccount,
    id: 2,
  },
  {
    name: "CreateAccount",
    component: CreateAccount2,
    id: 3,
  },
  {
    name: "MesCoordonnées",
    component: ContactDetails,
    id: 4,
  },
  {
    name: "Profile",
    component: Profile,
    id: 5,
  },
  {
    name: "Connexion",
    component: Connexion,
    id: 6,
  },
  {
    name: "ForgotPassword",
    component: ForgotPassword,
    id: 7,
  },
  {
    name: "LinkSent",
    component: LinkSent,
    id: 8,
  },
  {
    name: "Welcome",
    component: Welcome,
    id: 9,
  },
  {
    name: "EditProfile",
    component: EditProfile,
    id: 10,
  },
  {
    name: "TabNav",
    component: TabNav,
    id: 11,
  },
  {
    name: "Notifications",
    component: Notifications,
    id: 12,
  },
  {
    name: "MyBasket",
    component: MyBasket,
    id: 13,
  },
  {
    name: "Afro",
    component: Afro,
    id: 14,
  },
  {
    name: "Delivery",
    component: Delivery,
    id: 15,
  },
  {
    name: "Payment2",
    component: Payment2,
    id: 16,
  },
  {
    name: "Payment",
    component: Payment,
    id: 17,
  },
  {
    name: "Confirmation",
    component: Confirmation,
    id: 18,
  },
  {
    name: "Reschedule",
    component: Reschedule,
    id: 19,
  },
  {
    name: "NotificationSetting",
    component: NotificationSetting,
    id: 20,
  },
  {
    name: "Resercher",
    component: Resercher,
    id: 21,
  },
  {
    name: "Booking",
    component: Booking,
    id: 22,
  },
  {
    name: "Pyrene",
    component: Pyrene,
    id: 23,
  },
  {
    name: "Appointment",
    component: Appointment,
    id: 24,
  },
  {
    name: "YourAppointment",
    component: Votre,
    id: 25,
  },
  {
    name: "AppointmentConfirmation",
    component: AppointmentConfirm,
    id: 26,
  },
  {
    name: "Article",
    component: Article,
    id: 27,
  },
  {
    name: "ArticleContent",
    component: ArticleContent,
    id: 28,
  },
];
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      {screens.map((screen, id) => {
        return (
          <Stack.Screen
            name={screen.name}
            component={screen.component}
            options={StackOptions}
            key={screen.id}
          />
        );
      })}
    </Stack.Navigator>
  );
}
