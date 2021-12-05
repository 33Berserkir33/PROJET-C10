var sea,ship;
var seaImg,shipImg;

function preload(){

//Mi observacion me pidio poner png a todos los archivos de imagen

  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

//Cambiar escalas

  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.5;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1,seaImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -4;

  //Agregar mas proporciones

  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width/7;
    sea.x = sea.width/7;
    sea.y = height/7;
  }

 
  drawSprites();
}
