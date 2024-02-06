let numberOfSquares = 6;
// let colors = generateRandomColors(numberOfSquares);
let colors = [];
// let pickedColor = pickColor();
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
// let easyButton = document.querySelector("#easy");
// let hardButton = document.querySelector("#hard");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();

    setupSquares();

    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        // squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            // console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

// easyButton.addEventListener("click", function () {
//     hardButton.classList.remove("selected");
//     easyButton.classList.add("selected");
//     numberOfSquares = 3;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardButton.addEventListener("click", function () {
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     numberOfSquares = 6;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function () {
    reset();
    // colors = generateRandomColors(numberOfSquares);
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;
    // this.textContent = "New Colors";
    // messageDisplay.textContent = "";
    // for (let i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
});

// colorDisplay.textContent = pickedColor;

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
