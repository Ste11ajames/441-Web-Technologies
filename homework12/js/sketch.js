let objects = [];
let player;
let objectData;

function preload() {
  objectData = loadJSON("objects.json");
}

function setup() {
  createCanvas(600, 400);


  for (let item of Object.values(objectData)) {
    objects.push(new GameObject(item.x, item.y, item.size));
  }

  player = new Player(width / 2, height / 2, 30);
}

function draw() {
  background(220);

  for (let obj of objects) {
    obj.display();
  }

  player.update();
  player.display();
}

class GameObject {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    fill(150, 0, 0);
    ellipse(this.x, this.y, this.size);
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

    if (!this.checkCollision(nextX, nextY)) {
      this.x = nextX;
      this.y = nextY;
    }
  }

  display() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.size);
  }

  checkCollision(nx, ny) {
    for (let obj of objects) {
      let d = dist(nx, ny, obj.x, obj.y);
      if (d < (this.size / 2 + obj.size / 2)) {
        return true;
      }
    }
    return false;
  }
}
