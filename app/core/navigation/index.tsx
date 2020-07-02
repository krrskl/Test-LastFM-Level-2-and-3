import {Navigation} from 'react-native-navigation';
import HomeScreen from '../../components/Home/HomeScreen';

export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
}
