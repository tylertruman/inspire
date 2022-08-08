import { ProxyState } from "../AppState.js";
import { sandboxApi } from "../Services/AxiosService.js";
import { todoService } from "../Services/TodoService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTodos(){
    let template = ''
    ProxyState.todos.forEach(t => template += t.TodoTemplate)
    document.getElementById('todos').innerHTML = template
    let completes = 0
    let totalTodos = ProxyState.todos.length
    ProxyState.todos.filter(t => completes += t.completed).length
    document.getElementById('completes').innerText = completes + ' / ' + totalTodos
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

    async toggleTodo(todoId){
        try {
            await todoService.toggleTodo(todoId)
        } catch (error) {
            console.error('[toggleTodo]', error)
            Pop.error(error)
        }
    }

    async addTodo(){
        try {
            window.event.preventDefault()
            let form = window.event.target
            let todoData = {
                description: form.description.value
            }
            await todoService.addTodo(todoData)
            form.reset()
        } catch (error) {
            console.error('[AddTodo]', error)
            Pop.error(error)
        }
    }

    async deleteTodo(id){
        try {
            const yes = await Pop.confirm('Delete Todo')
            if(!yes){ return }
            await todoService.deleteTodo(id)
        } catch (error) {
            console.error('[deleteTodo]', error)
            Pop.error(error)
        }
    }

}