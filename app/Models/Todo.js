// import { ProxyState } from "../AppState.js"




export class Todo {

  constructor(data) {
    this.id = data.id
    this.user = data.user || ''
    this.completed = data.completed || false
    this.description = data.description || ''
  }

  get Template() {
    return `
      <li id="${this.id}" class="ms-4 d-flex justify-content-between align-items-center clear">
        <input class=" bg-0 clear" type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todosController.toggle('${this.id}')">
        <span class=" ms-2 border-bottom border-1 border-dark hand fs-3">${this.description}</span>
        <i class="mdi mdi-delete-forever text-danger selectable me-4" title="Delete Todo" onclick="app.todosController.deleteTodo('${this.id}')"></i>
      </li>
    `
  }

}
