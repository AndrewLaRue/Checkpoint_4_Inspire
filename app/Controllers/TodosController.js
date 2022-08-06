import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";
import { Todo } from "../Models/Todo.js"
import { getTodoForm } from "../Components/TodoForm.js";



function _todoTotal() {
  let total = ProxyState.todos.length
  // @ts-ignore
  document.getElementById('total').innerText = total
}

function _todoCount() {
  let count = ProxyState.todos.filter(t => t.completed == true).length
  // console.log('count',count);
  // @ts-ignore
  document.getElementById('count').innerText = count
}



function _draw() {
  let template = ''
  let todos = ProxyState.todos

  todos.forEach(t => template += t.Template)

  // @ts-ignore
  document.getElementById('todo-list').innerHTML = template

  // @ts-ignore
  document.getElementById('form').innerHTML = getTodoForm()
}

export class TodosController {

  constructor() {
    ProxyState.on('todos', _draw)
    ProxyState.on('todos', _todoTotal)
    ProxyState.on('todos', _todoCount)
    this.getTodos()
  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error('[get todo controller]', error);
      Pop.error(error)
    }
  }

  async addTodo() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target

      let newTodo = {
        // @ts-ignore
        description: form.description.value
      }
      await todosService.addTodo(newTodo)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[addtodo]', error);
      Pop.error(error)
    }
    
  }

  async deleteTodo(id) {
    try {
      if (await Pop.confirm()) { 
        await todosService.deleteTodo(id)
      }
    } catch (error) {
      console.error('[delete todo]', error);
      Pop.error(error)
    }
  }

  async toggle(id) {
    try {
      await todosService.toggle(id)
    } catch (error) {
      console.error('[toggle]', error);
      Pop.error(error)
    }
  }

}
