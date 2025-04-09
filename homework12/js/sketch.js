let stationaryObjects = [];
let collectibles = [];
let player;
let objectData, collectibleData;
let score = 0;

function preload() {
  objectData = loadJSON("objects.json");
  collectibleData = loadJSON("collectibles.json");
}

function setup() {
  createCanvas(600, 600);

  // Create obstacles from JSON
  for (let item of Object.values(objectData)) {
    stationaryObjects.push(new GameObject(item.x, item.y, item.size));
  }

  // Create collectibles from JSON
  for (let item of Object.values(collectibleData)) {
    collectibles.push(new Collectible(item.x, item.y, item.size));
  }

  player = new Player(width / 2, height / 2, 30);
}

function draw() {
  background(246, 229, 141);

  // Draw obstacles
  for (let obj of stationaryObjects) {
    obj.display();
  }

  // Draw collectibles
  for (let col of collectibles) {
    col.display();
  }

 
  player.update();
  player.display();

  // score
  fill(0);
  textSize(20);
  text("Your Score: " + score, 10, 30);
}

// Obstacle class
class GameObject {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    fill(255, 182, 193);
    ellipse(this.x, this.y, this.size);
  }

  checkCollision(px, py, psize) {
    let d = dist(px, py, this.x, this.y);
    return d < (this.size / 2 + psize / 2);
  }
}

// Collectible class
class Collectible {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    fill(204, 204, 255); 
    ellipse(this.x, this.y, this.size);
  }

  checkCollision(px, py, psize) {
    let d = dist(px, py, this.x, this.y);
    return d < (this.size / 2 + psize / 2);
  }
}


class Player {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = 3;
  }

  update() {
    let nextX = this.x;
    let nextY = this.y;

    if (keyIsDown(LEFT_ARROW)) nextX -= this.speed;
    if (keyIsDown(RIGHT_ARROW)) nextX += this.speed;
    if (keyIsDown(UP_ARROW)) nextY -= this.speed;
    if (keyIsDown(DOWN_ARROW)) nextY += this.speed;

    // collision with obstacles
    for (let obj of stationaryObjects) {
      if (obj.checkCollision(nextX, nextY, this.size)) {
        return; 
      }
    }

    // collectible collisions
    for (let i = collectibles.length - 1; i >= 0; i--) {
      if (collectibles[i].checkCollision(nextX, nextY, this.size)) {
        collectibles.splice(i, 1); 
        score += 10;
      }
    }


    this.x = nextX;
    this.y = nextY;
  }

  display() {
    fill(255, 36, 0);
    ellipse(this.x, this.y, this.size);
  }
}

