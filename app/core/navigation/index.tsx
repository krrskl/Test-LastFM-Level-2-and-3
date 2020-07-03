import {Navigation} from 'react-native-navigation';
import HomeScreen from '../../screens/Home/HomeScreen';
import ArtistScreen from '../../screens/Artist/ArtistScreen';
import ArtistDetailsScreen from '../../screens/Artist-details/ArtistDetailsScreen';
import TracksScreen from '../../screens/Tracks/Tracks-screen';
import TrackDetailsScreen from '../../screens/Track-details/Track-details-screen';
import {Provider} from 'react-redux';
import configureStore from '../config/configureStore';

const store = configureStore();

/**
 * Function for register the screens in the stack of React Native Navigation.
 *
 * @return
 */
export function registerScreens(): void {
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponentWithRedux(
    'ArtistScreen',
    () => ArtistScreen,
    Provider,
    store,
  );
  Navigation.registerComponent(
    'ArtistDetailsScreen',
    () => ArtistDetailsScreen,
  );
  Navigation.registerComponentWithRedux(
    'TracksScreen',
    () => TracksScreen,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'TrackDetailsScreen',
    () => TrackDetailsScreen,
    Provider,
    store,
  );
}
