import Jedlikmons from "./Unitdata.js";
let JedlikmonList = Jedlikmons;
let Turn = false;
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
const Jmon1 = document.querySelector("#Jmon1");
const Jmon2 = document.querySelector("#Jmon2");
const Jmon3 = document.querySelector("#Jmon3");
const JedlikmonImage1 = document.querySelector(".jedlikmon1");
const JedlikmonImage2 = document.querySelector(".jedlikmon2");
const EnemyPokemon1 = "Liptákkopter";
let optiondept = 0;
const Ourpokemon1 = "Nitsubishi";
const Ourpokemon2 = "Liptákkopter";
const Ourpokemon3 = "Nitsubishi";
const EnJedlikmon1 = "Liptákkopter";
const EnJedlikmon2 = "Nitsubishi";
const EnJedlikmon3 = "Liptákkopter";
let OurJedlikmon1;
let OurJedlikmon2;
let OurJedlikmon3;
    JedlikmonList.forEach(x => {
        if (x.name == Ourpokemon1) {
            OurJedlikmon1 = x;
        }
    });
    JedlikmonList.forEach(x => {
        if (x.name == Ourpokemon2) {
            OurJedlikmon2 = x;
        }
    });
    JedlikmonList.forEach(x => {
        if (x.name == Ourpokemon3) {
            OurJedlikmon3 = x;
        }
    });
let EnemyJedlikmon1;
let EnemyJedlikmon2;
let EnemyJedlikmon3;
    JedlikmonList.forEach(x => {
        if (x.name == EnJedlikmon1) {
            EnemyJedlikmon1 = x;
        }
    });
    JedlikmonList.forEach(x => {
        if (x.name == EnJedlikmon2) {
            EnemyJedlikmon2 = x;
        }
    });
    JedlikmonList.forEach(x => {
        if (x.name == EnJedlikmon3) {
            EnemyJedlikmon3 = x;
        }
    });
let HP1 =  OurJedlikmon1.health;
let HP2 =  OurJedlikmon2.health;
let HP3 =  OurJedlikmon3.health;
let EnemyHP1 =  EnemyJedlikmon1.health;
let EnemyHP2 =  EnemyJedlikmon2.health;
let EnemyHP3 =  EnemyJedlikmon3.health;

function Listing() {
    text1.innerHTML = OurJedlikmon1.name;
    pic1.src = OurJedlikmon1.SmolPicture;  
    text2.innerHTML = OurJedlikmon2.name;
    pic2.src = OurJedlikmon2.SmolPicture;  
    text3.innerHTML = OurJedlikmon3.name;
    pic3.src = OurJedlikmon3.SmolPicture;  
}

let EnemycurrentHp = EnemyJedlikmon1.health;
let EnemycurrentJedlikmondata = EnemyJedlikmon1;
let currentJedlikmondata = OurJedlikmon1;
let OurCurrentHp = OurJedlikmon1.health;
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
        BotMove(OurCurrentHp);
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


closeButton.addEventListener('click', function() {
    StatusWindow.style.visibility = "hidden";
});

ChangeJedlikMonWindow.addEventListener('click', function() {
    ChangeWindow.style.visibility = "hidden";
});

Jmon1.addEventListener('click', function() {
    currentJedlikmondata = OurJedlikmon1;
    OurCurrentHp = HP1;
    ChangeWindow.style.visibility = "hidden";
    document.querySelector("#name-1").innerHTML = currentJedlikmondata.name;
    document.querySelector("#type-1").innerHTML = currentJedlikmondata.type;
    ResetJedlikmonImage();
    ChangeHP(OurJedlikmon1);
    StatusWindowUpdate(HP1);
});

Jmon2.addEventListener('click', function() {
    currentJedlikmondata = OurJedlikmon2;
    OurCurrentHp = HP2;
    ChangeWindow.style.visibility = "hidden";
    document.querySelector("#name-1").innerHTML = currentJedlikmondata.name;
    document.querySelector("#type-1").innerHTML = currentJedlikmondata.type;
    ResetJedlikmonImage();
    ChangeHP(OurJedlikmon2);
    StatusWindowUpdate(HP2);
});

Jmon3.addEventListener('click', function() {
    currentJedlikmondata = OurJedlikmon3;
    OurCurrentHp = HP3;
    ChangeWindow.style.visibility = "hidden";
    document.querySelector("#name-1").innerHTML = currentJedlikmondata.name;
    document.querySelector("#type-1").innerHTML = currentJedlikmondata.type;
    ResetJedlikmonImage();
    ChangeHP(OurJedlikmon3);
    StatusWindowUpdate(HP3);
});


function ResetOptions() {
        box1.innerHTML = "<p>Attack<p>";
        box2.innerHTML = "<p>Defense<p>";
        box3.innerHTML = "<p>Skill<p>";
        box4.innerHTML = "<p>Change Jedlikmon<p>";
        optiondept--;
}

function StatusWindowUpdate(HP) {
    document.querySelector("#StatusHP").innerHTML = HP;
    document.querySelector("#StatusDmg").innerHTML = currentJedlikmondata.baseatk;
    document.querySelector("#StatusName").innerHTML = currentJedlikmondata.name;
    document.querySelector("#StatusDef").innerHTML = currentJedlikmondata.baseDef;
    document.querySelector("#StatusDmgboost").innerHTML = currentJedlikmondata.sk1Status;
    document.querySelector("#StatusDmgboostPer").innerHTML = currentJedlikmondata.sk1;
}

function ResetJedlikmonImage() {
    JedlikmonImage1.style.backgroundImage = `url(${currentJedlikmondata.picture})`;
}

function ChangeHP(Jedlikmon) {
    if (currentJedlikmondata.name == OurJedlikmon1.name) {
        OurCurrentHp = HP1;
    }
    else if(currentJedlikmondata.name == OurJedlikmon2.name){
        OurCurrentHp = HP2;
    }
    //else{
    //  OurCurrentHp = HP3;
    //}
    let change = Math.round((OurCurrentHp / Jedlikmon.health) * 100);
        HPleftstat.innerHTML = change;
        HpBar1.style.width = change + "%";
}

// Bot rész
function BotMove(HP) {
    OurCurrentHp -= EnemycurrentJedlikmondata.baseatk;
    if (currentJedlikmondata.name == OurJedlikmon1.name) {
        HP1 = HP;
    }
    else if(currentJedlikmondata.name == OurJedlikmon2.name){
        HP2 = HP;
    }
        //else{
    //  HP3 = OurCurrentHp;
    //}
    console.log(HP1);
    console.log(HP2);
    console.log(HP3);
    let change = Math.round((HP / currentJedlikmondata.health) * 100);
    HPleftstat.innerHTML = change;
    HpBar1.style.width = change + "%";
    StatusWindowUpdate(HP);
}

StatusWindowUpdate();
Listing();

// Audio.innerHTML = '<audio src="/music1.mp3" controls="controls" style="display: none;" autoplay></audio>';