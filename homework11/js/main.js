var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;

createSquares();
drawSquare();


setInterval(moveGreenSquare, 5000);

function createSquares() {
    square1 = new Square(x, y, 20, 20, "yellow");
    square2 = new Square(x2, y2, 50, 50, "pink");
}

function moveGreenSquare() {
    let newX = Math.floor(Math.random() * (canvas.width - square2.theWidth));
    let newY = Math.floor(Math.random() * (canvas.height - square2.theHeight));
    square2.setX(newX);
    square2.setY(newY);
    drawSquare();
}

function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
}

$(document).ready(function () {
    var bgMusic = document.getElementById("bgMusic");
    bgMusic.volume = 0.3;

    $(this).keypress(function (event) {
        bgMusic.play();
        getKey(event);
    });
});

function getKey(event) {
    var didCollide = hasCollided(square1, square2);

    if (didCollide) {
        canvas.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);
    }

    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char).toLowerCase();

    if (actualLetter === "w") moveUp();
    else if (actualLetter === "s") moveDown();
    else if (actualLetter === "a") moveLeft();
    else if (actualLetter === "d") moveRight();

    drawSquare();
}

function moveUp() {
    let newY = square1.theY - 10;
    if (newY >= 0) square1.setY(newY);
}

function moveDown() {
    let newY = square1.theY + 10;
    if (newY + square1.theHeight <= canvas.height) square1.setY(newY);
}

function moveLeft() {
    let newX = square1.theX - 10;
    if (newX >= 0) square1.setX(newX);
}

function moveRight() {
    let newX = square1.theX + 10;
    if (newX + square1.theWidth <= canvas.width) square1.setX(newX);
}

function hasCollided(obj1, obj2) {
    return !(
        ((obj1.y + obj1.height) < obj2.y) ||
        (obj1.y > (obj2.y + obj2.height)) ||
        ((obj1.x + obj1.width) < obj2.x) ||
        (obj1.x > (obj2.x + obj2.width))
    );
}

function random255() {
    return Math.floor(Math.random() * 255);
}
