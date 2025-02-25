var attempts = 0;
var flippedCards = []; // Stores flipped cards for matching

function flipImage(number) {
    if (actualImages.length !== 8) {
        console.error("actualImages not initialized correctly.");
        return;
    }

    let clickedImage = document.getElementById(imageTags[number]);

    // Prevent flipping already flipped cards
    if (flippedCards.includes(number)) return;

    clickedImage.src = actualImages[number];
    flippedCards.push(number);

    // If two cards are flipped, check for a match
    if (flippedCards.length === 2) {
        attempts++; // Increment attempts after every two flips
        document.getElementById("attemptCount").innerText = attempts;

        // Store attempts in localStorage
        let playerData = JSON.parse(localStorage.getItem("playerData"));
        playerData.attempts = attempts;
        localStorage.setItem("playerData", JSON.stringify(playerData));

        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    let firstCard = flippedCards[0];
    let secondCard = flippedCards[1];

    if (actualImages[firstCard] === actualImages[secondCard]) {
        // Cards match, keep them flipped
    } else {
        // Cards don't match, reset them
        setTimeout(() => {
            document.getElementById(imageTags[firstCard]).src = blankImagePath;
            document.getElementById(imageTags[secondCard]).src = blankImagePath;
        }, 1000);
    }

    flippedCards = []; // Reset flipped cards

    // Check if the game is finished
    if (document.querySelectorAll('img[src="' + blankImagePath + '"]').length === 0) {
        setTimeout(() => {
            window.location.href = "results.html"; // Redirect to results page
        }, 1000);
    }
}
