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
const meetingMe = document.getElementById("meeting")

const happinessTx = document.getElementById("happinessText")
const fullnessTx = document.getElementById("fullnessText")
const boredomTx = document.getElementById("boredomText")

const happinessBar = document.getElementById("statusBar1")
const fullnessBar = document.getElementById("statusBar2")
const boredomBar = document.getElementById("statusBar3")

const happinessBtt = document.getElementById("singButton")
const fullnessBtt = document.getElementById("feedButton")
const boredomBtt = document.getElementById("playButton")


button1.addEventListener("click", () => {
    welcome.style.display = "none";
    incubate.style.display = "block";
    generator.style.display = "none";
    button1.style.display = "none";
    eggStatusBar.style.display = "block"
    meetingMe.style.display = "block";
    const randomEgg = Math.floor(Math.random() * eggs.length);
    egg.src = eggs[randomEgg];
    let name = prompt("What would you like to name your Tamagotchi?");
    document.getElementById("nameOutput").innerHTML = "Hi! My name is " + name + ".";
    incubateButton1.style.display = "block";
    incubateBar.style.display = "block";
})

let eggBarWidth = 0
let barWidth1 = 100
let barWidth2 = 100
let barWidth3 = 0

let eggBar = document.getElementById("eggBar")
let bar1 = document.getElementById("statusBar1")
let bar2 = document.getElementById("statusBar2")
let bar3 = document.getElementById("statusBar3")

let rotation = 0
incubateButton1.addEventListener("click", () => {
    eggBarWidth += 10;
    eggBar.style.width = eggBarWidth + 10;
    rotation += 45
    egg.style.transform = `rotate(${rotation}deg)`
})

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
            hatched.style.display = "block";
            incubateButton1.style.display = "none";
            incubate.style.display = "none"
            meetingMe.style.display = "none"
            let age = 0
            const ageDisplay = document.getElementById("ageOutput")
            function increaseAge() {
                age += 1;
                ageDisplay.innerHTML = "Age: " + age;
                setTimeout(increaseAge, 5000)
            }
            increaseAge()
            
            happinessTx.style.display = "block"
            happinessBar.style.display = "block"
            happinessBtt.style.display = "block"
            fullnessTx.style.display = "block"
            fullnessBar.style.display = "block"
            fullnessBtt.style.display = "block"
            boredomTx.style.display = "block"
            boredomBar.style.display = "block"
            boredomBtt.style.display = "block"
            
            happinessBtt.addEventListener("click", () => {
                barWidth1 += 10;
                barWidth1.style.width = barWidth1 + 10;
            })
            fullnessBtt.addEventListener("click", () => {
                barWidth2 += 10;
                barWidth2.style.width = barWidth2 + 10;
            })
            boredomBtt.addEventListener("click", () => {
                barWidth3 -= 10;
                barWidth3.style.width = barWidth3 - 10;
            })
        
        } else if (egg.src.endsWith("green_egg.png")) {
            egg.style.display = "none";
            greenCreature.style.display = "block";
            alert("Your egg has hatched!");
            eggStatusBar.style.display = "none";
            hatched.style.display = "block";
            incubateButton1.style.display = "none";
            incubate.style.display = "none"
            meetingMe.style.display = "none"

            let age = 0
            const ageDisplay = document.getElementById("ageOutput")
            function increaseAge() {
                age += 1;
                ageDisplay.innerHTML = "Age: " + age;
                setTimeout(increaseAge, 5000)
            }
            increaseAge()
            happinessTx.style.display = "block"
            happinessBar.style.display = "block"
            happinessBtt.style.display = "block"
            fullnessTx.style.display = "block"
            fullnessBar.style.display = "block"
            fullnessBtt.style.display = "block"
            boredomTx.style.display = "block"
            boredomBar.style.display = "block"
            boredomBtt.style.display = "block"

            happinessBtt.addEventListener("click", () => {
                barWidth1 += 10;
                barWidth1.style.width = barWidth1 + 10;
            })
            fullnessBtt.addEventListener("click", () => {
                barWidth2 += 10;
                barWidth2.style.width = barWidth2 + 10;
            })
            boredomBtt.addEventListener("click", () => {
                barWidth3 -= 10;
                barWidth3.style.width = barWidth3 - 10;
            })

        } else if (egg.src.endsWith("red_egg.png")) {
            egg.style.display = "none";
            redCreature.style.display = "block";
            alert("Your egg has hatched!");
            eggStatusBar.style.display = "none";
            hatched.style.display = "block";
            incubateButton1.style.display = "none";
            incubate.style.display = "none"
            meetingMe.style.display = "none"

            let age = 0
            const ageDisplay = document.getElementById("ageOutput")
            function increaseAge() {
                age += 1;
                ageDisplay.innerHTML = "Age: " + age;
                setTimeout(increaseAge, 1000)
            }
            increaseAge()
            happinessTx.style.display = "block"
            happinessBar.style.display = "block"
            happinessBtt.style.display = "block"
            fullnessTx.style.display = "block"
            fullnessBar.style.display = "block"
            fullnessBtt.style.display = "block"
            boredomTx.style.display = "block"
            boredomBar.style.display = "block"
            boredomBtt.style.display = "block"

            happinessBtt.addEventListener("click", () => {
                barWidth1 += 10;
                barWidth1.style.width = barWidth1 + 10;
            })
            fullnessBtt.addEventListener("click", () => {
                barWidth2 += 10;
                barWidth2.style.width = barWidth2 + 10;
            })
            boredomBtt.addEventListener("click", () => {
                barWidth3 -= 10;
                barWidth3.style.width = barWidth3 - 10;
            })

        }
    }
}, 250)

let bar1Interval = setInterval(() => {
    barWidth1 -= 1;
    bar1.style.width = barWidth1 + "px";
    if(barWidth1 <= 0) {
        clearInterval(bar1Interval)
    }
}, 250)

let bar2Interval = setInterval(() => {
    barWidth2 -= 1;
    bar2.style.width = barWidth2 + "px";
    if(barWidth2 <= 0) {
        clearInterval(bar2Interval)
    }
}, 250)

let bar3Interval = setInterval(() => {
    barWidth3 += 1;
    bar3.style.width = barWidth3 + "px";
    if(barWidth3 >= 100) {
        clearInterval(bar3Interval)
    }
}, 250)

let result = function () {
    if(age === 10 && barWidth1 >= 70 && barWidth2 >= 70 && barWidth3 <= 30) {
        alert("Congratulations! Your Tamagotchi reach full maturity!")
    } else if(age === 10 && barWidth1 < 70 && barWidth2 < 70 && barWidth3 > 30) {
        alert("Oh no! Your Tamagotchi failed to reach full maturity and has died because of your gross neglicence.")
    }
}