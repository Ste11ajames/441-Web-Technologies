function choosePath(choice) {
    let storyText = document.getElementById("story-text");

    if (choice === "eat") {
        storyText.innerHTML = "The berry tastes amazing! But suddenly, your stomach churns. Do you drink water or wait it out?";
        updateButtons("Drink water", "Wait it out", "water", "wait");
    } 
    else if (choice === "ignore") {
        storyText.innerHTML = "You walk away, but now you're hungry. A mysterious stranger offers you soup. Do you take it?";
        updateButtons("Drink the soup", "Politely decline", "soup", "decline");
    } 
    else if (choice === "water") {
        storyText.innerHTML = "You drink water... but the poison reacts violently. You collapse. Game over!";
        updateButtons("Restart", "", "restart", "");
    } 
    else if (choice === "wait") {
        storyText.innerHTML = "You endure the pain... and somehow, you survive! The berry gave you immunity to all poisons. What a smart guy you are! Winner winner chicken dinner!";
        updateButtons("Restart", "", "restart", "");
    } 
    else if (choice === "soup") {
        storyText.innerHTML = "The soup is warm and delicious. Unfortunately, it was also poisoned. You feel dizzy... Game over!";
        updateButtons("Restart", "", "restart", "");
    } 
    else if (choice === "decline") {
        storyText.innerHTML = "You decline the soup and leave. Later, you find a safe meal and survive another day. Smart choice!";
        updateButtons("Restart", "", "restart", "");
    } 
    else if (choice === "restart") {
        storyText.innerHTML = "You find a strange-looking berry on the ground. It smells sweet. What do you do?";
        updateButtons("Eat the berry", "Ignore it", "eat", "ignore");
    }
}


function updateButtons(option1, option2, choice1, choice2) {
    let buttonContainer = document.querySelector(".choices");
    buttonContainer.innerHTML = ""; 

    let button1 = document.createElement("button");
    button1.innerHTML = option1;
    button1.onclick = function() { choosePath(choice1); };
    buttonContainer.appendChild(button1);

    if (option2 !== "") {
        let button2 = document.createElement("button");
        button2.innerHTML = option2;
        button2.onclick = function() { choosePath(choice2); };
        buttonContainer.appendChild(button2);
    }
}