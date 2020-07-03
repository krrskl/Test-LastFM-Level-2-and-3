import {Artist} from '../../models/Artist.model';
import {ArtistActions} from '../actions';
import {ArtistAttr} from '../../models/Artist-response.model';

export interface ArtistState {
  artists: Artist[];
  artist: Artist | null;
  loading: boolean;
  error: string;
  limit: number;
  paginator: ArtistAttr;
}

const initialState: ArtistState = {
  artists: [],
  artist: null,
  loading: false,
  error: '',
  limit: 10,
  paginator: {page: '1', totalPages: '0'},
};

export default function artistReducer(
  state: ArtistState = initialState,
  action: any,
) {
  switch (action.type) {
    case ArtistActions.getArtists:
      return {
        ...state,
        loading: true,
      };

    case ArtistActions.getArtistsSuccess:
      const {artists, paginator} = action;
      return {
        ...state,
        artists: [...artists],
        paginator,
        loading: false,
      };

    case ArtistActions.getArtistsFailure:
      return {
        ...state,
        loading: false,
        erorr: action.error,
      };

    case ArtistActions.setArtist:
      return {
        ...state,
        artist: action.artist,
      };

    case ArtistActions.nextPage:
      return {...state, paginator: {...state.paginator, page: action.page}};

    case ArtistActions.prevPage:
      return {...state, paginator: {...state.paginator, page: action.page}};

    default:
      return state;
  }
}
