
import { Pop } from "../utils/Pop.js"
import { weatherService } from "../services/WeatherService.js"



export class WeatherController {
  constructor() {
    console.log('getting started')
    this.getWeather()
  }


  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}