
function displayResults() {
    let playerData = JSON.parse(localStorage.getItem("playerData"));

    document.getElementById("playerName").innerText = playerData.firstName + " " + playerData.lastName;
    document.getElementById("playerAge").innerText = playerData.age;
    document.getElementById("finalAttempts").innerText = playerData.attempts;
}

function restartGame() {
    let playerData = JSON.parse(localStorage.getItem("playerData"));
    playerData.attempts = 0; 
    localStorage.setItem("playerData", JSON.stringify(playerData));
    window.location.href = "index.html"; 
}
