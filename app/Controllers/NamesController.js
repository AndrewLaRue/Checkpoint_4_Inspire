import { ProxyState } from "../AppState.js";
import { getNameForm } from "../Components/NameForm.js";
import { namesService } from "../Services/NamesService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";

function _drawForm() {
  // @ts-ignore
  document.getElementById('greeting-name').innerHTML = getNameForm() 
}

function _drawTextToggle() {
  // @ts-ignore
  document.getElementById('text-toggle').innerHTML = ProxyState.name.TextTemplate
}

function _drawName() {
  let name = ProxyState.name.NameTemplate
  // @ts-ignore
  document.getElementById('greeting-name').innerHTML = name
}

function _draw() {
  if (!ProxyState.name) {
    _drawForm()
  } else {
    _drawName()
  }
}

export class NamesController{
  constructor() {
  ProxyState.on('name', _draw)
  ProxyState.on('name', saveState)
    
  loadState()
  _draw()
  _drawTextToggle()
  }
  
  addName() {
    try {
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
    } catch (error) {
      console.error('[addName]', error);
      Pop.error(error)
    }
  }

  changeName() {
    _drawForm()
  }

  toggleText() {
      try {
        namesService.toggleText()
      } catch (error) {
        console.error('[changeText]', error);
        Pop.error(error)
      }
  }

}