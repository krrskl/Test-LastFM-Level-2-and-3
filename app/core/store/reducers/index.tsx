import {combineReducers} from 'redux';
import trackReducer from './track.reducer';

const rootReducer = combineReducers({tracksScreenStore: trackReducer});

export default rootReducer;
