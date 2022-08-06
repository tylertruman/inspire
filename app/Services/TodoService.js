import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodoService{
    async getTodos(){
        let res = await sandboxApi.get('/jeremy/todos')
        console.log(res.data, 'getting todos')
        // note to self, not using res.data.results.map because we aren't digging that deep for the data.
        ProxyState.todos = res.data.map(t => new Todo(t))
        console.log(ProxyState.todos)
    }
}

export const todoService = new TodoService()