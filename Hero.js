class Hero{

    constructor(x,y,width,height){
    
    var options = {
    
    restitution : 0.5,
    //isStatic : true,
    density:0.7,
    friction:1
    }
  this.width=width;
    this.height=height;
    this.body = Bodies.rectangle(x,y,this.height,this.width,options);
    World.add(world,this.body);
    this.image=loadImage("images/superhero1.png")
    
    }
    
    display(){
    
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER)
    fill("grey")
    image(this.image,0,0,this.width,this.height)
    pop();
    
    
    }
    
    
    }

