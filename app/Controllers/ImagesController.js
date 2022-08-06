import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";
import { Image } from "../Models/Image.js"



function _draw() {
// @ts-ignore
  // document.getElementById('img-info').innerHTML = ProxyState.image.Template
  document.body.style.backgroundImage = `url('${ProxyState.image.img}')`
}

export class ImagesController{
  constructor() {
    ProxyState.on('image', _draw)
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

  async change() {
    await this.getImage()
  }
  
}


