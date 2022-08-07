import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

let intervalID;

function _draw() {
  // @ts-ignore
  document.getElementById('quote').innerHTML = ProxyState.quote.Template
  
  // _drawCycle()
}


// function _drawCycle() {
//   // @ts-ignore
//    document.getElementById('cycle').innerHTML = ProxyState.quote.CycleUp

// }



export class QuotesController {

  constructor() {
    ProxyState.on('quote', _draw)
    ProxyState.on('name', _draw)

    this.getQuote()
    _draw()
  }
  
  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error('[get quote]', error);
      Pop.error(error)
    }
  }

  async change() {
  await this.getQuote()
  }

  // cycleQuotes() {
  //   try {
  //     let cycle = ProxyState.quote.cycle
  //     if (cycle = 1) {
  //       cycle--
  //       console.log(cycle);
  //       intervalID = setInterval(this.getQuote, 1000)
  //       ProxyState.quote = ProxyState.quote
  //       // @ts-ignore
  //       // document.getElementById('cycle').innerHTML = ProxyState.quote.CycleDown
  //     }
  //   } catch (error) {
  //     console.error('[startCycle]', error);
  //     Pop.error(error)
  //   }
  // }

  // async stopCycle() {
  //   try {
  //     let cycle = ProxyState.quote.cycle
  //     if (cycle = 0) {
  //       cycle++
  //       clearInterval(intervalID)
  //       ProxyState.quote = ProxyState.quote
  //               // @ts-ignore
  //       // document.getElementById('cycle').innerHTML = ProxyState.quote.CycleUp
  //     }
  //   } catch (error) {
  //     console.error('[stopCycle]', error);
  //     Pop.error(error)
  //   }
  // }
}
