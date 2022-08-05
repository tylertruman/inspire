import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuote(){
    let template = ''
    template += ProxyState.quote.QuoteTemplate
    document.getElementById('quote').innerHTML = template
}

export class QuotesController{
    constructor(){
        ProxyState.on('quote', _drawQuote)
        this.getQuote()
    }
    async getQuote(){
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error('[getQuote]', error)
            Pop.error(error)
        }
    }
}