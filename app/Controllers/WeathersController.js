import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";
import { Weather } from "../Models/Weather.js"


function _draw() {
  let reading = ProxyState.weather.toggle
  if (reading) {
    // @ts-ignore
    document.getElementById('weather').innerHTML = ProxyState.weather.FahrTemplate
  } else {
    // @ts-ignore
    document.getElementById('weather').innerHTML = ProxyState.weather.CelsiusTemplate
  }
}


export class WeathersController {
  constructor() {
    this.getWeather()
    ProxyState.on('weather', _draw)
    setInterval(this.getWeather, 100000)
  }


  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error('[get weather function], error');
      Pop.error(error)
    }
  }

  toggleFahr() {
    ProxyState.weather.toggle = false
    _draw()
  }

  toggleCel() {
    ProxyState.weather.toggle = true
    _draw()
  }

}
