import {Navigation} from 'react-native-navigation';
import HomeScreen from '../../components/Home/HomeScreen';
import ArtistScreen from '../../components/Artist/ArtistScreen';

export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('ArtistScreen', () => ArtistScreen);
}
