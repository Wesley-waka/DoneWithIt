import { create } from 'apisauce';
import cache from '../utility/cache';

create({
  baseURL: 'http://192.168.0.14:9000/api'
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  //Before
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
  //Aafter
}

export default apiClient;