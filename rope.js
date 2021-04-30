class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.0001,
           length: 1
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(body){


this.rope.bodyA=body;

    }


    
}
