class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2	
		}
		this.x=x;
		this.y=y;
		this.image=loadImage("sprites/paper.png");
		this.body=Bodies.circle(this.x, this.y, 25, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
			var angle=this.body.angle;
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle);
			imageMode(CENTER);
			fill(255,0,255)
			image(this.image,0,0,70,70);
			pop()
			
	}

}