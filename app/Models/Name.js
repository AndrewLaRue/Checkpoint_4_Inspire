import { ProxyState } from "../AppState.js"


export class Name{
  constructor(data) {
    this.name = data.name || ''
  }


  get NameTemplate() {
    return /*html*/ `
        <h2 class="img-text" id="greeting-time"></h2>
        <h3 class="img-text ms-4">
          ${this.name}
          <i onclick="app.namesController.changeName()" class="img-text mdi mdi-pencil-circle-outline fs-6  text-danger on-hover selectable" title="Change Name"></i>
        </h3>
  `
}
    
  




}