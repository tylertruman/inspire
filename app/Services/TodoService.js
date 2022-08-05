import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodoService{
    async getTodos(){
        let res = await sandboxApi.get('/jeremy/todos')
        console.log(res.data, 'getting todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
        console.log(ProxyState.todos)
    }
}

export const todoService = new TodoService()