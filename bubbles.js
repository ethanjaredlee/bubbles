var bubble;

function setup() {
    createCanvas(800, 500);
    bubble = new Bubble();
}

function draw() {
    background(50, 89, 100);
    bubble.display();
    bubble.repel();
}

function distance(x1, y1, x2, y2) {
    distX = x1-x2;
    distY = y1-y2;
    return Math.sqrt(distX*distX + distY*distY);
}

function Bubble() {
    this.color = random(0,255);
    this.radius = random(10, 30);
    this.x = random(width);
    this.y = random(height);
    this.speedX = 0;
    this.speedY = 0;
    this.accelerationX = 0;
    this.accelerationY = 0;

    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.radius, this.radius);
    };

    this.repel = function() {
        // move bubble in opposite direction of the mouse with speed proportional
        // to distance between mouse and bubble
        var distanceX = this.x - mouseX;
        var distanceY = this.y - mouseY;

        this.accelerationX = .5 * 1/distanceX;
        this.accelerationY = .5 * 1/distanceY;

        this.speedX += this.accelerationX;
        this.speedY += this.accelerationY;

        this.x += this.speedX;
        this.y += this.speedY;
        console.log(this.speedX, this.speedY);
    };

    this.pop = function() {
        // pop bubble once it travels a certain distance
        // pop works by splitting arc of circle into outwards lines in certain interval
    };

    this.create = function() {
        // creates a new bubble
    };

    // create a bubble blower that creates a new bubble if the speed is > certain threshold?
};
