const Tamagotchi = function (name,hunger,sleepiness,boredom,happiness) {
    this.name = name;
    this.hunger = hunger;
    this.sleepiness = sleepiness;
    this.boredom = boredom;
    this.happiness = happiness;
}

let myTamagotchi = new Tamagotchi("",5,5,5,5)

const button1 = document.getElementById("egg-picker-clicker")
const generator = document.getElementById("generatorText")
const eggStatusBar = document.getElementById("eggBar")
const egg = document.getElementById("myEggs")
const eggs = ["media/Eggs/blue_egg.png","media/Eggs/green_egg.png","media/Eggs/red_egg.png"]
const blueCreature = document.getElementById("blueCreature")
const greenCreature = document.getElementById("greenCreature")
const redCreature = document.getElementById("redCreature")
const welcome = document.getElementById("welcomeText")
const incubate = document.getElementById("incubationText")
const incubateBar = document.getElementById("incubateStatusBar")
const incubateButton1 = document.getElementById("incubateButton")
const hatched = document.getElementById("hatchedText")

button1.addEventListener("click", () => {
    welcome.style.display = "none";
    incubate.style.display = "block";
    generator.style.display = "none";
    button1.style.display = "none";
    eggStatusBar.style.display = "block"
    const randomEgg = Math.floor(Math.random() * eggs.length);
    egg.src = eggs[randomEgg];
    let name = prompt("What would you like to name your Tamagotchi?");
    document.getElementById("nameOutput").innerHTML = "Hi! My name is " + name + " and I can't wait to meet you!";
    incubateButton1.style.display = "block";
    incubateBar.style.display = "block";

})

let eggBarWidth = -10
let barWidth1 = 100
let barWidth2 = 100
let barWidth3 = 100

let eggBar = document.getElementById("eggBar")
let bar1 = document.getElementById("statusBar1")
let bar2 = document.getElementById("statusBar2")
let bar3 = document.getElementById("statusBar3")

let eggBarInterval = setInterval(() => {
    eggBarWidth += 1;
    eggBar.style.width = eggBarWidth + "px";
    if(eggBarWidth >= 100) {
        clearInterval(eggBarInterval)
        if (egg.src.endsWith("blue_egg.png")) {
            egg.style.display = "none";
            blueCreature.style.display = "block";
            alert("Your egg has hatched!");
            eggStatusBar.style.display = "none";
            document.getElementById("hatchedText").innerHTML = name_+ " is finally here! Now don't let me die.";
            hatched.style.display = "block";
            incubateButton1.style.display = "none";
        } else if (egg.src.endsWith("green_egg.png")) {
            egg.style.display = "none";
            greenCreature.style.display = "block";
            alert("Your egg has hatched!");
            eggStatusBar.style.display = "none";
            hatched.style.display = "block";
            incubateButton1.style.display = "none";

        } else if (egg.src.endsWith("red_egg.png")) {
            egg.style.display = "none";
            redCreature.style.display = "block";
            alert("Your egg has hatched!");
            eggStatusBar.style.display = "none";
            hatched.style.display = "block";
            incubateButton1.style.display = "none";

        }
    }
}, 250)

incubateButton1.addEventListener("click", () => {
    eggBarWidth += 5;
    eggBar.style.width = eggBarWidth + 5;
})

let bar1Interval = setInterval(() => {
    barWidth1 -= 5;
    bar1.style.width = barWidth1 + "px";
    if(barWidth1 <= 0) {
        clearInterval(bar1Interval)
    }
}, 3000)

let bar2Interval = setInterval(() => {
    barWidth2 -= 5;
    bar2.style.width = barWidth2 + "px";
    if(barWidth2 <= 0) {
        clearInterval(bar2Interval)
    }
}, 3000)

let bar3Interval = setInterval(() => {
    barWidth3 -= 5;
    bar3.style.width = barWidth3 + "px";
    if(barWidth3 <= 0) {
        clearInterval(bar3Interval)
    }
}, 3000)

let age = 0
const ageDisplay = document.getElementById("ageOutput")

function increaseAge() {
    age += 1;
    ageDisplay.innerHTML = "Age: " + age;
    setTimeout(increaseAge, 5000)
}

increaseAge()