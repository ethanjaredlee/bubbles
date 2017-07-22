var bubble;

function setup() {
    createCanvas(800, 500);
    bubble = new Bubble();
}

function draw() {
    background(50, 89, 100);
    bubble.display();
    bubble.pulse();
}

function distance(x1, y1, x2, y2) {
    distX = x1-x2;
    distY = y1-y2;
    return Math.sqrt(distX*distX + distY*distY);
}

function Bubble() {
    this.position = createVector(width/2, height/2);
    this.color = 0;
    this.radius = 80;
    this.growing = true;

    this.display = function() {
        noStroke();
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.radius, this.radius);
    };

    this.pulse = function() {
        if (this.growing) {
            this.radius++;
            this.color++
            this.display();
            if (this.radius > 300) {
                this.growing = false;
            }
        }

        if (!this.growing) {
            this.radius--;
            this.color--;
            this.display;
            if (this.radius < 50) {
                this.growing = true;
            }
        }
    }

};
