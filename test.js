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
let DefActivation = false;
let optiondept = 0;
let DMGEffect1 = 0;
let DMGEffect2 = 0;
let DMGEffect3 = 0;
let DMGENEffect = 0;
let EnemyDebuff = 0;
const Ourpokemon1 = "Nitsubishi";
const Ourpokemon2 = "Liptákkopter";
const Ourpokemon3 = "Somesz";
const EnJedlikmon1 = "Liptákkopter";
const EnJedlikmon2 = "Nitsubishi";
const EnJedlikmon3 = "Somesz";
let LivingList = [`Nitsubishi`,`Liptákkopter`,`Somesz`];
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
            if (Buffcheck(currentJedlikmondata.name) > 0) {
                if (Number(currentJedlikmondata.baseatk)+Number(currentJedlikmondata.baseatk*currentJedlikmondata.sk1) - EnemycurrentJedlikmondata.baseDef > 0){
                    EnemycurrentHp -= Number(currentJedlikmondata.baseatk)+Number(currentJedlikmondata.baseatk*currentJedlikmondata.sk1) - EnemycurrentJedlikmondata.baseDef;
                }
            }
            else if (currentJedlikmondata.baseatk - EnemycurrentJedlikmondata.baseDef > 0) {
                EnemycurrentHp -= (currentJedlikmondata.baseatk - EnemycurrentJedlikmondata.baseDef);
            }
            let change = Math.round((EnemycurrentHp / EnemycurrentJedlikmondata.health) * 100);
            if (EnemycurrentHp <= 0) {
                EnemycurrentHp = 0;
                HPrightstat.innerHTML = 0;
                HpBar2.style.width = 0 + "%";
                if (EnemycurrentJedlikmondata.name != EnemyJedlikmon3.name) {
                    EnemyDies();
                }
                else{
                    alert("NYertél yey");
                }
            }
            else{
                HPrightstat.innerHTML = change;
                HpBar2.style.width = change + "%";
            }
        }
        else {
            ApplyBuff(currentJedlikmondata.name);
            ResetOptions();
            console.log("Haaappened");
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
        DefActivation = true;
    }
    else {
        EnemyDebuff += 3;
        ResetOptions();
    }
    BotMove(OurCurrentHp);
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
        if (Buffcheck(currentJedlikmondata.name) > 0) {
            if (Number(currentJedlikmondata.baseatk * currentJedlikmondata.sk3)+Number((currentJedlikmondata.baseatk * currentJedlikmondata.sk3)*currentJedlikmondata.sk1) - EnemycurrentJedlikmondata.baseDef > 0){
                EnemycurrentHp -= Number(currentJedlikmondata.baseatk * currentJedlikmondata.sk3)+Number((currentJedlikmondata.baseatk * currentJedlikmondata.sk3)*currentJedlikmondata.sk1) - EnemycurrentJedlikmondata.baseDef;
            }
        }
        else if (currentJedlikmondata.baseatk * currentJedlikmondata.sk3 - EnemycurrentJedlikmondata.baseDef > 0) {
            EnemycurrentHp -= (currentJedlikmondata.baseatk * currentJedlikmondata.sk3) - EnemycurrentJedlikmondata.baseDef;
        }
        let change = Math.round((EnemycurrentHp / EnemycurrentJedlikmondata.health) * 100);
        if (EnemycurrentHp <= 0) {
            EnemycurrentHp = 0;
            HPrightstat.innerHTML = 0;
            HpBar2.style.width = 0 + "%";
            if (EnemycurrentJedlikmondata.name != EnemyJedlikmon3.name) {
                EnemyDies();
            }
            else{
                alert("NYertél yey");
            }
        }
        else{
            HPrightstat.innerHTML = change;
            HpBar2.style.width = change + "%";
            BotMove(OurCurrentHp);
        }
        ResetOptions();
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

function Jmon1Event() {
    currentJedlikmondata = OurJedlikmon1;
    OurCurrentHp = HP1;
    ChangeWindow.style.visibility = "hidden";
    NameTypeReset();
    ResetJedlikmonImage();
    ChangeHP(OurJedlikmon1);
    StatusWindowUpdate(HP1);
    BotMove(OurCurrentHp);
}

function Jmon2Event() {
    currentJedlikmondata = OurJedlikmon2;
    OurCurrentHp = HP2;
    ChangeWindow.style.visibility = "hidden";
    NameTypeReset();
    ResetJedlikmonImage();
    ChangeHP(OurJedlikmon2);
    StatusWindowUpdate(HP2);
    BotMove(OurCurrentHp);
}

