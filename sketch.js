var snake;
var scl = 20;
var food;


function setup() {
  var cnv = createCanvas(600, 600);
  cnv.parent('view');
  snake = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var col = floor(width / scl);
  var row = floor(height / scl);
  food = createVector(floor(random(col)), floor(random(row)));
  food.mult(scl);
}

function mousePressed() {
  snake.total++;
}

function draw() {
  background(51);
  
  if (snake.eat(food)) {
    pickLocation();
  }
  
  snake.death();
  snake.update();
  snake.show();

  fill(255, 0, 98);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  // function to change direction of the snake
  if(keyCode === UP_ARROW) {
    snake.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1,0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1,0);
  }
}

