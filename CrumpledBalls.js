class CrumpledBalls{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:2.5,
            density:1,
        }
   
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("paperballimg.png");

this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);

 }
 display(){
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
      stroke("blue");
      fill("purple");
      ellipse(0,0,this.r,this.r);
      pop();
 }
}