function testGetLineAngle() {
	var centerPoint = {x:15,y:15};
	//move all the way to the right
	for(let i=15;i<31;i++)
		{
			let secondPoint={x:i,y:0};
			console.log(getLineAngle(centerPoint,secondPoint),",",secondPoint);
		}
	//move all the way down
	for(let i=0;i<31;i++)
		{
			let secondPoint={x:30,y:i};
			console.log(getLineAngle(centerPoint,secondPoint),",",secondPoint);
		}
	//move all the way to the left
	for(let i=30;i>-1;i--)
		{
			let secondPoint={x:i,y:30};
			console.log(getLineAngle(centerPoint,secondPoint),",",secondPoint);
		}
	//move all the way up
	for(let i=30;i>-1;i--)
		{
			let secondPoint={x:0,y:i};
			console.log(getLineAngle(centerPoint,secondPoint),",",secondPoint);
		}
	//move to the center
	for(let i=0;i<16;i++)
		{
			let secondPoint={x:i,y:0};
			console.log(getLineAngle(centerPoint,secondPoint),",",secondPoint);
		}
}

function testToLeftOrRight() {
	var cases = [
		{
			vector1: {
				x: 20,
				y: 20,
				angle: 340
			},
			vector2: {
				x: 30,
				y: 0,
				angle: 30
			},
			expected: "right",
			name: "across 0 degree start"
		}
	];
	for(var index in cases) {
		var testCase = cases[index];
		var received = toLeftOrRight(testCase.vector1, testCase.vector2);
		if(received !== testCase.expected){
			console.log("testToLeftOrRight() failed on: " + testCase.name);
			console.log(testCase.name + " expected: " + testCase.expected + " but got: " + received);
			return
		}
	}
	console.log("passed all tests on testToLeftOrRight()");
}

function testBetweenAngles() {
	var received = betweenAngles(350, 330, 10);
	var expected = true;
	if(received !== expected) {
		console.log("failed on: accross zero angle start. expected: " + expected + " but got: " + received);
		return
	}
	received = betweenAngles(45, 330, 10);
	expected = false;
	if(received !== expected) {
		console.log("failed on: accross zero angle start. expected: " + expected + " but got: " + received);
		return
	}
	received = betweenAngles(45, 120, 10);
	expected = true;
	if(received !== expected) {
		console.log("failed on: within 360 degrees. expected: " + expected + " but got: " + received);
		return
	}
	received = betweenAngles(45, 191, 10);
	expected = false;
	if(received !== expected) {
		console.log("failed on: within 360 degrees. expected: " + expected + " but got: " + received);
		return
	}
	received = betweenAngles(45, -181, -10);
	expected = false;
	if(received !== expected) {
		console.log("failed on: within negative range. expected: " + expected + " but got: " + received);
		return
	}
	console.log("passed all tests for testBetweenAngles()");
}

function testBetweenNumbers(){
	if(betweenNumbers(15, 11, 19) !== true){
		console.log("failed at spot 1");
		return
	}
	if(betweenNumbers(15, 19, 11) !== true){
		console.log("failed at spot 2");
		return
	}
	if(betweenNumbers(-15, -11, -19) !== true){
		console.log("failed at spot 3");
		return
	}
	if(betweenNumbers(-15, -19, -11) !== true){
		console.log("failed at spot 4");
		return
	}
	if(betweenNumbers(15, -11, 19) !== true){
		console.log("failed at spot 5");
		return
	}
	if(betweenNumbers(15, 19, -11) !== true){
		console.log("failed at spot 6");
		return
	}
	if(betweenNumbers(-5, -11, 19) !== true){
		console.log("failed at spot 7");
		return
	}
	if(betweenNumbers(-5, 19, -11) !== true){
		console.log("failed at spot 8");
		return
	}
	if(betweenNumbers(5, 11, 19) !== false){
		console.log("failed at spot 9");
		return
	}
	if(betweenNumbers(5, 19, 11) !== false){
		console.log("failed at spot 10");
		return
	}
	if(betweenNumbers(25, 11, 19) !== false){
		console.log("failed at spot 11");
		return
	}
	if(betweenNumbers(-5, -11, -19) !== false){
		console.log("failed at spot 12");
		return
	}
	if(betweenNumbers(-25, -11, -19) !== false){
		console.log("failed at spot 13");
		return
	}
	if(betweenNumbers(25, -25, 19) !== false){
		console.log("failed at spot 14");
		return
	}
	if(betweenNumbers(-35, -23, 19) !== false){
		console.log("failed at spot 15");
		return
	}
	console.log("passed all betweenNumbers() tests");
}