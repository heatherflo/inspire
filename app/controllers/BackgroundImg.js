import { AppState } from "../AppState.js"
import { Image } from "../models/BackgroundImg.js"
import { api } from "../services/AxiosService.js"
import { backgroundImgService } from "../services/BackgroundImg.js"
import { Pop } from "../utils/Pop.js"


function _drawImg() {
  const images = AppState.image
  let content = images.BackgroundImg
  document.body.style.backgroundImage = `url(${images.imgUrl})`

}

export class BackgroundImg {
  constructor() {
    console.log('bg-img')
    this.getBackgroundImg()
    AppState.on('image', _drawImg)


  }

  async getBackgroundImg() {
    try {
      await backgroundImgService.getImage()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message)
    }
  }




}