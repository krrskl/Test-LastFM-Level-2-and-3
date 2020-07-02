import {BaseService} from './base-api';

export class ArtistService extends BaseService {
  private method: string = 'geo.gettoptracks';
  public getAllTopArtist() {
    const params = {
      country: 'colombia',
      method: this.method,
    };
    return super.get('/', params);
  }
}
