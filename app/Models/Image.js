


export class Image {

  constructor(data) {
    this.img = data.largeImgUrl
    this.author = data.author
    this.query = data.query
    this.tags = data.tags
  }

  // get Template() {
  //   return `
    
  //   <span class="fs-6 on-hover">${this.query}</span>
  //   <span class="fs-6 on-hover">${this.tags}</span>
  //   <span class="fs-6 on-hover">${this.author}</span>
  //   `
  // }

}


