var backgroundImg;
var player, opponent, land1, land2;
var playerImg, opponentImg, landImg;
var garchomp, lapras;

var garchompEnergy = 120;
var laprasEnergy = 120;

var opponentTurn = 0;
var myTurn = 0;

var opponentAttack1, img1, opponentAttack2, img2, opponentAttack3, img3, opponentAttack4, img4;
var myAttack1, img5, myAttack2, img6, myAttack3, img7, myAttack4, img8;

var cynthia, cynImg, lucas, lucasImg;

var fire, fireImg;
var ice, iceImg;
var dazz, dazzImg;
var dual1, dual2, dualImg;
var surf, surfImg;
var dc, dcImg;
var earth, earthImg;
var light, lightImg;

var link, linkImg;

var gameState = 0;

function preload() {
  opponentImg = loadImage("cynthia.png");
  playerImg = loadImage("lucas.png");
  backgroundImg = loadImage("back.jpg");
  landImg = loadImage("Land.png");
  garchomp = loadImage("opp1.png");
  lapras = loadImage("me1.png");

  img1 = loadImage("dragonClaw.png");
  img2 = loadImage("earthquake.png");
  img3 = loadImage("dualChop.png");
  img4 = loadImage("fireBlast.png");

  img5 = loadImage("surf.png");
  img6 = loadImage("iceBeam.png");
  img7 = loadImage("dazzlingGleam.png");
  img8 = loadImage("thunderBolt.png");

  cynImg = loadImage("cynthia.png");
  lucasImg = loadImage("lucas.png");
  linkImg = loadImage("link.png");

  fireImg = loadImage("fire.png");
  iceImg = loadImage("ice.png");
  dazzImg = loadImage("dazz.png");
  dualImg = loadImage("dual.png");
  surfImg = loadImage("wave.png");
  dcImg = loadImage("claws.png");
  earthImg = loadImage("rock.png");
  lightImg = loadImage("light.png");
}

function setup() {
  createCanvas(800, 400);

  land1 = createSprite(50, 158, 50, 50);
  land1.addImage(landImg);
  land1.scale = 0.6;

  land2 = createSprite(50, 390, 50, 50);
  land2.addImage(landImg);
  land2.scale = 0.6;

  player = createSprite(750, 330, 50, 50);
  player.addImage("myself", playerImg);
  player.addImage("sent", lapras);
  player.scale = 1.4;

  opponent = createSprite(50, 100, 50, 50);
  opponent.addImage("opponent", opponentImg);
  opponent.addImage("pokemon", garchomp);
  opponent.scale = 1.7;

  opponentAttack1 = createSprite(200, 100, 20, 20);
  opponentAttack1.addImage(img1);
  opponentAttack1.scale = 0.4;
  opponentAttack1.visible = false;

  opponentAttack2 = createSprite(320, 100, 20, 20);
  opponentAttack2.addImage(img2);
  opponentAttack2.scale = 0.3;
  opponentAttack2.visible = false;

  opponentAttack3 = createSprite(200, 150, 20, 20);
  opponentAttack3.addImage(img3);
  opponentAttack3.scale = 0.35;
  opponentAttack3.visible = false;

  opponentAttack4 = createSprite(320, 150, 20, 20);
  opponentAttack4.addImage(img4);
  opponentAttack4.scale = 0.38;
  opponentAttack4.visible = false;

  myAttack1 = createSprite(520,310,20,20);
  myAttack1.addImage(img5);
  myAttack1.scale = 0.4;
  myAttack1.visible = false;

  myAttack2 = createSprite(650,310,20,20);
  myAttack2.addImage(img6);
  myAttack2.scale = 0.4;
  myAttack2.visible = false;

  myAttack3 = createSprite(520,360,20,25);
  myAttack3.addImage(img7);
  myAttack3.scale = 0.42;
  myAttack3.visible = false;

  myAttack4 = createSprite(650,360,20,20);
  myAttack4.addImage(img8);
  myAttack4.scale = 0.4;
  myAttack4.visible = false;

  link = createSprite(400,200,50,50);
  link.addImage(linkImg);
}

