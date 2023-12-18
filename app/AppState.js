import { Image } from './models/BackgroundImg.js'
import { Weather } from './models/Weather.js'
import { Quotes } from './models/Quotes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { ToDo } from './models/ToDos.js'

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

  // REVIEW the [] at the end of the type, tells our appstate this is a collection of that type, so there will be many todos
  /**@type {ToDo[]} */
  activeToDo = []






}







export const AppState = createObservableProxy(new ObservableAppState())