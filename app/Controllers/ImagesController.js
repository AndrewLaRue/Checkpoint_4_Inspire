import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";



function _draw() {
// @ts-ignore
  document.body.style.backgroundImage = `url('${ProxyState.image.img}')`
}

export class ImagesController {
  constructor() {
    ProxyState.on('image', _draw)
    ProxyState.on('name', _draw)
    this.getImage()
  }
  
  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error('[getImag function]', error);
      Pop.error(error)
    }
  }
  
  async changeImage() {
    try {
      await this.getImage()
    } catch (error) {
      console.error('[changeImg], error');
      Pop.error(error)
    }
  }
  
}


