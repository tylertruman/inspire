import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";
import { Pop } from "../Utils/Pop.js";

// might not work idk yet, remember TODO
function _drawTodos(){
    let template = ''
    ProxyState.todos.forEach(t => template += t.TodoTemplate)
    document.getElementById('todos').innerHTML = template
}

export class TodoController{
    constructor(){
        ProxyState.on('todos', _drawTodos)
        this.getTodos()
    }
    async getTodos(){
        try {
            await todoService.getTodos()
        } catch (error) {
            console.error('[getTodos]', error)
            Pop.error(error)
        }
    }
}