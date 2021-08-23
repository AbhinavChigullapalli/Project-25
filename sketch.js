const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;

var playerBow,computerBow;

function setup() {
  canvas = createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(100,400,100,100)
  player = new Player(100, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(100,400,100,100)
  
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  playerBow = new PlayerBow(100,200,100,100)
  computerBow = new PlayerBow(300,200,100,100)

  
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerBow.display();
  computerBow.display()


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    
    arrow.shoot(playerBase.body.angle)

  }
}



