class Clock{
    constructor(elementId){
        this.clockElement = document.getElementById(elementId)
    }
    // get curent time
    getCurentTime(){
        const now = new Date()
        const h = now.getHours().toString().padStart(2, '0')
        const m = now.getMinutes().toString().padStart(2, '0')
        const s = now.getSeconds().toString().padStart(2, '0')
        return `${h}:${m}:${s}`
    }
    // update clock every second
    update(){
        this.clockElement.textContent = this.getCurentTime()
    }
    start(){
        // this.update()
        setInterval(() => this.update(), 1000)
    }
}

const myClock = new Clock('clock')
myClock.start()