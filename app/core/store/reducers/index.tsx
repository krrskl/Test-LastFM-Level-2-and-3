import {combineReducers} from 'redux';
import trackReducer from './track.reducer';
import artistReducer from './artist.reducer';

const rootReducer = combineReducers({
  tracksScreenStore: trackReducer,
  artistsScreenStore: artistReducer,
});

export default rootReducer;
