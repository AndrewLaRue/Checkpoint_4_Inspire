import { ProxyState } from "../AppState.js"


export class Name{
  constructor(data) {
    this.name = data.name || ''
    this.text = false
  }


  get NameTemplate() {
    return /*html*/ `
        <h2 class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'}" id="greeting-time"></h2>
        <h3 class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'} ms-4">
          ${this.name}
          <i onclick="app.namesController.changeName()" class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'} mdi mdi-pencil-circle-outline fs-6  text-danger on-hover selectable" title="Change Name"></i>
        </h3>
  `
}
    
  
    get TextTemplate(){
      return /*html*/ `
      <i class="mdi mdi-lightbulb fs-5 text-warning" onclick="app.namesController.toggleText(${this.text})" title="Change Text">
      </i>
      `
    }



}