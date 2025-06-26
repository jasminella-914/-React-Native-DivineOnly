import { registerSheet } from "react-native-actions-sheet";
import SettingsModal from "../components/modal/SettingsModal";
import FilterModal from "../components/modal/FilterModal";
import ReschedModal from "../components/modal/ReschedModal";
import SizeModal from "../components/modal/SizeModal";
import SortModal from "../components/modal/SortModal";
import LieuModal from "../components/modal/LieuModal";
import NoteModal from "../components/modal/NoteModal";
import DistanceModal from "../components/modal/DistanceModal";
import AvailabilityModal from "../components/modal/AvailabilityModal";



registerSheet("Settings", SettingsModal);
registerSheet("Filter", FilterModal);
registerSheet("Reschedule", ReschedModal);
registerSheet("Size", SizeModal);
registerSheet("Sort", SortModal);
registerSheet("Lieu", LieuModal);
registerSheet("Note", NoteModal);
registerSheet("Distance", DistanceModal);
registerSheet("Availability", AvailabilityModal);








export {};
