import { registerSheet } from "react-native-actions-sheet";
import SettingsModal from "../src/modal/SettingsModal";
import FilterModal from "../src/modal/FilterModal";
import ReschedModal from "../src/modal/ReschedModal";
import SizeModal from "../src/modal/SizeModal";
import SortModal from "../src/modal/SortModal";
import LieuModal from "../src/modal/LieuModal";
import NoteModal from "../src/modal/NoteModal";
import DistanceModal from "../src/modal/DistanceModal";
import AvailabilityModal from "../src/modal/AvailabilityModal";
import RateModal from "../src/modal/RateModal";



registerSheet("Settings", SettingsModal);
registerSheet("Filter", FilterModal);
registerSheet("Reschedule", ReschedModal);
registerSheet("Size", SizeModal);
registerSheet("Sort", SortModal);
registerSheet("Lieu", LieuModal);
registerSheet("Note", NoteModal);
registerSheet("Distance", DistanceModal);
registerSheet("Availability", AvailabilityModal);
registerSheet("Rate", RateModal);








export {};
