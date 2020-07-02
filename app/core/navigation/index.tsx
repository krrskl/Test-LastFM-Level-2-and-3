import {Navigation} from 'react-native-navigation';
import HomeScreen from '../../screens/Home/HomeScreen';
import ArtistScreen from '../../screens/Artist/ArtistScreen';

export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('ArtistScreen', () => ArtistScreen);
}
