

var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8"];
var blankImagePath = "images/star.jpg";
var actualImages = [];

function printBlanks() {
    createRandomImageArray();
    for (var i = 0; i < imageTags.length; i++) {
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
}

function createRandomImageArray() {
    var actualImagePath = ["images/tortoise01.jpg", "images/tortoise02.jpg", "images/tortoise03.jpg", "images/tortoise04.jpg"];
    var count = [0, 0, 0, 0]; //count matches the number of images

    actualImages = []; 

    while (actualImages.length < 8) {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);
        
        if (count[randomNumber] < 2) { 
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber]++;
        }
    }
}

function flipImage(number) {
    if (actualImages.length === 8) { 
        document.getElementById(imageTags[number]).src = actualImages[number];
    } else {
        console.error("actualImages not initialized correctly.");
    }
}
