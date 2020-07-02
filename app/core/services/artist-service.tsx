import {BaseService} from './base-api';

export class ArtistService extends BaseService {
  private method: string = 'geo.gettopartists';

  public getAllTopArtist(): Promise<any> {
    const params = {
      country: 'colombia',
      method: this.method,
    };
    return super.get('/', params);
  }
}
