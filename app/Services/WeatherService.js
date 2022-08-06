import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js"


class WeatherService {
    async getWeather(){
        let res = await sandboxApi.get('/weather')
        console.log(res.data);
        // ProxyState.weather = res.data.results.map(w => new Weather(w))
        ProxyState.weather = new Weather(res.data)
    }
    toggleWeather(){
        ProxyState.weather.toggle = !ProxyState.weather.toggle
        ProxyState.weather = ProxyState.weather
    }
}

export const weatherService = new WeatherService()