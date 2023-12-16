
import { AppState } from "../AppState.js"

export class Quotes {
  constructor(data) {
    this.content = data.content
    this.description = data.description
    this.tags = data.tags
    this.author = data.author
  }


  getQuoteTemplate() {
    return `
    
    <div class="hover-parent">
    <h1 class="col-12 ">${this.content}</h1>
    <h2 class="col-12 hover-child">${this.author}</h2>
    
    </div>

  `
  }
}

// "quote": {
//   "body": {
//     "maxLength": 500
//   },
//   "author": {
//     "maxLength": 500
//   },
//   "tags": [
//     {
//       "maxLength": 500
//     }
//   ]
// },
// "description": {
//   "type": "String",
//   "required": true
// }
