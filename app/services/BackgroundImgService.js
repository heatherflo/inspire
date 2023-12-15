
import { AppState } from "../AppState.js"
import { Image } from "../models/BackgroundImg.js"
import { api } from "./AxiosService.js"




class BackgroundImgService {



  async getImage() {
    const response = await api.get(`api/images`)
    console.log('getting images', '🌆')
    console.log(response, '📡🌆')
    const newImg = new Image(response.data)
    console.log(newImg, 'new 🌆📡')
    AppState.image = newImg
  }
}

export const backgroundImgService = new BackgroundImgService()