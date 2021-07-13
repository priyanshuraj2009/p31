
const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var Divison=[];
var DivisionsHeight= 300;
var Plinko=[];
var partical=[];






function setup() {
  createCanvas(800,700);
 engine=Engine.create();
 world=world.engine;

ground=new Ground(400,690,800,20);

for(var i=50;i<width-10;i=i+80){
  divisons.push(new Division(i,hieght-DivisionsHeight/2,10,DivisionsHeight))
}


for(var j=0;j<width;j=j+50){
  plinkos.push(new Plinko(j,75))
}
for(var j=50;j<width-10;j=j+50){
  plinkos.push(new Plinko(j,175))
}
for(var j=75;j<width;j=j+50){
  plinkos.push(new Plinko(j,275))
}

for(var j=50;j<width-10;j=j+50){
  plinkos.push(new Plinko(j,375))
}







Engine.run(engine);











}

function draw() {
  rectMode(CENTER);
  background(255,255,255);  
  drawSprites();

for(var n=0;n<divisons.length;n++){
divisons[n].display();
}

if(frameCount%40 === 0){

  particles.push(new Partical(random(width/2-30,width/2+30),10,10))
}

for(var h=0;h<particals.length;h++){
  particals[h].display();
  }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
    }

ground.display();


















}