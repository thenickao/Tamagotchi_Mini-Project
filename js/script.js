const Tamagotchi = function (name,hunger,sleepiness,boredom,happiness) {
    this.name = name;
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.happiness = happiness;
}

let myTamagotchi = new Tamagotchi("",5,5,5,5)

const button = document.getElementById("egg-picker-clicker")
const egg = document.getElementById("myEggs")
const eggs = ["media/Eggs/blue_egg.png","media/Eggs/green_egg.png","media/Eggs/red_egg.png"]
const bckgrndImage = document.getElementsByClassName(".bg-image")
const generator = document.getElementById("generatorText")
const welcome = document.getElementById("welcomeText")
const incubate = document.getElementById("incubationText")

button.addEventListener("click", () => {
    welcome.style.display = "none"
    incubate.style.display = "block"
    generator.style.display = "none";
    button.style.display = "none";
    const randomEgg = Math.floor(Math.random() * eggs.length);
    egg.src = eggs[randomEgg];
    let name = prompt("What would you like to name your Tamagotchi?");
    document.getElementById("nameOutput").innerHTML = "Hi! My name is " + name + " and I can't wait to meet you!";
})

let barWidth1 = 100
let barWidth2 = 100
let barWidth3 = 100


let bar1 = document.getElementById("statusBar1")
let bar2 = document.getElementById("statusBar2")
let bar3 = document.getElementById("statusBar3")

setInterval(() => {
    barWidth1 -= 5;
    bar1.style.width = barWidth1 + "px";
    if(barWidth1 <= 0) {
        clearInterval()
    }
}, 3000)

setInterval(() => {
    barWidth2 -= 5;
    bar2.style.width = barWidth2 + "px";
    if(barWidth2 <= 0) {
        clearInterval()
    }
}, 3000)

setInterval(() => {
    barWidth3 -= 5;
    bar3.style.width = barWidth3 + "px";
    if(barWidth3 <= 0) {
        clearInterval()
    }
}, 3000)