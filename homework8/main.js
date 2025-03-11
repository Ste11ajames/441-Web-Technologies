document.addEventListener("DOMContentLoaded", function () {
    let images = ["images/angel.jpg", "images/fisheyes.jpg", "images/horse.jpg", "images/tights.jpg"];
    let quotes = ["Believe in yourself queen!", "Dreams are the ink and you are the pen, write that shit down", "Just keep swimming",  "Follow your heart and ignore the haters" ];
    
    let currentIndex = 0;
    let quoteIndex = 0;

    function fadeImages() {
        $("#rotating-image").fadeOut(1000, function () {
            currentIndex = (currentIndex + 1) % images.length;
            $(this).attr("src", images[currentIndex]).fadeIn(1000);
        });
    }

    function rotateQuotes() {
        $("#quote").fadeOut(1000, function () {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            $(this).text(quotes[quoteIndex]).fadeIn(1000);
        });
    }

    setInterval(fadeImages, 4000);
    setInterval(rotateQuotes, 5000);
});


let shapes = [];
let shapeTypes = ["circle", "square"];
let shapeIndex = 0; // switch between circles and squares

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvas-container");

    // start shape
    shapes.push(new MovingShape(shapeTypes[shapeIndex]));

    // change shapes every 4 seconds
    setInterval(() => {
        shapeIndex = (shapeIndex + 1) % shapeTypes.length;
        shapes.push(new MovingShape(shapeTypes[shapeIndex]));
    }, 4000);
}

function draw() {
    background(0);

    for (let shape of shapes) {
        shape.move();
        shape.display();
    }
}

class MovingShape {
    constructor(type) {
        this.x = random(width);
        this.y = random(height);
        this.size = 40;
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
        this.type = type; 
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;

       
    }

    display() {
        fill(255);
        noStroke();

        if (this.type === "circle") {
            ellipse(this.x, this.y, this.size);
        } else if (this.type === "square") {
            rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        }
    }
}




