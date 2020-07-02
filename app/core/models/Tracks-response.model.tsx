// Generated by https://quicktype.io
import {Track} from './Track.model';

export interface TracksResponse {
  tracks: Tracks;
}

export interface Tracks {
  track: Track[];
  '@attr': TracksAttr;
}

export interface TracksAttr {
  country: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}
