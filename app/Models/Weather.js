

export class Weather {
    constructor(data){
        this.tempF = data.main.temp
        this.tempC = data.main.temp 
        this.name = data.name
        this.tempF = 1.8*(data.main.temp-273) + 32
        this.tempC = (data.main.temp-273.15)
    }

    get WeatherTemplate(){
        return `
        <p>F: ${this.tempF.toFixed()}</p>
        <p>C: ${this.tempC.toFixed()}</p> 
        <p>City: ${this.name}</p> `
    }
}
