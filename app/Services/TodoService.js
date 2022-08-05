import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodoService{
    async getTodos(){
        let res = await sandboxApi.get('/tyler/todos')
        console.log(res.data)
        ProxyState.todos = res.data.results.map(t => new Todo(t))
    }
}

export const todoService = new TodoService()