import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Quotes } from "../models/Quotes.js"



class QuotesService {


  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('quotes 🔖', response.data.content)
    const newQuotes = new Quotes(response.data)
    console.log('🔖new quote', newQuotes)
    AppState.quotes = newQuotes

  }
}
export const quotesService = new QuotesService()