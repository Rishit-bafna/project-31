const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events= Matter.Events;

var divisions = [];
var divisionHeight = 300;
var particles = [];
var plinkos = [];
var score=0;

var engine, world;

var ground1,ground2,ground3,ground4;
var division1,division2,division3,division4,division5,division6,division7,division8;

  

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new plinko(j,75));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new plinko(j,175));
  
   } 
  
  for (var k = 0; k <=width; k = k + 75){
    divisions.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
 
  ground1 = new ground(240,795,480,10);
  ground2 = new ground(5,400,10,800);
  ground3 = new ground(475,400,10,800);
  ground4 = new ground(240,5,480,10);


}
function draw() {
  background(0,0,0);  
  Engine.update(engine); 

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }
       
}
