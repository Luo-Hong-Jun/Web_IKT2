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
const ChangeWindow = document.querySelector("#ChangeWindow");
const closeButton = document.querySelector(".WindowButtonClose");
const TextBox = document.querySelector("#Stat_desc");
const Audio = document.querySelector("#audio");
const ChangeJedlikMonWindow = document.querySelector("#CloseButton");
const text1 = document.querySelector("#JmonText1");
const text2 = document.querySelector("#JmonText2");
const text3 = document.querySelector("#JmonText3");
const pic1 = document.querySelector("#pic1");
const pic2 = document.querySelector("#pic2");
const pic3 = document.querySelector("#pic3");
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

function Listing() {
    text1.innerHTML = currentJedlikmondata.name;
    pic1.src = currentJedlikmondata.SmolPicture;  
    // unifinished
}

// Actual javascript starts here
statusBar.addEventListener('click', function() {
    StatusWindow.style.visibility = "visible";
});

box1.addEventListener("click", function() {
    // Attack func
    if (optiondept == 0) {
        EnemycurrentHp -= currentJedlikmondata.baseatk;
        let change = Math.round((EnemycurrentHp / EnemycurrentJedlikmondata.health) * 100);
        if (EnemycurrentHp <= 0) {
            EnemycurrentHp = 0;
            HPrightstat.innerHTML = 0;
            HpBar2.style.width = 0 + "%";
        }
        else{
            HPrightstat.innerHTML = change;
            HpBar2.style.width = change + "%";
        }
    }
    else {
        console.log("mar skillt nyomtal meg");
    }
});

box1.addEventListener('mouseover', function(){
    if (optiondept == 0) {
        TextBox.innerHTML = currentJedlikmondata.baseatkDesc;
    }
    else {
        TextBox.innerHTML = currentJedlikmondata.skill1Desc;
    }
});

box1.addEventListener('mouseout', function(){
    TextBox.innerHTML = "Mit választasz?";
});

box2.addEventListener("click", function() {
    // Def func
    if (optiondept == 0) {
    }
    else {
        console.log("mar skillt nyomtal meg");
    }
});

box2.addEventListener('mouseover', function(){
    if (optiondept == 0) {
        TextBox.innerHTML = currentJedlikmondata.DefDesc;
    }
    else {
        TextBox.innerHTML = currentJedlikmondata.skill2Desc;
    }
});

box2.addEventListener('mouseout', function(){
    TextBox.innerHTML = "Mit választasz?";
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
        EnemycurrentHp -= currentJedlikmondata.baseatk * currentJedlikmondata.sk3;
        let change = Math.round((EnemycurrentHp / EnemycurrentJedlikmondata.health) * 100);
        if (EnemycurrentHp <= 0) {
            EnemycurrentHp = 0;
            HPrightstat.innerHTML = 0;
            HpBar2.style.width = 0 + "%";
        }
        else{
            HPrightstat.innerHTML = change;
            HpBar2.style.width = change + "%";
        }
    }
});

box3.addEventListener('mouseover', function(){
    if (optiondept == 0) {
        TextBox.innerHTML = "Tap the button to see the skills options";
    }
    else {
        TextBox.innerHTML = currentJedlikmondata.skill3Desc;
    }
});

box3.addEventListener('mouseout', function(){
    TextBox.innerHTML = "Mit választasz?";
});

box4.addEventListener("click", function() {
    if (optiondept==0) {
        //spec ooption
        ChangeWindow.style.visibility = "visible";
    }
    else {
        ResetOptions();
    }
});

box4.addEventListener('mouseover', function(){
    if (optiondept == 0) {
        TextBox.innerHTML = "Tap the button to see the options";
    }
    else {
        TextBox.innerHTML = "Go back to previous options";
    }
});

box4.addEventListener('mouseout', function(){
    TextBox.innerHTML = "Mit választasz?";
});

function ResetOptions() {
        box1.innerHTML = "<p>Attack<p>";
        box2.innerHTML = "<p>Defense<p>";
        box3.innerHTML = "<p>Skill<p>";
        box4.innerHTML = "<p>Change Jedlikmon<p>";
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
});

ChangeJedlikMonWindow.addEventListener('click', function() {
    ChangeWindow.style.visibility = "hidden";
});

StatusWindowUpdate();
Listing();

Audio.innerHTML = '<audio src="/music1.mp3" controls="controls" style="display: none;" autoplay></audio>';