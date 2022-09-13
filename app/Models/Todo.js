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
        <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todoController.toggleTodo('${this.id}')" >
          <span class="text-light">${this.description}</span>
          <button class="btn text-danger selectable" onclick="app.todoController.deleteTodo('${this.id}')">
            <i class="p-0">X</i>
          </button>
          <br>
        `
    }
}