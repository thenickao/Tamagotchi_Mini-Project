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

button.addEventListener("click", () => {
    const randomEgg = Math.floor(Math.random() * eggs.length);
    egg.src = eggs[randomEgg];
    button.style.display = "none";
    bckgrndImage.style.backgroundImage = `url(${bckgrndImage})`
})
