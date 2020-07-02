import {Navigation} from 'react-native-navigation';
import HomeScreen from '../../screens/Home/HomeScreen';
import ArtistScreen from '../../screens/Artist/ArtistScreen';
import ArtistDetailsScreen from '../../screens/Artist-details/ArtistDetailsScreen';
import TracksScreen from '../../screens/Tracks/Tracks-screen';
import TrackDetailsScreen from '../../screens/Track-details/Track-details-screen';

export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('ArtistScreen', () => ArtistScreen);
  Navigation.registerComponent(
    'ArtistDetailsScreen',
    () => ArtistDetailsScreen,
  );
  Navigation.registerComponent('TracksScreen', () => TracksScreen);
  Navigation.registerComponent('TrackDetailsScreen', () => TrackDetailsScreen);
}
