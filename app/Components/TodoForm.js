import { Todo } from "../Models/Todo.js";


export function getTodoForm(todo = new Todo({})) {

  return `
        <form class="input-todo" onsubmit="app.todosController.addTodo()">
        <span>
          <input class="clear ms-5 me-4 border-0 border-bottom border-2 border-dark hand fs-2" type="text" placeholder="Add Todo" id="description" name="description"  value="${todo.description}">
          <button type="submit" class="selectable clear border-0">
            <i class="mdi mdi-pen selectable" title="Add Todo"></i>
          </button>
        </span>
      </form>
  `
}