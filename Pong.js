// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2
var speedFactor = 1.1

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220, 200, 20);
  
  // draw left player
  fill(20,10,200);
  rect(0, playerL, playerWidth, playerHeight);
  
  // draw right player
  rect(width-playerWidth, playerR, playerWidth, playerHeight);  
  
  // draw ball
  noStroke();
  fill(10 ,250, 120);
  ellipse(ballX, ballY, ballSize)
  
  // draw scores.
  fill(150,150,200);
  textSize(20);
  text('PlayerL ' + scoreL.toString(), 45, 50);
  text('PlayerR ' + scoreR.toString(), width - 130, 50);    
  
  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
  
  
  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed * speedFactor
    ballYSpeed = ballYSpeed * speedFactor
  }
  
  // bounce off left player
  if (ballX < playerWidth && ballY >= playerL && ballY <= playerL + playerHeight) {
    ballX = playerWidth
    ballXSpeed = -ballXSpeed * speedFactor
    ballYSpeed = ballYSpeed * speedFactor
  }  
  
  // playerL scores!
  if (ballX > width) {
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = -4
    ballYSpeed = 2
  }
  
  // playerR scores!
  if (ballX < 0) {
    ballX = width/2
    ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = 4
    ballYSpeed = -2
  }  
}
