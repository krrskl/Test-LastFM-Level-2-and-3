import {Track} from './../../models/Track.model';
import {TrackActions} from '../actions';
import {TracksAttr} from './../../models/Tracks-response.model';

export interface TrackState {
  tracks: Track[];
  track: Track | null;
  loading: boolean;
  error: string;
  limit: number;
  paginator: TracksAttr;
}

const initialState: TrackState = {
  tracks: [],
  track: null,
  loading: false,
  error: '',
  limit: 10,
  paginator: {page: '1', totalPages: '0'},
};

export default function trackReducer(
  state: TrackState = initialState,
  action: any,
) {
  switch (action.type) {
    case TrackActions.getTracks:
      return {
        ...state,
        loading: true,
      };

    case TrackActions.getTracksSuccess:
      const {tracks, paginator} = action;
      return {
        ...state,
        tracks: [...tracks],
        paginator,
        loading: false,
      };

    case TrackActions.getTracksFailure:
      return {
        ...state,
        loading: false,
        erorr: action.error,
      };

    case TrackActions.setTrack:
      return {
        ...state,
        track: action.track,
      };

    case TrackActions.nextPage:
      return {...state, paginator: {...state.paginator, page: action.page}};

    case TrackActions.prevPage:
      return {...state, paginator: {...state.paginator, page: action.page}};

    default:
      return state;
  }
}
