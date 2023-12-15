import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";



class WeatherService {



  async getWeather() {
    const response = await api.get('api/weather')
    console.log(response.data, '☁️ 📡')
  }

}

export const weatherService = new WeatherService() 