import {BaseService} from './base-api';

export class ArtistService extends BaseService {
  private method: string = 'geo.gettopartists';

  public getAllTopArtists(limit: number = 10, page: number = 1): Promise<any> {
    const params = {
      country: 'colombia',
      method: this.method,
      limit,
      page,
    };
    return super.get('/', params);
  }
}
