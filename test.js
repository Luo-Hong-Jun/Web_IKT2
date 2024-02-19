import Jedlikmons from "./Unitdata.js";
let JedlikmonList = Jedlikmons;
const box1 = document.querySelector("#atk");
const box2 = document.querySelector("#def");
const box3 = document.querySelector("#skill");
const box4 = document.querySelector("#special");
const statusBar = document.querySelector(".up-name");
const HPleftstat = document.querySelector("#HPLeft");
const HPrightstat = document.querySelector("#HPRight");
const HpBar1 = document.querySelector("#currentBar"); 
const HpBar2 = document.querySelector("#currentBar2"); 
const StatusWindow = document.querySelector("#StatusWindow");
const closeButton = document.querySelector(".WindowButtonClose");
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

statusBar.addEventListener('click', function() {
    StatusWindow.style.visibility = "visible";
});

box1.addEventListener("click", function() {
    // Attack func
    if (optiondept == 0) {
        EnemycurrentHp -= currentJedlikmondata.baseatk;
        let change = Math.round((EnemycurrentHp / EnemycurrentJedlikmondata.health) * 100);
        HPrightstat.innerHTML = change;
        HpBar2.style.width = change + "%";
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

function StatusWindowUpdate() {
    document.querySelector("#StatusHP").innerHTML = currentJedlikmondata.health;
    document.querySelector("#StatusDmg").innerHTML = currentJedlikmondata.baseatk;
    document.querySelector("#StatusName").innerHTML = currentJedlikmondata.name;
    document.querySelector("#StatusDef").innerHTML = currentJedlikmondata.baseDef;
    document.querySelector("#StatusDmgboost").innerHTML = currentJedlikmondata.sk1Status;
    document.querySelector("#StatusDmgboostPer").innerHTML = currentJedlikmondata.sk1;
}

closeButton.addEventListener('click', function() {
    StatusWindow.style.visibility = "hidden";
})
StatusWindowUpdate();