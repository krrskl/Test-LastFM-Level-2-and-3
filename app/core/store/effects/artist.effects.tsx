import {ArtistActions} from '../actions';
import {ArtistService} from '../../services/artist-service';
import {ArtistResponse} from '../../models/Artist-response.model';
import {Artist} from '../../models/Artist.model';
import {Navigation} from 'react-native-navigation';

const artistService = new ArtistService();

export const fetchArtists = () => {
  return (dispatch: any, getState: any) => {
    dispatch({type: ArtistActions.getArtists});

    const {page, limit} = getState().artistsScreenStore.paginator;

    artistService.getAllTopArtists(limit, page).then((resp) => {
      const data: ArtistResponse = resp.data;
      dispatch({
        type: ArtistActions.getArtistsSuccess,
        artists: data.topartists.artist,
        paginator: data.topartists['@attr'],
      });
    });
  };
};

export const fetchNextPage = () => {
  return (dispatch: any, getState: any) => {
    let {page, totalPages} = getState().artistsScreenStore.paginator;

    if (page < totalPages) {
      page = parseInt(`${page}`, 10) + 1;

      dispatch({type: ArtistActions.nextPage, page});
      dispatch(fetchArtists());
    }
  };
};

export const fetchPrevPage = () => {
  return (dispatch: any, getState: any) => {
    let {page} = getState().artistsScreenStore.paginator;
    if (page > 1) {
      page = parseInt(`${page}`, 10) - 1;

      dispatch({type: ArtistActions.nextPage, page});
      dispatch(fetchArtists());
    }
  };
};

export const goToArtistDetails = (artist: Artist) => {
  return (dispatch: any) => {
    dispatch({type: ArtistActions.setArtist, artist});
    Navigation.push('ArtistsScreen', {
      component: {
        name: 'ArtistDetailsScreen',
        id: 'ArtistDetailsScreen',
        options: {
          topBar: {
            title: {
              text: `Detalles de ${artist.name}`,
            },
          },
        },
      },
    });
  };
};
