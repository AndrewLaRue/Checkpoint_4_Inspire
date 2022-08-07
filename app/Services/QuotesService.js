import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js"
import { Quote } from "../Models/Quote.js"


function _draw() {
  // @ts-ignore
  document.getElementById('quote').innerHTML = ProxyState.quote.Template
}


class QuotesService {
  constructor() {
    ProxyState.on('quote', _draw)
    _draw()
  }

  async getQuote() {
    let res = await sandboxApi.get('/quotes')
    // console.log('[get quote res]', res);
    
    ProxyState.quote = new Quote(res.data)
    // console.log(ProxyState.quote);
  }

}


export const quotesService = new QuotesService()