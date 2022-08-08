export class Weather {
    constructor(data){
        this.tempF = data.main.temp
        this.tempC = data.main.temp 
        this.name = data.name
        this.tempF = 1.8*(data.main.temp-273) + 32
        this.tempC = (data.main.temp-273.15)
        this.toggle = true
    }

    get WeatherTemplate(){
        return ` 
        <div class="form-check form-switch ">
        <input id="weatherInput" ${this.toggle ? 'checked' : ''} class="form-check-input" type="checkbox" role="switch" onchange="app.weatherController.toggleWeather()">
        <label class="form-check-label" for="flexSwitchCheckDefault">${this.toggle ? 'F:' : 'C:'}</label>
        ${this.toggle ? this.tempF.toFixed() : this.tempC.toFixed()}
        <p>${this.name}</p>
        </div>`
    } 
}

