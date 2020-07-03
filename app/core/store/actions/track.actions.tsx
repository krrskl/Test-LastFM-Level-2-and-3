import {Track} from '../../models/Track.model';
import {TracksAttr} from './../../models/Tracks-response.model';

const TrackActionTypes = {
  GET_TRACKS: '[TRACKS] Get tracks',
  GET_TRACKS_SUCCESS: '[TRACKS] Get tracks success',
  GET_TRACKS_FAILURE: '[TRACKS] Get tracks failure',

  SET_TRACK: '[TRACKS] Set track',

  NEXT_PAGE: '[TRACKS] Next page',
  PREV_PAGE: '[TRACKS] Prev page',
};

export const getTracks = () => {
  return {type: TrackActionTypes.GET_TRACKS};
};

export const getTracksSuccess = (tracks: Track[], paginator: TracksAttr) => {
  return {type: TrackActionTypes.GET_TRACKS_SUCCESS, tracks, paginator};
};

export const getTracksFailure = (error: string) => {
  return {type: TrackActionTypes.GET_TRACKS_FAILURE, error};
};

export const setTrack = (track: Track) => {
  return {type: TrackActionTypes.SET_TRACK, track};
};

export const nextPage = (page: number) => {
  return {type: TrackActionTypes.NEXT_PAGE, page};
};

export const prevPage = (page: number) => {
  return {type: TrackActionTypes.PREV_PAGE, page};
};
