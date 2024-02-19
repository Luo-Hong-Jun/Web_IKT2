import Jedlikmons from "./Unitdata.js";
let JedlikmonList = Jedlikmons;
const box1 = document.querySelector("#atk");
const box2 = document.querySelector("#def");
const box3 = document.querySelector("#skill");
const box4 = document.querySelector("#special");
const HPleftstat = document.querySelector("#HPLeft").innerHTML;
const HPrightstat = document.querySelector("#HPRight").innerHTML;
const HpBar = document.querySelector("#currentBar"); 
const HpBar2 = document.querySelector("#currentBar2"); 
let optiondept = 0;
let EnemyPokemon = "Liptákkopter";
let Ourpokemon = "Nitsubishi";
let currentJedlikmondata;
    JedlikmonList.forEach(x => {
        if (x.name == Ourpokemon) {
            currentJedlikmondata = x;
        }
    });
let EnemycurrentJedlikmondata;
    JedlikmonList.forEach(x => {
        if (x.name == EnemyPokemon) {
            EnemycurrentJedlikmondata = x;
        }
    });
let EnemycurrentHp = EnemycurrentJedlikmondata.health;

box1.addEventListener("click", function() {
    // Attack func
    if (optiondept == 0) {
        EnemycurrentHp -= currentJedlikmondata.baseatk;
        let change = Math.round((EnemycurrentHp / EnemycurrentJedlikmondata.health) * 100)
        HPrightstat.innerHTML = change;
        HpBar2.style.width = change;
    }
    else {
        console.log("mar skillt nyomtal meg");
    }
});

box2.addEventListener("click", function() {
    // Def func
    if (optiondept == 0) {
        
    }
    else {
        console.log("mar skillt nyomtal meg");
    }
});

box3.addEventListener("click", function() {
    if (optiondept == 0) {
        box1.innerHTML = `<p>${currentJedlikmondata.skill1}<p>`;
        box2.innerHTML = `<p>${currentJedlikmondata.skill2}<p>`;
        box3.innerHTML = `<p>${currentJedlikmondata.skill3}<p>`;
        box4.innerHTML = `<p>Vissza<p>`; 
        optiondept++;
    }
    else {
        console.log("mar skillt nyomtal meg");
    }
})

box4.addEventListener("click", function() {
    if (optiondept==0) {
        //spec ooption
    }
    else {
        ResetOptions();
    }
});

function ResetOptions() {
        box1.innerHTML = "<p>Attack<p>";
        box2.innerHTML = "<p>Defense<p>";
        box3.innerHTML = "<p>Skill<p>";
        box4.innerHTML = "<p>Special Option<p>";
        optiondept--;
}

function JedlikMonChange() {
    JedlikmonList.forEach(x => {
        if (x.name == Ourpokemon) {
            currentJedlikmondata = x;
        }
    });
}