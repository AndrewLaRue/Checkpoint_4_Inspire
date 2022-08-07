import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";



function _draw() {
  let reading = ProxyState.weather.toggle
  if (reading == 1) {
    // @ts-ignore
    document.getElementById('weather').innerHTML = ProxyState.weather.FahrTemplate
  } else if (reading == 2){
    // @ts-ignore
    document.getElementById('weather').innerHTML = ProxyState.weather.CelsiusTemplate
  } else if(reading == 3){
    // @ts-ignore
    document.getElementById('weather').innerHTML = ProxyState.weather.KelvinTemplate
  }
}


export class WeathersController {

  constructor() {
    this.getWeather()
    ProxyState.on('weather', _draw)
    ProxyState.on('name', _draw)
    setInterval(this.getWeather, 100000)
  }

  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      // console.error('[get weather function], error');
      Pop.error(error)
    }
  }


  // TOGGLES \\
  // TODO combine them

  toggleFahr() {
    ProxyState.weather.toggle -= 2
    ProxyState.weather = ProxyState.weather
    _draw()
  }

  toggleCel() {
    ProxyState.weather.toggle++
        ProxyState.weather = ProxyState.weather
    _draw()
  }

  toggleKel() {
    ProxyState.weather.toggle++
        ProxyState.weather = ProxyState.weather
    _draw()
  }

}


