  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
  var divisions,plinkos;
  var particle;
  var turn = 0;
  var gameState = "PLAY"

  var divisionHeight=300;
  var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  plinkos = [];
  divisions = [];
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  Engine.update(engine);
  textSize(20)
  stroke("yellow");
  fill("yellow");
  text("Score: "+score,20,30);
  text("100",25,600);
  text("200",105,600);
  text("300",185,600);
  text("400",265,600);
  text("500",345,600);
  text("400",425,600);
  text("300",505,600);
  text("200",585,600);
  text("100",665,600);
  text("50",745,600);
  text("attempt: "+turn,700,30)
  

 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  if(particle){
  particle.display();
    var posX = particle.body.position.x;
    var posY = particle.body.position.y;
    if(posX<80 && posX>0 && posY>600){
      score += 100;
      particle = null;
    }
    else if(posX<160 && posX>81 && posY>600){
      score += 200;
      particle = null;
    }
    else if(posX<240&&posX>161 && posY>600){
      score+=300;
      particle = null;
    }
    else if(posX<320&&posX>241&&posY>600){
      score+=400;
      particle = null;
    }
    else if(posX<400&&posX>241&&posY>600){
      score+=500;
      particle = null;
    }
    else if(posX<480 && posX>401 && posY>600){
      score+=400;
      particle = null;
    }
    else if(posX<560 && posX>481 && posY>600){
      score+=300;
      particle = null;
    }
    else if(posX<640 && posX>481 && posY>600){
      score+=200;
      particle = null;
    }
    else if(posX<720 && posX>641 && posY>600){
      score+=100;
      particle = null;
    }
    else if(posX<800&&posX>721&&posY>600){
      score+=50;
      particle = null;
    }
  }

   //console.log(particle.body.position.y);

    
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(turn > 4){
      gameState = "END";
   }
   if(gameState === "END" && particle===null){
     stroke("white");
     textSize(30);
     text("GAME OVER", 300,150);
     text("SCORE: " + score,310,350)
   }

}
function mousePressed(){
  if(gameState === "PLAY"){
    particle = new Particle(mouseX,10, 10)
    turn++;
  }
}