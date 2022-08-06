import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js"
import { Todo } from "../Models/Todo.js"



class TodosService {
  async toggle(id) {
    let todo = ProxyState.todos.find(t => t.id == id)
    
    if(!todo) {
      throw new Error('Id not Found')
    }
    todo.completed = !todo.completed

    let index = ProxyState.todos.indexOf(todo)
    let res = await sandboxApi.put(`andrew/todos/${id}`, todo)

    let updated = new Todo(res.data)

    ProxyState.todos.splice(index, 1, updated)

    ProxyState.todos = ProxyState.todos
  }

  async deleteTodo(id) {
    let url = `/andrew/todos/${id}`
    await sandboxApi.delete(url)
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
  }


  async addTodo(formData) {
    let res = await sandboxApi.post('andrew/todos', formData)
    let todo = new Todo(res.data)
    ProxyState.todos = [...ProxyState.todos, todo]
  }




  async getTodos() {
    let res = await sandboxApi.get('andrew/todos')
    // console.log('[get todos res]', res);
    ProxyState.todos = res.data.map(t => new Todo(t))
    // console.log(ProxyState.todos);
  }


 }

export const todosService = new TodosService()
