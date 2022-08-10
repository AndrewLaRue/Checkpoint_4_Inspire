import { ProxyState } from "../AppState.js"
import { Name } from "../Models/Name.js"



class NamesService {
  
  addName(newName) {
    ProxyState.name = new Name(newName)
  }
  


}



export const namesService = new NamesService()