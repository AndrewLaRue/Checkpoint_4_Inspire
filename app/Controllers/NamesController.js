import { ProxyState } from "../AppState.js";
import { getNameForm } from "../Components/NameForm.js";
import { namesService } from "../Services/NamesService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";


// TODO combine top 3?
function _drawOption() {
  if (!ProxyState.name) {
    _drawForm()
  } else {
    _drawName()
  }
}

function _drawForm() {
  // @ts-ignore
  document.getElementById('greeting-name').innerHTML = getNameForm() 
}

function _drawName() {
  let name = ProxyState.name.NameTemplate
  // @ts-ignore
  document.getElementById('greeting-name').innerHTML = name
}



export class NamesController{
  constructor() {
  ProxyState.on('name', _drawOption)
  ProxyState.on('name', saveState)
    
  loadState()
  _drawOption()
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



}