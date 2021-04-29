const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var gameState=1,box1, box2, box4, box5, box6, rope1,box7, box8, box9, box10, box11, box12,box13,box14,box15,box16, ground, hero1, monster1, back;

function preload() {
    back = loadImage("images/background.jpeg")
}

function setup() {
    
    
    var canvas = createCanvas(1515, 725);
    engine = Engine.create();
   
    world = engine.world;
    hero1 = new Hero(300, 300, 250, 150)
    ground = new Ground(200, 400, 1900, 10)
    monster1 = new Monster(1000, 300, 260, 270)
    rope1 = new rope(hero1.body,{x:hero1.body.position.x,y:hero1.body.position.y})
    box1 = new Box(520,350,30,50)
    box2 = new Box(520,250,30,50)
    box3 = new Box(520,150,30,50)
    box4 = new Box(556,350,30,50)
    box5 = new Box(556,250,30,50)
    box6 = new Box(556,150,30,50)
    box7 = new Box(592,350,30,50)
    box8 = new Box(592,250,30,50)
    box9 = new Box(592,150,30,50)
    box10 = new Box(520,50,30,50)
    box11 = new Box(556,50,30,50)
    box12 = new Box(592,50,30,50)//628
    box13 = new Box(628,350,30,50)
    box14 = new Box(628,250,30,50)
    box15 = new Box(628,150,30,50)
    box16 = new Box(628,50,30,50)

    Engine.run(engine);

}

function draw() {
   
    background(back)
   
    console.log(mouseX + "  " + mouseY)
   
    Engine.update(engine);
   
    hero1.display();
    ground.display();
    monster1.display();
    rope1.display(); 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();


}



function mouseDragged() {

hero1.body.position.x=mouseX;
hero1.body.position.y=mouseY;


}



function mouseReleased(){

rope1.fly();

}