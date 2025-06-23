import {registerSheet} from 'react-native-actions-sheet';
import SettingsModal from '../components/modal/SettingsModal';
import FilterModal from '../components/modal/FilterModal';
import ReschedModal from '../components/modal/ReschedModal';


registerSheet('Settings', SettingsModal);
registerSheet("Filter", FilterModal);
registerSheet("Reschedule", ReschedModal);


export {};