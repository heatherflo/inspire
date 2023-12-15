
import { Pop } from "../utils/Pop.js"
import { weatherService } from "../services/WeatherService.js"
import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"


function _drawWeather() {
  const newWeather = AppState.weather
  let content = newWeather.drawWeatherTemplate
  document.getElementById('draw-weather').innerHTML = content
  console.log(content, 'new Weather')

}



export class WeatherController {
  constructor() {
    console.log('getting started')
    this.getWeather()
    AppState.on('weather', _drawWeather)
  }


  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  changeTemp() {
    let newTemp = AppState.weather
    newTemp.tempSwitch = !newTemp.tempSwitch
    console.log(newTemp)

  }
}