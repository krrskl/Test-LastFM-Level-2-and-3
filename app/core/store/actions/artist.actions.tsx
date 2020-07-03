import {Artist} from '../../models/Artist.model';
import {ArtistAttr} from '../../models/Artist-response.model';

const ArtistActionTypes = {
  GET_ARTISTS: '[ARTISTS] Get tracks',
  GET_ARTISTS_SUCCESS: '[ARTISTS] Get tracks success',
  GET_ARTISTS_FAILURE: '[ARTISTS] Get tracks failure',

  SET_ARTIST: '[ARTISTS] Set track',

  NEXT_PAGE: '[ARTISTS] Next page',
  PREV_PAGE: '[ARTISTS] Prev page',
};

export const getArtists = () => {
  return {type: ArtistActionTypes.GET_ARTISTS};
};

export const getArtistsSuccess = (tracks: Artist[], paginator: ArtistAttr) => {
  return {type: ArtistActionTypes.GET_ARTISTS_SUCCESS, tracks, paginator};
};

export const getArtistsFailure = (error: string) => {
  return {type: ArtistActionTypes.GET_ARTISTS_FAILURE, error};
};

export const setArtist = (track: Artist) => {
  return {type: ArtistActionTypes.SET_ARTIST, track};
};

export const nextPage = (page: number) => {
  return {type: ArtistActionTypes.NEXT_PAGE, page};
};

export const prevPage = (page: number) => {
  return {type: ArtistActionTypes.PREV_PAGE, page};
};
