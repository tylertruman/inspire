export class Quote{
    constructor(data){
        this.quote = data.content 
        this.author = data.author
    }

    get QuoteTemplate(){
        return `
        <div class="text-center no-select">
      <p><small>${this.quote}</small></p>
      <h5 class="on-hover">${this.author}</h5>
    </div>`
    }
}