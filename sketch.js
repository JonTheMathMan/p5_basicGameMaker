function setup() {
  createCanvas(641, 481);
}

var mouseShouldDraw = false;

var lastControlPressed = 0;

function draw() {
	var mBoyCollided = collision(walls.pieces, Object.assign({}, mBoy));
	var goLeft1 = keyIsDown(LEFT_ARROW) && !mBoyCollided;
	var goLeft2 = keyIsDown(LEFT_ARROW) && mBoyCollided && lastControlPressed === RIGHT_ARROW;
	if(goLeft1 || goLeft2){
		mBoy.x -= 5;
		clear();
		lastControlPressed = LEFT_ARROW;
	}
	var goRight1 = keyIsDown(RIGHT_ARROW) && !mBoyCollided;
	var goRight2 = keyIsDown(RIGHT_ARROW) && mBoyCollided && lastControlPressed === LEFT_ARROW;
	if(goRight1 || goRight2){
		mBoy.x += 5;
		clear();
		lastControlPressed = RIGHT_ARROW;
	}
	var goUp1 = keyIsDown(UP_ARROW) && !mBoyCollided;
	var goUp2 = keyIsDown(UP_ARROW) && mBoyCollided && lastControlPressed === DOWN_ARROW;
	if(goUp1 || goUp2){
		mBoy.y -= 5;
		clear();
		lastControlPressed = UP_ARROW;
	}
	var goDown1 = keyIsDown(DOWN_ARROW) && !mBoyCollided;
	var goDown2 = keyIsDown(DOWN_ARROW) && mBoyCollided && lastControlPressed === UP_ARROW;
	if(goDown1 || goDown2){
		mBoy.y += 5;
		clear();
		lastControlPressed = DOWN_ARROW;
	}
	
	//walls
	for(var index in walls.pieces){
		vertexShape(walls.pieces[index]);
	}
	
	//mouseDraw
	vertexShape(mouseDraw);
	
	//player
	rect(mBoy.x, mBoy.y, mBoy.width, mBoy.height);
}

function vertexShape(obj){
	fill(obj.color);
	beginShape();
	for(var index in obj.points){
		var point = obj.points[index];
		vertex(point.x, point.y);
	}
	endShape(close);
	fill(255);
}

function keyTyped() {
	if(key === 'f'){
		mouseShouldDraw = true;
	}
	if(key === 'q'){
		if (mouseDraw.points.length === 0) {
			return
		}
		setAllAngles(mouseDraw);
		walls.pieces.push(Object.assign({}, {points: [].concat(mouseDraw.points)}, {color: walls.color}));
		mouseDraw.points = [];
		clear();
		mouseShouldDraw = false;
	}
	if(key === 'l'){
		var mBoyCollided = collision(walls.pieces, Object.assign({}, mBoy));
		console.log(mBoyCollided, JSON.stringify(walls.pieces), Object.assign({}, mBoy));
	}
}

function mouseClicked() {
	if(mouseShouldDraw){
		mouseDraw.points.push({
			x: mouseX,
			y: mouseY
		});
		return false;
	}
}