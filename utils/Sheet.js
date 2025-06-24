import { registerSheet } from "react-native-actions-sheet";
import SettingsModal from "../components/modal/SettingsModal";
import FilterModal from "../components/modal/FilterModal";
import ReschedModal from "../components/modal/ReschedModal";
import SizeModal from "../components/modal/SizeModal";

registerSheet("Settings", SettingsModal);
registerSheet("Filter", FilterModal);
registerSheet("Reschedule", ReschedModal);
registerSheet("Size", SizeModal);


export {};
