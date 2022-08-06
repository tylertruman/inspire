import { generateId } from "../Utils/generateId.js"

export class Todo{
    constructor(data){
        this.id = data.id || generateId()
        this.completed = data.completed
        this.description = data.description
        this.completed = data.completed
    }

    get TodoTemplate(){
        return `
        <div class="mb-0 text-center">
        <h5 class="text-center">Todo List:</h5>
        <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todoController.toggleTodo('${this.id}')" >
          <span>${this.description}</span>
          <button class="btn text-danger selectable" onclick="app.todoController.deleteTodo('${this.id}')">
            <i class="p-0">X</i>
          </button>
        </div>
        `
    }
}