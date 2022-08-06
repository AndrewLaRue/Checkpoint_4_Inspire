






export class Weather {

  constructor(data) {
    this.name = data.name
    this.temp = data.main.temp
    this.toggle = true

  }
  
  get FahrTemplate() {
    
    let kelvin = this.temp
    let celsius = Math.floor(kelvin - 273)
    let fahr = Math.floor(celsius * (9/5) + 32)

    return `
    <div class="no-select selectable" onclick="app.weathersController.toggleFahr()">
      <p>${fahr}° F</p>
      <p>${this.name}</p>
    </div>
    `
  }
  get CelsiusTemplate() {
    
    let kelvin = this.temp
    let celsius = Math.floor(kelvin - 273)

    return `
    <div class="no-select selectable" onclick="app.weathersController.toggleCel()">
    <p>${celsius}° C</p>
    <p>${this.name}</p>
    </div>
    `
  }
}