function Jmon3Event() {
    currentJedlikmondata = OurJedlikmon3;
    OurCurrentHp = HP3;
    ChangeWindow.style.visibility = "hidden";
    NameTypeReset();
    ResetJedlikmonImage();
    ChangeHP(OurJedlikmon3);
    StatusWindowUpdate(HP3);
    BotMove(OurCurrentHp);
}

Jmon1.addEventListener('click', Jmon1Event);

Jmon2.addEventListener('click', Jmon2Event);

Jmon3.addEventListener('click', Jmon3Event);

function NameTypeReset(){
    document.querySelector("#name-1").innerHTML = currentJedlikmondata.name;
    document.querySelector("#type-1").innerHTML = currentJedlikmondata.type;
}

function EnemyNameTypeReset(){
    document.querySelector("#name-2").innerHTML = EnemycurrentJedlikmondata.name;
    document.querySelector("#type-2").innerHTML = EnemycurrentJedlikmondata.type;
}

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
    //  TUrn system köll itt javíani
    document.querySelector("#StatusDmgboost").innerHTML = currentJedlikmondata.sk1Status;
    //
    document.querySelector("#StatusDmgboostPer").innerHTML = currentJedlikmondata.sk1;
}

function ResetJedlikmonImage() {
    JedlikmonImage1.style.backgroundImage = `url(${currentJedlikmondata.picture})`;
}

function ResetEnemyJedlikmonImage() {
    JedlikmonImage2.style.backgroundImage = `url(${EnemycurrentJedlikmondata.picture})`;
}

function ChangeHP(Jedlikmon) {
    if (currentJedlikmondata.name == OurJedlikmon1.name) {
        OurCurrentHp = HP1;
    }
    else if(currentJedlikmondata.name == OurJedlikmon2.name){
        OurCurrentHp = HP2;
    }
    else{
      OurCurrentHp = HP3;
    }
    let change = Math.round((OurCurrentHp / Jedlikmon.health) * 100);
        HPleftstat.innerHTML = change;
        HpBar1.style.width = change + "%";
}

function ChangeEnemy(Jedlikmon) {
    let change = Math.round((EnemycurrentHp / Jedlikmon.health) * 100);
        HPrightstat.innerHTML = change;
        HpBar2.style.width = change + "%";
}

function EnemyDies() {
    if (EnemycurrentJedlikmondata.name == EnemyJedlikmon1.name) {
        EnemycurrentJedlikmondata = EnemyJedlikmon2;
        EnemycurrentHp = EnemyJedlikmon2.health;
        ChangeEnemy(EnemyJedlikmon2);
        ResetEnemyJedlikmonImage();
        EnemyNameTypeReset();
    }
    else if(EnemycurrentJedlikmondata.name == EnemyJedlikmon2.name){
        console.log("Megtörtént");
        EnemycurrentJedlikmondata = EnemyJedlikmon3;
        EnemycurrentHp = EnemyJedlikmon3.health;
        ChangeEnemy(EnemyJedlikmon3);
        ResetEnemyJedlikmonImage();
        EnemyNameTypeReset();
    }
    else{
        console.log("you won bitch");
    }
}

function MyJedlikmonDies(JedlikmonOnField) {
    for (let i = 0; i < LivingList.length; i++) {
        if (LivingList[i] == JedlikmonOnField.name) {
            if (i - 1 > -1) {
                let namecheck = LivingList[i-1];
                Find(namecheck);
                LivingList.splice(i, 1);
                FindWillDieJedlikMon(JedlikmonOnField.name);
            }
            else if (i + 1 < LivingList.length) {
                let namecheck = LivingList[i+1];
                Find(namecheck);
                LivingList.splice(i, 1);
                FindWillDieJedlikMon(JedlikmonOnField.name);
            }
            else{
                let namecheck = LivingList[i];
                Find(namecheck);
                FindWillDieJedlikMon(JedlikmonOnField.name);
            }
        }
    }
}

function FindWillDieJedlikMon(name) {
    if (name == OurJedlikmon1.name) {
        Jmon1.removeEventListener('click', Jmon1Event);
        Jmon1.style.backgroundColor = "rgb(86, 85, 84)";
        text1.style.color = "white";
    }
    else if(name == OurJedlikmon2.name){
        Jmon2.removeEventListener('click', Jmon2Event);
        Jmon2.style.backgroundColor = "rgb(86, 85, 84)";
        text2.style.color = "white";
    }
    else{
        Jmon3.removeEventListener('click', Jmon3Event);
        Jmon3.style.backgroundColor = "rgb(86, 85, 84)";
        text3.style.color = "white";
    }
}

