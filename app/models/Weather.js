

export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main.temp
    this.weather = data.weather
    this.temp = data.main.temp //in Kelvin
    this.FTemp = Math.floor((this.temp - 273.15) * 1.8 + 32)
    this.CTemp = Math.floor(this.temp - 273.15)
    this.tempSwitch = true

  }

  get drawWeatherTemplate() {
    return `
    <div class="p-3" type="button" onclick="app.WeatherController.changeTemp()" >
    ${this.tempSwitch ? `Boise Today: ${this.FTemp}F` : `Boise Today: ${this.CTemp}C`}
    </div>`
  }



}


// name: String, 
// main: undefined, 
// weather: undefined, 
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)