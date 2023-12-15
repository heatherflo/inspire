import { AppState } from "../AppState.js"
import { Quotes } from "../models/Quotes.js"
import { quotesService } from "../services/QuotesService.js"
import { Pop } from "../utils/Pop.js"




function _drawQuotes() {
  const quotes = AppState.quotes
  let content = quotes.getQuoteTemplate()
  console.log('quote content 🔖', content)
  document.getElementById('draw-quotes').innerHTML = content
}


export class QuotesController {
  constructor() {
    console.log('getting quotes')
    this.getQuotes()
    AppState.on('quotes', _drawQuotes)


  }


  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }

  }

}