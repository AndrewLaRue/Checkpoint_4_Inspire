import { ProxyState } from "../AppState.js"
import { Name } from "../Models/Name.js"



class NamesService {
  
  addName(newName) {
    ProxyState.name = new Name(newName)
    ProxyState.name = ProxyState.name
  }
  
  toggleText() {
    ProxyState.name.text = !ProxyState.name.text
    console.log(ProxyState.name.text);
    ProxyState.name = ProxyState.name

    // @ts-ignore
    document.getElementById('text-toggle').innerHTML = ProxyState.name.TextTemplate

  }

}



export const namesService = new NamesService()