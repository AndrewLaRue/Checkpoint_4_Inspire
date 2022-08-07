import { ProxyState } from "../AppState.js"


export class Weather {

  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.icon = data.weather[0].icon
    this.iconInfo = data.weather[0].description
    this.toggle = 1

  }
  
  get FahrTemplate() {
    
    let kelvin = this.temp
    let celsius = Math.floor(kelvin - 273)
    let fahr = Math.floor(celsius * (9/5) + 32)

    return /*html*/ `
    <section class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'} no-select selectable d-flex flex-row align-items-center" onclick="app.weathersController.toggleCel()" title="Toggle Celsius">
      <div>
        <img class="weather-icon" title="${this.iconInfo}" src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="">
      </div>
      <div>
        <div>${fahr}° F</div>
        <div>${this.name}</div>
      </div>
    </section>
    `
  }

  get CelsiusTemplate() {
    
    let kelvin = this.temp
    let celsius = Math.floor(kelvin - 273)

    return /*html*/ `
    <section class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'} no-select selectable d-flex flex-row align-items-center" onclick="app.weathersController.toggleKel()" title="Toggle Kelvin">
      <div>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="">
      </div>
      <div>
        <div>${celsius}° C</div>
        <div>${this.name}</div>
      </div>
    </section>
    `
  }

  get KelvinTemplate() {
    let kelvin = Math.floor(this.temp)
    
    return /*html*/ `
    <section class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'} no-select selectable d-flex flex-row align-items-center" onclick="app.weathersController.toggleFahr()"  title="Toggle Fahrenheit">
      <div>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="">
      </div>
      <div>
        <div>${kelvin}° K</div>
        <div>${this.name}</div>
      </div>
    </section>
    `
  }

}
