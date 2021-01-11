class Paper {
    constructor (x,y,radius,[options],[maxsides]) {
        var options = {
        'restitution': 0.3,
        'friction':0.5,
        'density':1.2,
        'isStatic': false
        }
       this.body= Matter.Bodies.circle(x,y,radius,[options],[maxsides]) 

       World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle; 
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        rectMode(CENTER);
        ellipse(0,0,9);
        pop();
    }
};