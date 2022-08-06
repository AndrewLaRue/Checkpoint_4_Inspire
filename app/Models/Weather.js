






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

    return `
    <div class="no-select selectable d-flex flex-row" onclick="app.weathersController.toggleCel()">
      <div>
        <img class="weather-icon" title="${this.iconInfo}" src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="">
      </div>
      <div>
        <p class="mb-0">${fahr}° F</p>
        <p>${this.name}</p>
      </div>
    </div>
    `
  }
  get CelsiusTemplate() {
    
    let kelvin = this.temp
    let celsius = Math.floor(kelvin - 273)

    return `
    <div class="no-select selectable d-flex flex-row" onclick="app.weathersController.toggleKel()">
      <div>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="">
      </div>
      <div>
        <p class="mb-0">${celsius}° C</p>
        <p>${this.name}</p>
      </div>
    </div>
    `
  }

  get KelvinTemplate() {
    let kelvin = Math.floor(this.temp)
    
    return `
    <div class="no-select selectable d-flex flex-row" onclick="app.weathersController.toggleFahr()">
      <div>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="">
      </div>
      <div>
        <p class="mb-0">${kelvin}° K</p>
        <p>${this.name}</p>
      </div>
    </div>
    `
  }
}
