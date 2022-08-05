import { generateId } from "../Utils/generateId.js"

export class Todo{
    constructor(data){
        this.id = data.id || generateId()
        this.completed = data.completed
        this.description = data.description
    }

    get TodoTemplate(){
        return `
        <h1>${this.description}TodoTemplate is here!</h1>`
    }
}