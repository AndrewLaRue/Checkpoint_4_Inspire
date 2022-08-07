import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js"


class WeathersService {

  async getWeather() {
    let res = await sandboxApi.get('/weather') 
    // console.log('[get weather service]', res);

    ProxyState.weather = new Weather(res.data)
    // console.log(ProxyState.weather);
  }


}


export const weathersService = new WeathersService()