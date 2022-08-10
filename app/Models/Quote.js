import { ProxyState } from "../AppState.js"


export class Quote{

  constructor(data) {
    this.description = data.content || ''
    this.author = data.author || ''
    this.cycle = 0
  }


  get Template() {
    return `
      <h5 class="${!ProxyState.name.text ? 'img-text' : 'img-text-times'} mb-o pb-0">${this.description}</h5>



      <i class="mdi mdi-skip-forward ${!ProxyState.name.text ? 'img-text' : 'img-text-times'} selectable on-hover" title="Change Quote" onclick="app.quotesController.change()"></i>

      <span class="${!ProxyState.name.text ? 'img-text' : 'img-text-times'} d-flex justify-content-center align-items-center pt-0 mt-0 mb-2 on-hover"><small>${this.author}</small></span>
    `
  }

  // Testing Ground

      // <span id="cycle">
      // ${this.CycleUp}
      // </span>


  // get CycleQuotes() {
  //    if (this.cycle = 0) {
  //            return `
  //     <i class="mdi mdi-play ${!ProxyState.name.text ? 'img-text' : 'img-text-times'} selectable" title="Cycle Quotes" onclick="app.quotesController.cycleQuotes()"></i>
  //     `
  //    }
  //    else {
  //            return `
  //         <i class="mdi mdi-stop ${!ProxyState.name.text ? 'img-text' : 'img-text-times'} selectable" title="Stop Cycle" onclick="app.quotesController.stopCycle()"></i>
  //     `
  //      }
  // }

  // get CycleUp() {
  //     return `
  //     <i class="mdi mdi-play ${!ProxyState.name.text ? 'img-text' : 'img-text-times'} selectable" title="Cycle Quotes" onclick="app.quotesController.cycleQuotes()"></i>
  //     `

  // }

  // get CycleDown() {
  //     return `
  //         <i class="mdi mdi-stop ${!ProxyState.name.text ? 'img-text' : 'img-text-times'} selectable" title="Stop Cycle" onclick="app.quotesController.stopCycle()"></i>
  //     `
  // }
  
}