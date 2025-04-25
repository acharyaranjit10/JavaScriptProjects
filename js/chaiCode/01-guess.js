const num = Math.floor(Math.random() * 20);
const form = document.querySelector("form");
let tries = 10;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let guess = document.querySelector(".number").value;
    matchNum(guess);
});

function matchNum(guess) {
    let text = document.querySelector(".text");
    let prevs = document.querySelector(".prevs");
    let rems = document.querySelector(".rems");
    let result = document.querySelector(".result");

    if (guess == num) {
        text.textContent = "Congrats!!!";
    } else {
        tries = tries - 1;
        text.textContent = 'Try again';
        prevs.textContent += ` ${guess} ,`;
        rems.textContent = `Remaining Tries = ${tries}.`;
    }

    if (tries == 0) {
        result.classList.remove('hide');
        result.textContent = `The Number was ${num}`;
        setTimeout(() => {
            location.reload();
        }, 2000); // 2000 milliseconds = 2 seconds
    }
}