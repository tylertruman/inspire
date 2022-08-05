import { generateId } from "../Utils/generateId.js"

export class Todo{
    constructor(data){
        this.id = data.id || generateId()
        this.completed = data.completed
    }

    get TodoTemplate(){
        return `
        <h1>TodoTemplate is here!</h1>`
    }
}