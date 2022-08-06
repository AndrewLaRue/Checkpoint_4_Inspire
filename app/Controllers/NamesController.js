import { ProxyState } from "../AppState.js";
import { namesService } from "../Services/NamesService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

function _draw() {
  let names = ProxyState.name
  if (!names) {
    return
  }
  // @ts-ignore
  document.getElementById('greeting-name').textContent = ProxyState.name.toString()
}

export class NamesController{
  constructor() {
  ProxyState.on('name', _draw)
  // ProxyState.on('name', saveState)
    
  // loadState()
  _draw()
  }
  
  addName() {
    // @ts-ignore
    window.event.preventDefault()
    // @ts-ignore
    let form = window.event.target

    let newName = {
      // @ts-ignore
      name: form.name.value
    }
    namesService.addName(newName)
    // @ts-ignore
    form.reset
  }
  
  test() {
    console.log(ProxyState.name);
  }
}