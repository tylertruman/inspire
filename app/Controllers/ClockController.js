function _drawClock(){
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes()
    document.getElementById('clock').innerText = time
}

export class ClockController{
    constructor(){
        _drawClock()
        setInterval(_drawClock, 1000)

    }
}