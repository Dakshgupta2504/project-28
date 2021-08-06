class launcher{
    constructor(bodyA,pointB)
    {
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:50,
    stiffness:0.5,

}
this .pointB=pointB; 
this.launcher=Constraint.create(options);
World.add(world, this.launcher);
    }
    fly(){
        this.launcher.bodyA=null;

    }
    attach (body){
        this.launcher .bodyA=body;
        
    }
    
    display(){
        
    }
}