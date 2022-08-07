import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js"
import { Image } from "../Models/Image.js"

class ImagesService{

  async getImage() {
    let res = await sandboxApi.get('/images')
    // console.log('[get img res]', res);

      ProxyState.image = new Image(res.data)
    // console.log(ProxyState.image);
  }



}



export const imagesService = new ImagesService() 