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

button.addEventListener("click", () => {
    const randomEgg = Math.floor(Math.random() * eggs.length);
    egg.src = eggs[randomEgg];
    button.style.display = "none";
    let position = 0
    let up = true
    setInterval(() => {
        if(up) {
            position += 20;
            if(position >= 40) {
                up = false
            }
        } else {
            position -= 20;
            if(position <= 0) {
                up = true
            }
        }
        egg.style.top = position + "px"
    }, 1000);
})
