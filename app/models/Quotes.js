
import { AppState } from "../AppState.js"

export class Quotes {
  constructor(data) {
    this.content = data.content
    this.description = data.description
    this.tags = data.tags
    this.author = data.author
  }


  getQuoteTemplate() {
    return `${this.content}${this.author}`
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
