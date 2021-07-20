const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var iss , spaceCraft;
var hasDocked = false;

function preload(){
  issImg = loadImage("iss.png");
  spaceBgImg = loadImage("spacebg.jpg");
  spaceCraft1Img = loadImage("spacecraft1.png");
  spaceCraft2Img = loadImage("spacecraft2.png");
  spaceCraft3Img = loadImage("spacecraft3.png");
  spaceCraft4Img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  
  iss = createSprite(400 , 100);
  iss.addImage(issImg);
  iss.scale = 0.5;

  spaceCraft = createSprite(400 , 300);
  spaceCraft.addImage(spaceCraft1Img);
  spaceCraft.scale = 0.2;
}

function draw() {
  background(spaceBgImg);  

  

   if(!hasDocked){

    

      if(keyDown("right")){
        spaceCraft.x = spaceCraft.x+5;
        spaceCraft.addImage(spaceCraft4Img);
      }

      if(keyDown("left")){
        spaceCraft.x = spaceCraft.x-5;
        spaceCraft.addImage(spaceCraft3Img);
      }

      if(keyDown("up")){
        spaceCraft.y = spaceCraft.y-5;
        spaceCraft.addImage(spaceCraft2Img);
      }

   }

   if(spaceCraft.y <= (iss.y+50) && spaceCraft.x <= (iss.x- 15)){
    spaceCraft.addImage(spaceCraft1Img);
      hasDocked = true;

   }

  drawSprites();
}