function testCollision_firstTest() {
	var wallsTest = [{"color":[255,0,0],"points":[{"x":0,"y":0,"angle":90},{"x":20,"y":0,"angle":180},{"x":20,"y":460,"angle":90},{"x":620,"y":460,"angle":0},{"x":620,"y":220,"angle":45},{"x":640,"y":200,"angle":180},{"x":640,"y":480,"angle":270},{"x":0,"y":480,"angle":0},{"x":0,"y":0,"angle":90}]}];
	var playerPiece = { x: 225, y: 425, width: 50, height: 50 };
	var received = collision(wallsTest, playerPiece);
	var expected = true;
	if(received !== expected){
		console.log("failed. received: " + received);
	} else {
		console.log("passed.");
	}
}