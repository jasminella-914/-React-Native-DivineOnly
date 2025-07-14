import { registerSheet } from "react-native-actions-sheet";
import SettingsModal from "../modal/SettingsModal";
import FilterModal from "../modal/FilterModal";
import ReschedModal from "../modal/ReschedModal";
import SizeModal from "../modal/SizeModal";
import SortModal from "../modal/SortModal";
import LieuModal from "../modal/LieuModal";
import NoteModal from "../modal/NoteModal";
import DistanceModal from "../modal/DistanceModal";
import AvailabilityModal from "../modal/AvailabilityModal";
import RateModal from "../modal/RateModal";



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
