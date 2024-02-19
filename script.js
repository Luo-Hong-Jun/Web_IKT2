const blockkok = document.querySelectorAll(".square");
let TurnSide = false;
const Turncalc = document.querySelector("#Turns");
const Button = document.querySelector(".TurnButton");
let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

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
            if (x.classList.contains("unit")) {
                document.querySelector("#selection").innerHTML = "selected";
                console.log("van");
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