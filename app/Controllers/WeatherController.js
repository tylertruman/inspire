import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"

function _drawWeather(){
    let template = ''
    template += ProxyState.weather.WeatherTemplate
    document.getElementById('weather').innerHTML = template
}

export class WeatherController {
    constructor(){
        ProxyState.on('weather', _drawWeather)
        this.getWeather()
    }
    async getWeather(){
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error('[getWeather]', error)
            Pop.error(error)
        }
    }
    toggleWeather(){
        weatherService.toggleWeather()
        console.log('toggle weather yo')
    }
}