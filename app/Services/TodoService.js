import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodoService{
    async getTodos(){
        let res = await sandboxApi.get('/tyler/todos')
        console.log(res.data, 'getting todos')
        // note to self, not using res.data.results.map because we aren't digging that deep for the data.
        ProxyState.todos = res.data.map(t => new Todo(t))
        console.log(ProxyState.todos)
    }

    async toggleTodo(todoId){
        let todo = ProxyState.todos.find(t => t.id == todoId)
        if(!todo){
            throw new Error('Bad Todo id')
        }
        todo.completed = !todo.completed
        let todoIndex = ProxyState.todos.indexOf(todo)
        let res = await sandboxApi.put(`/tyler/todos/${todoId}`, todo)
        let updatedTodo = new Todo(res.data)
        ProxyState.todos.splice(todoIndex, 1, updatedTodo)
        ProxyState.todos = ProxyState.todos
    }

    async deleteTodo(id){
        await sandboxApi.delete(`/tyler/todos/${id}`)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }

    async addTodo(){
        let res = await sandboxApi.post('/tyler/todos')
        let newTodo = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todos, newTodo]
        console.log(ProxyState.todos, 'ADDING TODO')
    }
}

export const todoService = new TodoService()