import { AppState } from "../AppState.js"

export class Image {
  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.query = data.query
    this.largeImgUrl = data.largeImgUrl
  }


  get BackgroundImg() {
    return `<div class="bg-img"></div>`
  }
}


// url: String, 
// imgUrl: String, 
// query: String, 
// author: String, 
// largeImgUrl: String, 
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)