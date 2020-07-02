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
      requestConfig.params = {
        ...requestConfig.params,
        api_key: config.api_key,
        format: 'json',
      };

      return requestConfig;
    });
  }

  public get(endpoint: string, params: {} = {}): Promise<any> {
    return this.api.get(endpoint, params);
  }
}
