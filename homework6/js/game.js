var attempts = 0;
var flippedCards = []; 
var flippedImages = [];
var matchedPairs = 0;  
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8"];
var blankImagePath = "images/star.jpg"; 



function flipImage(number) {
    if (actualImages.length !== 8) {
        console.error("actualImages not initialized correctly.");
        return;
    }

    let clickedImage = document.getElementById(imageTags[number]);

    if (flippedCards.includes(number)) return;

    clickedImage.src = actualImages[number];
    flippedCards.push(number);

    if (flippedCards.length === 2) {
        attempts++;
        document.getElementById("attemptCount").innerText = "Attempts: " + attempts;

        let playerData = JSON.parse(localStorage.getItem("playerData")) || {};
        playerData.attempts = attempts;
        localStorage.setItem("playerData", JSON.stringify(playerData));

        setTimeout(checkMatch, 1000);
    }
}



function checkMatch() {
    let firstCardIndex = flippedCards[0];
    let secondCardIndex = flippedCards[1];

    let firstImage = flippedImages[0];
    let secondImage = flippedImages[1];

    if (firstImage === secondImage) {
        matchedPairs++;

        
        if (matchedPairs === 4) { 
            setTimeout(() => {
                window.location.href = "results.html"; 
            }, 1000);
        }
    } else {
     
        setTimeout(() => {
            document.getElementById(imageTags[firstCardIndex]).src = blankImagePath;
            document.getElementById(imageTags[secondCardIndex]).src = blankImagePath;
        }, 1000);
    }

    
    flippedCards = [];
    flippedImages = [];
}
