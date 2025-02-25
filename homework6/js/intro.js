function storePlayerInfo(event) {
    event.preventDefault(); 

    let playerData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
        attempts: 0 
    };

    localStorage.setItem("playerData", JSON.stringify(playerData));

    
    window.location.href = "game.html";
}