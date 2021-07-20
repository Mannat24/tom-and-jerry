var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;
var garden,gardenImg;

function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,700);
    cat.addAnimation("tom",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(80,700);
    mouse.addAnimation("jerry",mouseImg1);
    mouse.scale = 0.1

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width/2)){

    }
   


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouse teasing",mouseImg2);
      mouse.changeAnimation("mouse teasing");
      mouse.frameDelay = 25;

  }

  if(keyCode === LEFT_ARROW){
      cat.addAnimation("cat walking",catImg2);
      cat.changeAnimation("cat walking");
      cat.x = cat.x - 20;
  }


}
