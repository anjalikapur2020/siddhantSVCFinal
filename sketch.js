//if(mousePressedOver(restart))
var LEVELINFO

var playcount=0
var gameState= "wait";

var start,pause,exit,instructions;
var startimg,pauseimg,exitimg,instructionsimg;
var leve1,level2,level1img,level2img
var levelinfo
var bucket,bucketImg;
var droplet,dropletImg,dropletGroup,dropfallImg;
var win,winbg,medalimg;
var input,button,name1;
var net,netimg

var background2,backgroundImgLevel1;
var bg,bgImg;
var begin=0
var restart,restartImg;
var time;
var playbutton
var dropletSound;
var netSound;
var lightSound;

var bglevel2;
var score=0;
var score1=0
var bottle
var popup

function preload(){
 

  medalimg=loadImage("medal.png")
  level1img=loadImage("level1.png")
  level2img=loadImage("level2.png")
  backgroundImgLevel1=loadImage("rain.jpg");
playimg=loadImage("pause.png")
  startimg=loadImage("start.png")
 pauseimg=loadImage("play.png")
  //instructionsimg=loadImage("instruction.png")
  exitimg=loadImage("exit.png")

  bucketImg=loadImage("bucket.png");
  
  dropletImg=loadImage("droplet.png");
  
  bglevel2=loadImage("ocean.jpg")
  
 bgImg=loadImage("basicbg.jpg");
  
  //restartImg=loadImage("restart.png");
  
  winbg=loadImage("win.jpg");

  dropletSound= loadSound("droplet sound.mp3");

  dropfallImg= loadAnimation("dropfall.png")
  bottle1_Img=loadImage("bottle1.png");
bottle2_Img=loadImage("bottle2.png");
wasteimg= loadImage("waste.png")

bottle3_Img=loadImage("bottle3.png");

level2backgroundimg=loadImage("basicbg2.jpg")
level1backgroundimg=loadImage("basicbg1.jpg")

netimg=loadAnimation("net.png")
netimgright=loadAnimation("netright.png")
netSound=loadSound("net.mp3");

lightSound=loadSound("lightmusic.mp3");
}



function setup() 
 {
  createCanvas(windowWidth, windowHeight);
  

  level1=createSprite(width/4,height-height/6)
  level1.addImage(level1img)
  level1.visible=false

  level2=createSprite(width/2,height-height/6)
  level2.addImage(level2img)
  level2.visible=false


  start=createSprite(width/12,height/12,10,10)
  start.addImage(startimg)
  start.scale=0.75
  playbutton=createSprite(width/12,height/12,10,10)
  playbutton.addImage(playimg)
  playbutton.scale=0.2
  playbutton.visible=false
  

  pause=createSprite(width/12,height/6,10,10)
  pause.addImage(pauseimg)
  pause.scale=0.2
  pause.visible=false
  
 popup=createSprite(width/2,height/2,400,400)
 popup.visible=false


  exit=createSprite(width/12,height/4,10,10)
 exit.addImage(exitimg)
 exit.scale=0.2
 exit.visible=false

 net=createSprite(52,height-50);
      net.addAnimation("left",netimg);
      net.scale=0.75;
      net.visible=false
      net.debug=true
      net.setCollider("circle",0,-80,60)
net.addAnimation("right",netimgright)
  var timer=second()

      bucket=createSprite(52,height-50);
      bucket.addImage(bucketImg);
      bucket.scale=0.3;
      bucket.visible=false
      
        medal=createSprite(width/2,height/2);
        medal.addImage(medalimg);
        medal.scale=0.2;
        medal.visible=false;
       
     
  
         restart=createSprite(200,80);
        //restart.addImage(restartImg);
        restart.scale=0.3
      restart.visible=false;
    
     dropletGroup = new Group();
     bottlesGroup = new Group();
      
   //lightSound.play()
}

function draw() {
  if(score===1){
     
    gameState = "gamelevel2";
    background("blue")
 
    } 


    if(score1=== 2){
       net.visible=false
      gameState = "win";
      background(winbg)
      textSize(40)
      fill("red")
    stroke("black")
      
      strokeWeight(4)
      text("CONGRTULATIONS YOU ARE A REAL EARTH SAVIOUR",100,height/2)
    
      pause.visible=false
      play.visible=false
      exit.visible=false
     
   
      } 

      if(gameState === "win"){
        medal.visible=true
      }
  
if (gameState !== "play"){
  bucket.visible=false
 
}

if (begin === 0){
  background(bgImg);
  textSize(100)
  fill("red")
  stroke("black")
  //textFont("")
   text("EARTH SAVIOUR",width/4,height/3);
      text("SAVE THE MOTHER EARTH ",50,height/1.5);
       
    }


  if(mousePressedOver(start) ){
    gameState= "about"
    begin++
  }



  if (gameState === "about"){
    start.visible=false
    
    background("lightblue")
    textSize(50)
text("Save the EARTH...Before It's Too Late..",width/5,75)

    textSize(25)
    fill("red")
    stroke("black")
  
    text("As all over the earth we humans are being destructive towards the envoirment. Everyday 18M people drink polluted ",20,200)
text("water as we are polluting the water. Here you have a chance play the Game and make a habit of keeping water pure",20,250)

text("and saving every drop as a responsible human being come and save water and aware people about it as much as ",20,300)

text("you can. The game consists of two levels, you have to clear both the levels in order to get the certificate and ",20,350)
text("become a responsible citizen.", 20,400)
  
level1.visible=true
level2.visible=true

gameState= "levelinfo"


}


if(gameState==="levelinfo"){


  if(mousePressedOver(level1) ){
    
    levelstart1()
         
    }
  
    if(mousePressedOver(level2) ){
      levelstart2()
               
      }
      if(mousePressedOver(exit)){
        gameState= "about"
      }

   
      
  }

  if(mousePressedOver(pause)){
    background(backgroundImgLevel1)
    console.log(gameState)
       gameState="play"
    level1.visible=false
    level2.visible=false
  }
 
  
  

  if(gameState === "play" ){
    text("WATER DROPLETS COLLECTED  : "+score,width/1.5,100)
      playstate()
       } 
  
  if(gameState === "gamelevel2" ){
    
    text("POLLUTANTS  COLLECTED  : " +score1,width/1.5,100)
     
  
  spawnbottles()
  
   
  }
 


 drawSprites();

 if(gameState === "gamelevel2" ){
    
  text("POLLUTANTS  COLLECTED  : " +score1,width/1.5,100)
 }
 
 

  
    }
 

