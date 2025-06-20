import {registerSheet} from 'react-native-actions-sheet';
import SettingsModal from '../components/modal/SettingsModal';
import FilterModal from '../components/modal/FilterModal';

registerSheet('Settings', SettingsModal);
registerSheet("Filter", FilterModal)

export {};