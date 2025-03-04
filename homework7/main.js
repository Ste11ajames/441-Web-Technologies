let artworks = [];
let button;
let currentArtwork;

function preload() {
  img1 = loadImage("images/rosa.jpg");
  img2 = loadImage("images/ruby.jpg");
  img3 = loadImage("images/tank.jpg");
  img4 = loadImage("images/greta.jpg");
  img5 = loadImage("images/martin.jpg");
}

function setup() {
  createCanvas(600, 400);
  

  button = createButton("Press Me and Learn Something!");
  button.position(20, 20);
  button.mousePressed(showRandomArtwork);

 
  artworks.push(new Artwork("Rosa Parks", img1, "December 1 Rosa Parks gets arrested for not moving seats for a white man ", "Police",  1955));
  artworks.push(new Artwork("Ruby Bridges", img2, "Nov 14 Ruby Bridges is the first African American child to attend formerly whites-only ", "Norman Rockwell", 1960));
  artworks.push(new Artwork("Tank Man", img3, "In Beijing On June 5 and unknown man makes an anti-war stance", "Jeff Widener", 1989));
  artworks.push(new Artwork("Greta Thunberg", img4, "September 23 Greta Thunberg gave a moving speech on the climate crisis", "NPR", 2019));
  artworks.push(new Artwork("Martin Luther King", img5, "August 28 MLK gave his I Have A Dream Speech", "Bob Adleman", 1963));

  showRandomArtwork();
}

function draw() {
  background(220,66,66);
  if (currentArtwork) {
    currentArtwork.display();
  }
}

function showRandomArtwork() {
  let index = floor(random(artworks.length));
  currentArtwork = artworks[index];
}

// OOP 
class Artwork {
  constructor(title, img, description, author, year) {
    this.title = title;
    this.img = img;
    this.description = description;
    this.author = author;
    this.year = year;
  }
  
  display() {
    image(this.img, 100, 80, 400, 250);
    textAlign(CENTER);
    textSize(16);
    fill(0);
    text(this.title, width / 2, 50);
    textSize(12);
    text(`${this.description} - ${this.author}, ${this.year}`, width / 2, 350);
  }
}
