var rectX,rectY;
var vibCount;
var bVib;
var vibVar = 10;
var moveX, moveY;
var bMove, bPower;
var powerX,powerY;
function setup(){
	createCanvas(400,400);
	rectX = width/2;
	rectY = height/2;
	bVib = false;
	bMove = false;
	moveX = 0;
	moveY = 0;
	vibCount = 0;
	power = 0;
}

function draw(){
	background(255);
	if(bPower){
		power++;
	}else{
		power = 0;
	}
	if(bMove){ 
		rectX +=(moveX/Math.abs(moveX)*powerX*0.5);
		rectY +=(moveY/Math.abs(moveX)*powerY*0.5);
		if(rectX>width-100 || rectX < 100){
			powerX = -powerX*0.5;
			if(rectX > width-100){
				rectX = width-100;
			}
			if(rectX < 100){
				rectX = 100;
			}
		}
		if(rectY>width-100 || rectY < 100){
			powerY = -powerY*0.5;
			if(rectY > height-100){
				rectY = height-100;
			}
			if(rectY < 100){
				rectY = 100;
			}
		}
	}
	fill(255,power,0);
	noStroke();
	rectMode(CENTER);
	vibration();
	rect(rectX,rectY,200,200);
}

function vibration(){
	if(bVib){
		if(vibCount<=60){
			vibVar = -vibVar;
			rectX = rectX + vibVar;
			rectY = rectY + vibVar;
			vibCount++;
		}else{
			vibCount = 0;
			bVib = false;
		}
		
	}	
}
function rectMove(){
	if(bMove){

	}
}

function mousePressed(){
	if(mouseX>rectX-100 && mouseX<rectX+100 && mouseY>rectY-100 && mouseY<rectY+100){
		bVib = true;
	}else{
		bPower = true;
		moveX =  rectX - mouseX;
		moveY =  rectY - mouseY;
	}
}
function mouseReleased(){
	if(bPower){
		powerX = power;
		powerY = power;
	bMove = true;
}
	bPower = false;

}

