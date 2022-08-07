function _drawClock(){
    let today = new Date();
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let ampm = "AM"
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(minutes < 1){
        today.getMinutes = "0" + "0"
    }
    if(hours > 12){
        hours -= 12;
        ampm = "PM";
    }
    document.getElementById('clock').innerText = hours + ':' + minutes + ' ' + ampm
}

export class ClockController{
    constructor(){
        _drawClock()
        setInterval(_drawClock, 1000)
    }
}