function Find(name) {
    if (name == OurJedlikmon1.name) {
        currentJedlikmondata = OurJedlikmon1;
        OurCurrentHp = OurJedlikmon1.health;
        ChangeHP(OurJedlikmon1);
        ResetJedlikmonImage();
        StatusWindowUpdate(OurCurrentHp);
        NameTypeReset();
    }
    else if(name == OurJedlikmon2.name){
        currentJedlikmondata = OurJedlikmon2;
        OurCurrentHp = OurJedlikmon2.health;
        ChangeHP(OurJedlikmon2);
        ResetJedlikmonImage();
        StatusWindowUpdate(OurCurrentHp);
        NameTypeReset();
    }
    else{
        currentJedlikmondata = OurJedlikmon3;
        OurCurrentHp = OurJedlikmon3.health;
        ChangeHP(OurJedlikmon3);
        ResetJedlikmonImage();
        StatusWindowUpdate(OurCurrentHp);
        NameTypeReset();
    }
}

function ApplyBuff(name) {
    if (name == OurJedlikmon1.name) {
        DMGEffect1 += 3;
    }
    else if(name == OurJedlikmon2.name){
        DMGEffect2 += 3;
    }
    else{
        DMGEffect3 += 3;
    }
}

function Buffcheck(name) {
    if (name == OurJedlikmon1.name) {
        return DMGEffect1;
    }
    else if(name == OurJedlikmon2.name){
        return DMGEffect2;
    }
    else{
        return DMGEffect3;
    }
}

function BuffDecay() {
    if (DMGEffect1 > 0) {
        DMGEffect1--;
    }
    if(DMGEffect2 > 0){
        DMGEffect2--;
    }
    if(DMGEffect3 > 0){
        DMGEffect3--;
    }
}
function EnemyDebuffDecay() {
    if (EnemyDebuff > 0) {
        EnemyDebuff--;
    }
}

// Bot rész
function BotMove(HP) {
    if (DefActivation == true && EnemyDebuff > 0) {
        if (EnemycurrentJedlikmondata.baseatk - Number(EnemycurrentJedlikmondata.baseatk * currentJedlikmondata.sk2) - currentJedlikmondata.baseDef - currentJedlikmondata.DefStat > 0) {
            OurCurrentHp -= EnemycurrentJedlikmondata.baseatk - Number(EnemycurrentJedlikmondata.baseatk * currentJedlikmondata.sk2) - currentJedlikmondata.baseDef - currentJedlikmondata.DefStat;
        }
        else{
            console.log("működik1");
        }
    }
    else if (DefActivation == true) {
        if (EnemycurrentJedlikmondata.baseatk - (Number(currentJedlikmondata.baseDef) + Number(currentJedlikmondata.DefStat)) > 0) {
            OurCurrentHp -= (EnemycurrentJedlikmondata.baseatk - Number((currentJedlikmondata.baseDef) + Number(currentJedlikmondata.DefStat)));
            DefActivation = false;
        }
        else{
            console.log("működik2");
        }
    }
    else if(EnemyDebuff > 0){
        if (EnemycurrentJedlikmondata.baseatk - Number(EnemycurrentJedlikmondata.baseatk * currentJedlikmondata.sk2) - currentJedlikmondata.baseDef > 0) {
            OurCurrentHp -= EnemycurrentJedlikmondata.baseatk - Number(EnemycurrentJedlikmondata.baseatk * currentJedlikmondata.sk2) - currentJedlikmondata.baseDef;
        }
    }
    else
    {
        if (EnemycurrentJedlikmondata.baseatk - currentJedlikmondata.baseDef > 0) {
            OurCurrentHp -= (EnemycurrentJedlikmondata.baseatk - currentJedlikmondata.baseDef);
        }
    }
    HP = OurCurrentHp;
    if (currentJedlikmondata.name == OurJedlikmon1.name) {
        HP1 = HP;
    }
    else if(currentJedlikmondata.name == OurJedlikmon2.name){
        HP2 = HP;
    }
    else{
      HP3 = OurCurrentHp;
    }
    BuffDecay();
    EnemyDebuffDecay();
    StatusWindowUpdate(HP);
    let change = Math.round((HP / currentJedlikmondata.health) * 100);
    if (OurCurrentHp <= 0) {
        OurCurrentHp = 0;
        HPleftstat.innerHTML = 0;
        HpBar1.style.width = 0 + "%";
        if (LivingList.length > 1) {
            MyJedlikmonDies(currentJedlikmondata);  
        }
        else{
            alert("Vesztettél Bitch");
        }
        
    }
    else{
        HPleftstat.innerHTML = change;
        HpBar1.style.width = change + "%";
    }
}

StatusWindowUpdate();
Listing();

//Audio.innerHTML = '<audio src="/music1.mp3" controls="controls" style="display: none;" autoplay></audio>';