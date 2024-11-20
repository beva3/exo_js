// select elements

// Fonction pour générer une couleur aléatoire
class generatColor{
    constructor(){
        this.colorDisplay = document.getElementById("colorDisplay")
        this.generateBtn = document.getElementById("generateBtn")
    }
    generate(){
        const random_color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        return random_color
    }
    apply(color){
        document.body.style.backgroundColor = color
        this.colorDisplay.textContent = color
        this.colorDisplay.style.backgroundColor = color
    }
    initialize(){
        this.generateBtn.addEventListener('click', () => this.apply(this.generate()))
    }
}

const colorApp = new generatColor()
colorApp.initialize()