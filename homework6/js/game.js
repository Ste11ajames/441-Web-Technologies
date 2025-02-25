var attempts = 0;

function flipImage(number) {
    if (actualImages.length === 8) { 
        document.getElementById(imageTags[number]).src = actualImages[number];

        // Increment attempts
        attempts++;
        document.getElementById("attemptCount").innerText = attempts;

        // Store updated attempts in localStorage
        let playerData = JSON.parse(localStorage.getItem("playerData"));
        playerData.attempts = attempts;
        localStorage.setItem("playerData", JSON.stringify(playerData));

        // Check if the game is finished
        if (checkGameCompletion()) {
            window.location.href = "results.html";
        }
    }
}

function checkGameCompletion() {
    // Check if all images are revealed (Game completion condition)
    for (let i = 0; i < imageTags.length; i++) {
        if (document.getElementById(imageTags[i]).src.includes("star.jpg")) {
            return false; // Some images are still hidden
        }
    }
    return true;
}
