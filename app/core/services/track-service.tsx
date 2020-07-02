import {BaseService} from './base-api';

export class TrackService extends BaseService {
  private method: string = 'geo.gettoptracks';

  public getAllTopTracks(limit: number = 10, page: number = 1): Promise<any> {
    const params = {
      country: 'colombia',
      method: this.method,
      limit,
      page,
    };
    return super.get('/', params);
  }
}
