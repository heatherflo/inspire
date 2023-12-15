import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";



class WeatherService {



  async getWeather() {
    const response = await api.get('api/weather')
    console.log(response.data.main.temp, '☁️ 📡')
    const newWeather = new Weather(response.data)
    AppState.weather = newWeather
    console.log(newWeather, 'new☁️')

  }

}

export const weatherService = new WeatherService() 