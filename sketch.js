var rectX,rectY;


function setup(){
	createCanvas(400,400);
	rectX = width/2;
rectY = height/2;

}

function draw(){
	background(255);
	fill(255,0,0);
	noStroke();
	rectMode(CENTER);
	rect(rectX,rectY,200,200);
}

