
var bubble;

function setup() {
  createCanvas(800, 500);
  bubble = new Bubble();
}

function draw() {
  background(50, 89, 100);
  bubble.display();
}

function Bubble() {
    this.color = random(0,255);
    this.radius = random(10, 30);
    this.x = random(width);
    this.y = random(height);

    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.radius, this.radius);
    }
};
