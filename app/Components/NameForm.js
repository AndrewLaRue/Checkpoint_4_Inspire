import { Name } from "../Models/Name.js";
import { ProxyState } from "../AppState.js"


export function getNameForm(name = new Name({})) {
  

  // <input class="${!ProxyState.name.text ? 'img-text' : 'img-text-times'} clear border-0 text-center" type="text" placeholder="Add Name" name="name" id="name" value="${name.name}"></input>
  return `
      <form onsubmit="app.namesController.addName()">
        
        <button class="btn border-0">
        <i class="mdi mdi-gate-or ${!ProxyState.name.text ? 'img-text' : 'img-text-times'} fs-1 selectable" title="Submit"></i>
        </button>
        </form>
  `
}