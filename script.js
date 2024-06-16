let val = "o";
let buttons = document.querySelectorAll(".box");
let cnt = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        checkWinner();
        if (button.innerText === "x" || button.innerText === "o") {
            alert("Already filled");
        } else {
            button.innerText = val;
            val = val === "o" ? "x" : "o";
            cnt++;

            
            
            if (cnt === 9) {
                alert("It's a draw!");
                resetGame();
            }
        }
    });
});

function resetGame() {
    buttons.forEach(button => {
        button.innerText = "";
    });
    val = "o";
    cnt = 0;
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let pattern of winConditions) {
        let p1 = buttons[pattern[0]].innerText;
        let p2 = buttons[pattern[1]].innerText;
        let p3 = buttons[pattern[2]].innerText;

        if (p1 !== "" && p1 === p2 && p2 === p3) {
            alert(`Winner: ${p1}`);
            resetGame();
            break;
        }
    }
}
