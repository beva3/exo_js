let word_box = document.getElementById('word-box');
let btn = document.getElementById('button');
const words = [
    "hello",
    "world",
    "javascript",
    "programming",
    "fun"
];
// let index = 2;
// console.log(word_box);
// word_box.innerHTML = words[index]

class G_m{
    constructor(){};
    generate(){
        let random_index = Math.floor(Math.random()*words.length);
        console.log(random_index);
        return words[random_index];
    }
    change(){
        word_box.style.transform = "rotate(360deg)"
        setTimeout(() => {
            word_box.style.transform = "rotate(0deg)";
        }, 500);
        word_box.innerHTML = this.generate();
    }
}

let game = new G_m();
btn.addEventListener("click",() =>{
    game.change();
})
