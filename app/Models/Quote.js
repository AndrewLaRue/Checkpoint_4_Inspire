import { ProxyState } from "../AppState.js"


export class Quote{

  constructor(data) {
    this.description = data.content
    this.author = data.author
  }


  get Template() {
    return `
      <h5 class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'} mb-o pb-0">${this.description}</h5>
      <i class="mdi mdi-skip-forward ${!ProxyState.name.text ? 'img-text' : 'img-text-dark'} selectable on-hover" title="Change Quote" onclick="app.quotesController.change()"></i>
      <span class="${!ProxyState.name.text ? 'img-text' : 'img-text-dark'} d-flex justify-content-center align-items-center pt-0 mt-0 mb-2 on-hover"><small>${this.author}</small></span>
    `
  }
}