let arr = document.querySelectorAll(".box");
let msg = document.querySelector("p");
let r = document.querySelector(".reset");


let turnO = true;

const winnerPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count = 0;
arr.forEach((val) => {
    val.addEventListener("click", () => {
        count++;
        if (turnO) {
            val.innerText = "O";
            val.style.color = "rgb(0, 0, 0)";
            turnO = false;
        } else {
            val.innerText = "X";
            val.style.color = "rgb(193, 18, 31)";
            turnO = true;
        }
        val.disabled = true;
        checkWinner();     
    });
});

const checkWinner = () => {
    for (let i of winnerPatterns) {
        let pos1 = arr[i[0]].innerText;
        let pos2 = arr[i[1]].innerText;
        let pos3 = arr[i[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner (pos1);
                return;
            }
        }
    }
        if (count === 9) {
            msg.innerText = "It's a Draw!";
            msg.classList.remove("hide");
        }
};

const disabledBtn = () => {
    for (let j of arr) {
        j.disabled = true;
    }
}

const showWinner = (wn) => {
    msg.innerText = `Congratulation! Winner is ${wn}`;
    msg.classList.remove("hide");
    disabledBtn(); 
};


const enableBtn = () => {
    for (let k of arr) {
        k.disabled = false;
        k.innerText = "";
    }
};

const resetGame = () =>  {
    turnO = true;
    enableBtn();
    count = 0;
    msg.classList.add("hide");
};

r.addEventListener("click",resetGame);  // here passing the function itself (not calling it). 