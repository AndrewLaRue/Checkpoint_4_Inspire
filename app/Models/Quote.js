


export class Quote{

  constructor(data) {
    this.description = data.content
    this.author = data.author
  }


  get Template() {
    return `
            <h5 class="mb-o pb-0">${this.description}</h5>
        <span class="d-flex justify-content-center align-items-center pt-0 mt-0 mb-2 on-hover"><small>${this.author}</small><i class="mdi mdi-skip-forward ms-3 selectable" title="Change Quote" onclick="app.quotesController.change()"></i></span>
    `
  }
}