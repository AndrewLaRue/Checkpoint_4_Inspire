import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";


function _draw() {
  // @ts-ignore
  document.getElementById('quote').innerHTML = ProxyState.quote.Template
}

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
}
