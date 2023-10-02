let btnref = document.querySelectorAll(".button-option");
let popupref = document.querySelector(".popup");
let newgamebtn = document.getElementById("newgame");
let restartbtn = document.getElementById("restart");
let msgref = document.getElementById("message");

let winningpattern = [

    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],

];

let xturn = true;
let count = 0;


const disablebuttons = () => {
    btnref.forEach((element) => (element.disabled = true));

    popupref.classList.remove("hide");
}

const enablebuttons = () => {
    btnref.forEach((element) => {
        element.innerHTML = "";
        element.disabled = false;
    })
    popupref.classList.add("hide");
};

newgamebtn.addEventListener("click", () => {
    count = 0;
    enablebuttons();

});



restartbtn.addEventListener("click", () => {
    count = 0;
    enablebuttons();
});


const winfunction = (letter) => {
    disablebuttons();
    if (letter == "X") {
        msgref.innerHTML = "&#x1F389; <br>  'X' wins ";
    } else {
        msgref.innerHTML = "&#x1F389; <br>  'O' wins ";

    }

};


const drawfunction = () => {
    disablebuttons();
    msgref.innerHTML = "&#x1F60E; <br> it's draw";
}

const winchecker = () => {
    for (let i of winningpattern) {
        let [element1, element2, element3] = [
            btnref[i[0]].innerHTML,
            btnref[i[1]].innerHTML,
            btnref[i[2]].innerHTML,
        ];

        if ((element1 != "") && (element2 != "") && (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                winfunction(element1);
            }
        }




    };
};



btnref.forEach((element) => {
    element.addEventListener("click", () => {
        if (xturn) {
            xturn = false;
            element.innerHTML = "X";
            element.disabled = true;
        } else {
            xturn = true;
            element.innerHTML = "O";
            element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawfunction();

        }
        winchecker();


    });

    window.onloadstart = enablebuttons;

});






















































