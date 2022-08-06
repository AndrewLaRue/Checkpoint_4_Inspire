
export class Name{
  constructor(data) {
    this.name = data.name
  }


  get NameTemplate() {
    return `
  <h3>Andrew</h3>
    `
}


  get InputTemplate() {
    return `
        <input class="clear border-0 text-center" type="text" placeholder="Add Name" name="name" id="name" value="${this.name}">
              <button>add</button>
    `
  }
}