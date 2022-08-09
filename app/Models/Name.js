import { ProxyState } from "../AppState.js"


export class Name{
  constructor(data) {
    this.name = data.name || ''
    this.text = false
  }


  get NameTemplate() {
    return /*html*/ `
        <h2 class="${!this.name.text ? 'img-text' : 'img-text-times'}" id="greeting-time"></h2>
        <h3 class="${!this.name.text ? 'img-text' : 'img-text-times'} ms-4">
          ${this.name}
          <i onclick="app.namesController.changeName()" class="${!this.name.text ? 'img-text' : 'img-text-times'} mdi mdi-pencil-circle-outline fs-6  text-danger on-hover selectable" title="Change Name"></i>
        </h3>
  `
}
    
  
    get TextTemplate(){
      return /*html*/ `
      <i class="${!ProxyState.name.text ? 'img-text' : 'img-text-times'} mdi mdi-alpha-t-circle fs-5" onclick="app.namesController.toggleText(${this.text})" title="Change Text">
      </i>
      `
    }



}