function setup() {
	createCanvas(641, 481);
  }
  
  var mouseShouldDraw = false;
  
  function draw() {
	  var lookForward = function(incr) {
		  if(keyIsDown(LEFT_ARROW)) {mBoy.newX = mBoy.x - incr;}
		  if(keyIsDown(RIGHT_ARROW)) {mBoy.newX = mBoy.x + incr;}
		  if(keyIsDown(UP_ARROW)) {mBoy.newY = mBoy.y - incr;}
		  if(keyIsDown(DOWN_ARROW)) {mBoy.newY = mBoy.y + incr;}
	  };
	  var increment = 5;
	  lookForward(increment);
	  
	  var mBoyCollided = collision(walls.pieces, Object.assign({}, mBoy));
	  while (mBoyCollided && increment > 1) {
		  increment--;
		  lookForward(increment);
		  mBoyCollided = collision(walls.pieces, Object.assign({}, mBoy));
	  }
	  if (!mBoyCollided) {
		  mBoy.x = mBoy.newX;
		  mBoy.y = mBoy.newY;
		  clear();
	  } else {
		  mBoy.newX = mBoy.x;
		  mBoy.newY = mBoy.y;
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