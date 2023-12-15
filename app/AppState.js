import { Image } from './models/BackgroundImg.js'
import { Weather } from './models/Weather.js'
import { Quotes } from './models/Quotes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {Weather} */
  weather = null

  /**@type {Image}} */
  image = null

  /**@type {Quotes} */
  quotes = null

}





export const AppState = createObservableProxy(new ObservableAppState())