/*function spawnDroplets(){
  if(gameState===PLAY)
{ 
   
}
}*/


function reset(){
  gameState="play";
  restart.visible=false;
  
 score=0;
}
  
  



function levelstart1(){
  levelinfocounter=1
  background(level1backgroundimg)
  level2.visible=false
  level1.visible=false
  playbutton.visible=true
     exit.visible=true
    pause.visible=true
     textSize(50)
     text("LEVEL 1",width/5,100)
     
         textSize(25)
         fill("red")
         stroke("black")
         text(" This Level is about saving WATER !!!You have to collect water droplets in the bucket .",100,height/2.5) 
         fill("black")
         text(" How To PLAY   :",50,height/2.5+50)
         fill("red")

         text("Bucket moves with the help of arrow keys.", 100,height/2.5+100)
         text("LEFT ARROW moves the bucket ---- LEFT",100,height/2.5+150)
         text("RIGHT ARROW moves the bucket ---- RIGHT",100,height/2.5+200)
         text("You have to collect 25 water droplets to move to the NEXT LEVEL ",100,height/2.5+250)
         text("GO GET IT !",width/2,height/2.5+300)

         
}


function levelstart2(){
  background(level2backgroundimg)
  levelinfocounter=2
  fill("white")
  level2.visible=false
  level1.visible=false
     
  playbutton.visible=true
  exit.visible=true
  pause.visible=true
  textSize(50)
  text("LEVEL 2",width/5,100)
  
      textSize(25)
     
      stroke("black")
      strokeWeight(3)
      text(" This Level is about cleaning OCEANS !!!You have to remove the floating pollutants from the Ocean .",100,height/2.5) 
      
      text(" How To PLAY   :",50,height/2.5+50)
    

      text("Net moves with the help of arrow keys.", 100,height/2.5+100)
      text("LEFT ARROW moves the net ---- LEFT",100,height/2.5+150)
      text("RIGHT ARROW moves the net ---- RIGHT",100,height/2.5+200)
      text("You have to remove 25 pollutants to WIN the GAME ",100,height/2.5+250)
      text("GO GET IT !",width/2,height/2.5+300)
}


function playstate(){
  if(gameState==="play")
  background(backgroundImgLevel1)
{
  

  if(frameCount % 20 === 0){
    waterdroplet= createSprite(20,130,10,10);
    var rand =Math.round(random(20,windowWidth-20))
    waterdroplet.x=rand
    waterdroplet.addImage("droplet",dropletImg);
    waterdroplet.y=Math.random(round(20,150));
    waterdroplet.velocityY=15;
    waterdroplet.scale =0.08;
    dropletGroup.add(waterdroplet);
    
  }
  ;
  fill("black")
  textSize(20)
  text("WATER DROPLETS COLLECTED  : "+score,width/1.5,100)

    restart.visible=false;
   
bucket.visible=true


   
     if(keyDown("right_arrow")){
     bucket.x=bucket.x+5;
   }
     
   if(keyDown("left_arrow")){
     bucket.x=bucket.x-5;
   }
   
   if (dropletGroup.isTouching(bucket)) {
  
    score += 1;
   dropletGroup.destroyEach();
   dropletSound.play();


 }
   

   if(mousePressedOver(exit)){
   
     gameState= "about"
     waterdroplet.visible=false
   }
}

}




function spawnbottles(){
  background(bglevel2) 
  if(gameState !== "play")
  {
    
    if(frameCount %120 === 0){
    bottle=createSprite(100,height-50,50,50)
    var randx =Math.round(random(20,windowWidth-20))
    var randy =Math.round(random(height/2-20,height-20))
    bottle.x=randx
    bottle.y=randy
    
    var rand = Math.round(random(1,3))
    switch(rand){
 case 1: bottle.addImage(bottle1_Img);
 break;

 case 2: bottle.addImage(wasteimg);
 break;

 case 3: bottle.addImage(bottle3_Img);
 break;

 default : break;
    }
     bottle.scale=0.5
     bottlesGroup.add(bottle)
    
    
  }
  

  net.visible=true
  
   
  if(keyDown("right_arrow")){
  net.x=net.x+5;
  net.changeAnimation("right",netimgright)
}
  
if(keyDown("left_arrow")){
  net.x=net.x-5;
  net.changeAnimation("left",netimg)
}

if(keyDown("up_arrow")){
  net.y=net.y-5;
}

if(keyDown("down_arrow")){
  net.y=net.y+5;
}

if (bottlesGroup.isTouching(net)) {

 score1 += 1;
bottlesGroup.destroyEach();
netSound.play();

}


  bottlesGroup.setVelocityXEach(1)

  if(mousePressedOver(exit)){

    gameState= "about"
  }
}
}
