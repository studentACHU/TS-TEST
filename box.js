class B{

    constructor(x,y,width,height){

        var opt={
            restitution: 0.1,
            'friction':0.0,
            'density':1
            
        }
        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.width=width;
        this.height=height;
        this.Visiblity = 255;
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed<3){


        
        var pos=this.body.position;
        var angle = this .body.angle
     

        push()
        
        

        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
       fill("lightblue");
      rect(0,0,this.width,this.height);
      pop();
        }
        else {

            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            pop();
        }

    }
}