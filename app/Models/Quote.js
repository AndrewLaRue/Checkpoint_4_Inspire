


export class Quote{

  constructor(data) {
    this.description = data.content
    this.author = data.author
  }


  get Template() {
    return `
            <h5>${this.description}</h5>
        <span class="d-flex justify-content-center on-hover mb-2"><small>${this.author}</small><i class="mdi mdi-skip-forward ms-3 selectable" title="Change Quote" onclick="app.quotesController.change()"></i></span>
    `
  }
}