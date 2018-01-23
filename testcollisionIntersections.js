function testIntersection_firstTest() {
	var pointsA = [
		{
			x: 0,
			y: 0,
			angle: 90
		},
		{
			x: 50,
			y: 0,
			angle: 180
		},
		{
			x: 50,
			y: 50,
			angle: 270
		},
		{
			x: 0,
			y: 50,
			angle: 0
		}
	];
	var pointsB = [
		{
			x: 30,
			y: 30,
			angle: 90
		},
		{
			x: 80,
			y: 30,
			angle: 180
		},
		{
			x: 80,
			y: 80,
			angle: 270
		},
		{
			x: 30,
			y: 80,
			angle: 0
		}
	];
	var received = intersection(pointsA, pointsB);
	var expected = true;
	if(received !== expected){
		console.log("failed. received: " + received);
	} else {
		console.log("passed.");
	}
}

function testIntersection_secondTest() {
	var pointsA = [
		{
			x: 0,
			y: 0,
			angle: 90
		},
		{
			x: 50,
			y: 0,
			angle: 180
		},
		{
			x: 50,
			y: 50,
			angle: 270
		},
		{
			x: 0,
			y: 50,
			angle: 0
		}
	];
	var pointsB = [
		{
			x: 60,
			y: 60,
			angle: 90
		},
		{
			x: 110,
			y: 60,
			angle: 180
		},
		{
			x: 110,
			y: 110,
			angle: 270
		},
		{
			x: 60,
			y: 110,
			angle: 0
		}
	];
	var received = intersection(pointsA, pointsB);
	var expected = false;
	if(received !== expected){
		console.log("failed. received: " + received);
	} else {
		console.log("passed.");
	}
}

function testIntersection_thirdTest() {
	var pointsA = [
		{
			x: 0,
			y: 0,
			angle: 90
		},
		{
			x: 150,
			y: 0,
			angle: 180
		},
		{
			x: 150,
			y: 50,
			angle: 270
		},
		{
			x: 0,
			y: 50,
			angle: 0
		}
	];
	var pointsB = [
		{
			x: 30,
			y: 30,
			angle: 90
		},
		{
			x: 80,
			y: 30,
			angle: 180
		},
		{
			x: 80,
			y: 80,
			angle: 270
		},
		{
			x: 30,
			y: 80,
			angle: 0
		}
	];
	var received = intersection(pointsA, pointsB);
	var expected = true;
	if(received !== expected){
		console.log("failed. received: " + received);
	} else {
		console.log("passed.");
	}
}

function testIntersection_fourthTest() {
	var wallsTest = [{"color":[255,0,0],"points":[{"x":0,"y":0,"angle":90},{"x":20,"y":0,"angle":180},{"x":20,"y":460,"angle":90},{"x":620,"y":460,"angle":0},{"x":620,"y":220,"angle":45},{"x":640,"y":200,"angle":180},{"x":640,"y":480,"angle":270},{"x":0,"y":480,"angle":0},{"x":0,"y":0,"angle":90}]}];
	var pointsA = wallsTest[0].points;
	var playerPiece = { x: 225, y: 425, width: 50, height: 50 };
	var pointsB = [
		{
			x: playerPiece.x,
			y: playerPiece.y,
			angle: 90
		},
		{
			x: playerPiece.x + playerPiece.width,
			y: playerPiece.y,
			angle: 180
		},
		{
			x: playerPiece.x + playerPiece.width,
			y: playerPiece.y + playerPiece.height,
			angle: 270
		},
		{
			x: playerPiece.x,
			y: playerPiece.y + playerPiece.height,
			angle: 0
		}
	];
	var received = intersection(pointsA, pointsB);
	var expected = true;
	if(received !== expected){
		console.log("failed. received: " + received);
	} else {
		console.log("passed.");
	}
}

function testIntersection_fifthTest() {
	var wallsTest = [{"x":0,"y":0,"angle":90},{"x":20,"y":0,"angle":180},{"x":20,"y":460,"angle":90},{"x":620,"y":460,"angle":0},{"x":620,"y":220,"angle":45},{"x":640,"y":200,"angle":180},{"x":640,"y":480,"angle":270},{"x":0,"y":480,"angle":0},{"x":0,"y":0,"angle":90}];
	var pointsA = wallsTest;
	var pointsB = [{"x":225,"y":425,"angle":90},{"x":275,"y":425,"angle":180},{"x":275,"y":475,"angle":270},{"x":225,"y":475,"angle":0}];
	var received = intersection(pointsA, pointsB);
	var receivedInverseArgs = intersection(pointsB, pointsA);
	var expected = true;
	if(received !== expected || receivedInverseArgs !== expected){
		console.log("failed. received: " + received);
		console.log("failed. receivedInverseArgs: " + receivedInverseArgs);
	} else {
		console.log("passed.");
	}
}

function testIntersection_sixthTest() {
	var wallsTest = [{"x":0,"y":0,"angle":90},{"x":20,"y":0,"angle":180},{"x":20,"y":460,"angle":90},{"x":620,"y":460,"angle":0},{"x":620,"y":220,"angle":45},{"x":640,"y":200,"angle":180},{"x":640,"y":480,"angle":270},{"x":0,"y":480,"angle":0},{"x":0,"y":0,"angle":90}];
	var pointsA = wallsTest;
	var playerPiece = { x: 585, y: 300, width: 50, height: 50 };
	var pointsB = [
		{
			x: playerPiece.x,
			y: playerPiece.y,
			angle: 90
		},
		{
			x: playerPiece.x + playerPiece.width,
			y: playerPiece.y,
			angle: 180
		},
		{
			x: playerPiece.x + playerPiece.width,
			y: playerPiece.y + playerPiece.height,
			angle: 270
		},
		{
			x: playerPiece.x,
			y: playerPiece.y + playerPiece.height,
			angle: 0
		}
	];
	var received = intersection(pointsA, pointsB);
	var receivedInverseArgs = intersection(pointsB, pointsA);
	var expected = true;
	if(received !== expected || receivedInverseArgs !== expected){
		console.log("failed. received: " + received);
		console.log("failed. receivedInverseArgs: " + receivedInverseArgs);
	} else {
		console.log("passed.");
	}
}