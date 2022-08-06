import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []


  
  /** @type {import('./Models/Todo').Todo[]} */
  todos = []


  
  /** @type {import('./Models/Quote').Quote} */
  // @ts-ignore
  quote = {}


  
  /** @type {import('./Models/Weather').Weather} */
  // @ts-ignore
  weather = {}


  
  /** @type {import('./Models/Image').Image} */
  // @ts-ignore
  image = {}


  
  /** @type {import('./Models/Name').Name} */
  // @ts-ignore
  name = null


  
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
