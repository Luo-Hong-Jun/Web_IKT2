const blockkok = document.querySelectorAll(".square");
let TurnSide = false;
const Turncalc = document.querySelector("#Turns");
const Button = document.querySelector(".TurnButton");

Button.addEventListener("click", Turnvege);

function Turnvege() {
    if (TurnSide == false) {
        TurnSide = true;
        Turncalc.innerHTML = Number(Turncalc.innerHTML) + 1;
    }
    else {
        TurnSide = false;
        Turncalc.innerHTML = Number(Turncalc.innerHTML) + 1;
    }
}

blockkok.forEach(x => {
    x.addEventListener("mouseup", () => {
        if (TurnSide == false) {
            if (x.classList.contains("blue")) {
                console.log("Sajat mezod!");
            }
            else {
            x.classList.remove("red");
            x.classList.add("blue");
            console.log(`${x.id} kek Clicckelve`);
            }
        }
        else{
            if (x.classList.contains("red")) {
                console.log("Sajat mezod!");
            }
            else {
            x.classList.remove("blue");
            x.classList.add("red");
            console.log(`${x.id} peros Clicckelve`);
            }
        }
    });
});