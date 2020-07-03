import {TrackActions} from '../actions';
import {TrackService} from './../../services/track-service';
import {TracksResponse} from './../../models/Tracks-response.model';
import {Track} from './../../models/Track.model';
import {Navigation} from 'react-native-navigation';

const trackService = new TrackService();

export const fetchTracks = () => {
  return (dispatch: any, getState: any) => {
    dispatch({type: TrackActions.getTracks});

    const {page, limit} = getState().tracksScreenStore.paginator;

    trackService.getAllTopTracks(limit, page).then((resp) => {
      const data: TracksResponse = resp.data;
      dispatch({
        type: TrackActions.getTracksSuccess,
        tracks: data.tracks.track,
        paginator: data.tracks['@attr'],
      });
    });
  };
};

export const fetchNextPage = () => {
  return (dispatch: any, getState: any) => {
    let {page, totalPages} = getState().tracksScreenStore.paginator;

    if (page < totalPages) {
      page = parseInt(`${page}`, 10) + 1;

      dispatch({type: TrackActions.nextPage, page});
      dispatch(fetchTracks());
    }
  };
};

export const fetchPrevPage = () => {
  return (dispatch: any, getState: any) => {
    let {page} = getState().tracksScreenStore.paginator;
    if (page > 1) {
      page = parseInt(`${page}`, 10) - 1;

      dispatch({type: TrackActions.nextPage, page});
      dispatch(fetchTracks());
    }
  };
};

export const goToTrackDetails = (track: Track) => {
  return (dispatch: any) => {
    dispatch({type: TrackActions.setTrack, track});
    Navigation.push('TracksScreen', {
      component: {
        name: 'TrackDetailsScreen',
        id: 'TrackDetailsScreen',
        options: {
          topBar: {
            title: {
              text: `Detalles de ${track.name}`,
            },
          },
        },
      },
    });
  };
};
