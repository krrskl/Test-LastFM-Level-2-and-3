import {create, ApisauceInstance} from 'apisauce';
import config from '../config';

export class BaseService {
  private api: ApisauceInstance;
  constructor() {
    this.api = create({
      baseURL: config.api,
      timeout: 8000,
      headers: {
        Accept: 'application/json',
      },
    });

    this.api.axiosInstance.interceptors.request.use((requestConfig) => {
      console.log(requestConfig.url);
      return requestConfig;
    });
  }

  public get(endpoint: string, params: {} = {}) {
    this.api.get(endpoint, params);
  }
}
