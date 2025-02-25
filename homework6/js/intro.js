function storePlayerInfo(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let playerData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
        attempts: 0 // Initialize attempts to 0
    };

    localStorage.setItem("playerData", JSON.stringify(playerData));

    // Redirect to game page
    window.location.href = "game.html";
}