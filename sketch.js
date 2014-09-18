var rectX,rectY;
var vibCount;
var bVib;
var vibVar = 10;

function setup(){
	createCanvas(400,400);
	rectX = width/2;
	rectY = height/2;
	bVib = false;
	vibCount = 0;
}

function draw(){
	background(255);
	fill(255,0,0);
	noStroke();
	rectMode(CENTER);
	vibration();
	rect(rectX,rectY,200,200);
}

function vibration(){
	if(bVib){
		if(vibCount<60){
			vibVar = -vibVar;
			rectX = width/2 + vibVar;
			rectY = height/2 + vibVar;
			vibCount++;
		}else{
			vibCount = 0;
			bVib = false;
		}
		
	}	
}
function mouseClicked(){
	if(mouseX>width/2-100 && mouseX<width/2+100 && mouseY>height/2-100 && mouseY<height/2+100){
		bVib = true;
	}
}


