let currentScene = 1;

function makeChoice() {
  const userChoice = document.getElementById("userChoice").value.toLowerCase();
  let result = "";
  let extraStyle = "";

  switch (currentScene) {
    case 1: // Starting scene
      if (userChoice === "left") {
        result = "You go to the left and find a dive bar. So you eat? .";
        currentScene = 2;
        extraStyle = "forest"; 
      } else if (userChoice === "right") {
        result = "You go to the right and drive for hours and hours and run out of fuel. You are lost and not sure what to do next. Do you go right or left again?";
        currentScene = 3;
      } else {
        result = "Invalid choice. Please choose left or right.";
      }
      break;
    case 2: // Left path
      result = handleRestaurantChoice(userChoice);
      break;
    case 3: // Right path
      result = handleLostChoice(userChoice);
      break;
      case 4: //River path
      result = handleRiverChoice(userChoice);
      break;
      case 5: //Mountain path
      result = handleMountainChoice(userChoice);
      break;

    default:
      result = "The adventure ends here!";
  }

  document.getElementById("storyText").innerText = result;
  updateStyle(extraStyle); // Apply extra style if needed
  document.getElementById("resultText").innerText = ""; // Clear previous results
  document.getElementById("userChoice").value = ""; // Clear input field

  if (currentScene > 3) {
    document.getElementById("restartButton").style.display = "block";
  }
}


function handleRestaurantChoice(choice) {
    if (choice === "eat") {
      return "You eat a tasty treat and feel like you could fly wohoo. You continue your journey and find the path to Mr. Rogers' house!";
    } else {
      return "You think its best not to eat and get back on your way, you're running late! You are feeling a bit hungry but manage to find the way to Mr. Rogers' house!";
    }
}

function handleLostChoice(choice) {
    if (choice === "wait") {
      return "You wait and a donkey named Peter comes along and guides you to Mr. Rogers' house!";
    } else {
      return "You try to find your way back but get even more lost.  Eventually you stumble upon Mr. Rogers' house!";
    }
}

function handleRiverChoice(choice){
    if(choice === "swim"){
        return "You swim across the river and find a hidden path leading to Mr. Rogers' house.";
    } else {
        return "You decide to take the bridge and find the path to Mr. Rogers' house.";
    }
}

function handleMountainChoice(choice){
    if(choice === "climb"){
        return "You climb the mountain and find a shortcut to Mr. Rogers' house.";
    } else {
        return "You take the long way around the mountain and eventually reach Mr. Rogers' house.";
    }
}



function updateStyle(className) {
  const body = document.body;
  body.classList.remove("forest", "river"); // Remove previous classes
  if (className) {
    body.classList.add(className);
  }
}


function restartStory() {
  currentScene = 1;
  document.getElementById("storyText").innerText = "You are riding a unicorn and need directions to get to Mr. Rogers' house for a tea party. Which way do you go, left or Right?";
  document.getElementById("resultText").innerText = "";
  document.getElementById("userChoice").value = "";
  document.getElementById("restartButton").style.display = "none";
  document.body.classList.remove("forest", "river"); // Reset styles

}