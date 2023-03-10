"use strict";
/* console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";

document.querySelector(".question").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 15; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".down").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    // when there is no input
    if (!guess) {
        // document.querySelector(".message").textContent = "No number!";
        displayMessage("No number!");

        // when player wins
    } else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "🎉Correct Number!";
        displayMessage("🎉Correct Number!");
        document.querySelector(".question").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".question").style.width = "30rem";

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        // guess not equal to sceretNumber
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent =
            //     guess > secretNumber ? "📈Too high!" : "📉Too low!";

            displayMessage(guess > secretNumber ? "📈Too high!" : "📉Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector(".message").textContent = "🎇You lost the game!";
            displayMessage("🎇You lost the game!");
            document.querySelector(".score").textContent = 0;
        }
    }
});

// when guess is too high
// } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector(".message").textContent = "📈Too high!";
//         score--;
//         document.querySelector(".score").textContent = score;
//     } else {
//         document.querySelector(".message").textContent = "🎇You lost the game!";
//         document.querySelector(".score").textContent = 0;
//     }
//     //when guess is too low
// } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector(".message").textContent = "📉Too low!";
//         score--;
//         document.querySelector(".score").textContent = score;
//     } else {
//         document.querySelector(".message").textContent = "🎇You lost the game!";
//         document.querySelector(".score").textContent = 0;
//     }
// }

document.querySelector(".up").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".question").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "rgb(59, 61, 61)";
    document.querySelector(".question").style.width = "15rem";
});