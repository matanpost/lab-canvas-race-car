const myCanvas = document.querySelector('canvas');
const ctx = myCanvas.getContext('2d');
myCanvas.style.border = '2px solid black';

const bgImg = new Image();
bgImg.src = '../images/road.png';

const bgImg2 = new Image();
bgImg2.src = '../images/road.png';

//car img
const car = new Image(); 
car.src = '../images/car.png';
let carx = myCanvas.width / 2;
let cary = myCanvas.height - 100;
// background
let bg1Y = 0
let bg2y = -myCanvas.height;

//moving car
let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

// obsticles
const drawObsticle1 = () => {
  ctx.beginPath()
  ctx.fillStyle = 'tomato'
  ctx.rect(obsticle1X, obsticle1Y, obsticle1W, obsticle1H)
  ctx.fill()
  ctx.closePath()
}
let obsticle1X = 0
let obsticle1Y = 0
let obsticle1W = 300

const drawObsticle2 = () => {
  ctx.beginPath()
  ctx.fillStyle = 'tomato'
  ctx.rect(obsticle2X, obsticle2Y, obsticle2W, obsticle2H)
  ctx.fill()
  ctx.closePath()
}
let obsticle2X = 300
let obsticle2Y = 200
let obsticle2W = 200
let obsticle2H = 60

//game variables

let gameOver = false;
let animateId;
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function animate(){
  ctx.drawImage(bgImg, 0, bg1Y, myCanvas.width, myCanvas.height);
  ctx.drawImage(bgImg2, 0, bg2y, myCanvas.width, myCanvas.height);
  ctx.drawImage(car, carx, cary, 50, 80);

  //moving road animation
  bg1Y += 2;
  bg2y += 2;
  if(bg1Y > myCanvas.height){
    bg1Y = -myCanvas.height
  }
  if(bg2y > myCanvas.height){
    bg2y = -myCanvas.height
  }

  if(!gameOver){
  animateId = requestAnimationFrame(animate);
  }else{
  cancelAnimationFrame(animateId)
  }
//car movement animation
  if (moveLeft === true) {
   carx -= 3
  }
  if (moveRight === true) {
    carx += 3
   }
  if (moveUp === true) {
    cary -= 3
  }
  if (moveDown === true) {
    cary += 3
  }
  if (carx < 0) {
    carx = 0;
  }
  if (carx >= myCanvas.width - 50){
     carx = myCanvas.width - 50;
  }
   
  // obstivles
   drawObsticle1()
   drawObsticle2()
   obsticle1Y += 2;
   obsticle2Y += 2;
   if(obsticle1Y > myCanvas.height){
    obsticle1Y = -myCanvas.height
   }
   if(obsticle2Y > myCanvas.height){
    obsticle2Y = -myCanvas.height
   }

  }
 // obsticles
 /* drawObsticle() */

  function startGame() {
    animate();
    console.log('Game started');
  }
};

 // car movement keys
document.addEventListener('keypress', (event) => {
  if (event.key === "a") {
    moveLeft = true
  }

  if (event.key === "d") {
    moveRight = true
  }

  if (event.key === "w") {
    moveUp = true
  }

  if (event.key === "s") {
    moveDown = true
  }
})

document.addEventListener('keyup', (event) => {
  moveLeft = false
  moveRight = false
  moveUp = false
  moveDown = false
})