function draw() {
  background(backgroundImg);
if(gameState===0){
  land1.visible = false;
  land2.visible = false;
  opponent.visible = false;
  player.visible = false;
}

if(mousePressedOver(link)){
  gameState = 1;
  
  link.destroy();

  land1.visible = true;
  land2.visible = true;
  opponent.visible = true;
  player.visible = true;    
  }

  if(gameState===1){
  land1.x = opponent.x;
  land2.x = player.x;

  player.velocityX = -7;
  opponent.velocityX = 7;

  if (player.x < 250) {
    opponent.velocityX = 0;

    gameState = 2;
  }
}
  if (opponent.x > 550) {
    player.velocityX = 0;
  }

  if (gameState===2 && keyCode === 32) {

    cynthia = createSprite(630,100,20,20);
    cynthia.addImage(cynImg);
    cynthia.scale = 1.4;

    lucas = createSprite(130,350,20,20);
    lucas.addImage(lucasImg);

    opponent.changeImage("pokemon", garchomp);
    player.changeImage("sent", lapras);
    player.scale = 2.0;

    opponentAttack1.visible = true;
    opponentAttack2.visible = true;
    opponentAttack3.visible = true;
    opponentAttack4.visible = true;

    myAttack1.visible = true;
    myAttack2.visible = true;
    myAttack4.visible = true;
    myAttack3.visible = true;

    fill(0, 255, 0);
    textSize(30);
    text("HP:  " + garchompEnergy, 380, 100);
    text("HP:  " + laprasEnergy, 370, 300);
  }

  if(mousePressedOver(opponentAttack3)&&opponentTurn!==1){
    dualC();
    laprasEnergy = laprasEnergy - 5;
    opponentTurn = opponentTurn + 1;
    myTurn = 0;
  }else if(mousePressedOver(opponentAttack2)&&opponentTurn!==1){
    rock();
    laprasEnergy = laprasEnergy - 6;
    opponentTurn = opponentTurn + 1;
    myTurn = 0;
  }else if(mousePressedOver(opponentAttack1)&&opponentTurn!==1){
    claw();
    laprasEnergy = laprasEnergy - 7;
    opponentTurn = opponentTurn + 1;
    myTurn = 0;
  }else if(mousePressedOver(opponentAttack4)&&opponentTurn!==1){
    fireBlast();
    laprasEnergy = laprasEnergy - 3;
    opponentTurn = opponentTurn + 1;
    myTurn = 0;
  }

  if(mousePressedOver(myAttack4)&&myTurn!==1){
    lightning();
    garchompEnergy = garchompEnergy - 5;
    myTurn = myTurn + 1;
    opponentTurn = 0;
  }else if(mousePressedOver(myAttack2)&&myTurn!==1){
    icebeam();
    garchompEnergy = garchompEnergy - 8;
    myTurn = myTurn + 1;
    opponentTurn = 0;
  }else if(mousePressedOver(myAttack3)&&myTurn!==1){
    dazzling();
    garchompEnergy = garchompEnergy - 4;
    myTurn = myTurn + 1;
    opponentTurn = 0;
  }else if(mousePressedOver(myAttack1)&&myTurn!==1){
    surfing();
    garchompEnergy = garchompEnergy - 6;
    myTurn = myTurn + 1;
    opponentTurn = 0;
  }

  if(garchompEnergy<=0){
    gameState = 3;
    opponent.visible = false;
    fill(255);
    textSize(15);
    text("I have never ever faced an opponent like you",200,200);
    text("YOU WIN",450,250);
  }
  else if(laprasEnergy<=0){
    gameState = 4;
  }
  if(gameState===4){
    lucas.viisible = false;
    cynthia.visible = false;
    lapras.visible = false;
    garchomp.visible = false;

    opponentAttack1.visible = false;
    opponentAttack2.visible = false;
    opponentAttack3.visible = false;
    opponentAttack4.visible = false;
    
    myAttack1.visible = false;
    myAttack2.visible = false;
    myAttack3.visible = false;
    myAttack4.visible = false;

    fill(255);
    textSize(50);
    text("YOU LOSE",330,50);
  }

  drawSprites();
}

function fireBlast(){
  fire = createSprite(550,100,20,20);
  fire.addImage("fire", fireImg);
  fire.scale = 0.7;
  fire.velocityX = -9;
  fire.velocityY = 9;
}

function icebeam(){
  ice = createSprite(250,330,20,20);
  ice.addImage("icy", iceImg);
  ice.scale = 0.7;
  ice.velocityX = 9;
  ice.velocityY = -9;
}

function dazzling(){
  dazz = createSprite(800,0,20,20);
  dazz.addImage("star", dazzImg);
  dazz.scale = 0.4;
  dazz.velocityX = -9;
  dazz.velocityY = 9;
}

function dualC(){
  dual1 = createSprite(550,100,20,20);
  dual1.addImage(dualImg);
  dual1.scale = 0.1;
  dual1.velocityX = -9;
  dual1.velocityY = 9;

  dual2 = createSprite(550,100,20,20);
  dual2.addImage(dualImg);
  dual2.scale = 0.1;
  dual2.velocityX = -9;
  dual2.velocityY = 9;
}

function surfing(){
  surf = createSprite(250,330,20,20);
  surf.addImage(surfImg);
  surf.velocityX = 9;
  surf.velocityY = -9;
}

function claw(){
  dc = createSprite(280,330,20,20);
  dc.addImage(dcImg);
  dc.velocityX = -9;
  dc.velocityY = 9;
}

function rock(){
  earth = createSprite(250,400,20,20);
  earth.addImage(earthImg);
  earth.scale = 0.5;
  earth.velocityY = -9;
}

function lightning(){
  light = createSprite(550,70,20,20);
  light.addImage(lightImg);
  light.velocityY = -9;
  light.scale = 0.5;
}