function intersection(pointsA, pointsB){
	for(var index in pointsA){
		var pointA1 = pointsA[index];
		var pointA2 = loopPlusOne(pointsA, index);
		for(var i in pointsB){
			var pointB1 = pointsB[i];
			var pointB2 = loopPlusOne(pointsB, i);
			var check1 = toLeftOrRight(pointA1, pointB1);
			var check2 = toLeftOrRight(pointA1, pointB2);
			if(check1 !== check2){
				if(betweenAngles(pointB1.angle, getLineAngle(pointB1, pointA1), getLineAngle(pointB1, pointA2))){
					return true;
				}
			}
		}
	}
	return false;
}

function loopPlusOne(array, index){
	if(Number(index) === array.length - 1){
		return array[0];
	}
	return array[Number(index) + 1];
}

function collision(wallPieces, playerPiece){
	var mBoyPoints = [
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
	for(var index in wallPieces){
		if(intersection(mBoyPoints, wallPieces[index].points)){
			return true;
		}
	}
	return false;
}

function toLeftOrRight(vector1, vector2)
{
	var angle = getLineAngle(vector1, vector2);
	var relativeAngle = angle - vector1.angle;
	if((relativeAngle < 0 && relativeAngle > -180) || (relativeAngle > 180 && relativeAngle < 360)) {
		return "left";
	}else if((relativeAngle > 0 && relativeAngle < 180) || (relativeAngle < -180 && relativeAngle > -360)){
		return "right";
	}
	if(relativeAngle === 0 || relativeAngle === 180 || relativeAngle === -180){
		return "straight";
	}
	console.error("bad check on toLeftOrRight(). Args given: ", vector1, vector2, relativeAngle);
	return "bad check";
}

function getLineAngle(point1={x:0,y:0},point2={x:0,y:0})
{
	var delta = {x:point2.x - point1.x, y:point2.y - point1.y};
	
	var angle = 0;
	if(delta.x>0)
		{
			angle = Math.atan(delta.y/delta.x);
		}else if(delta.x<0){
			angle = Math.atan(delta.y/delta.x) + Math.PI;
		}else if(delta.x==0 && delta.y>0){
			angle = Math.PI/2;
		}else if(delta.x==0 && delta.y<0){
			angle = 0-Math.PI/2;
		}
	return (angle*180/Math.PI)+90;
}

function betweenAngles(checkAngle, angle1, angle2){
	var smallestAngle = angle1;
	if(angle1 > angle2){
		smallestAngle = angle2;
	}
	checkAngle -= smallestAngle;
	angle1 -= smallestAngle;
	angle2 -= smallestAngle;
	if(checkAngle < 0){
		checkAngle += 360;
		if(checkAngle < 0){
			console.error("checkAngle is way too negative.");
		}
	}
	if(angle1 === 0 && angle2 > 180){
		angle1 = 360;
	} else if(angle2 === 0 && angle1 > 180){
		angle2 = 360;
	} else if(angle1 === 180 || angle2 === 180){
		return false;
	}
	return betweenNumbers(checkAngle, angle1, angle2);
}

function betweenNumbers(checkNumber, a, b){
	return Math.abs(b - a) === Math.abs(checkNumber - a) + Math.abs(b - checkNumber);
}

function setAllAngles(obj){
	for(var index in obj.points){
			var point = obj.points[index];
			if(Number(index) === obj.points.length - 1){
				var point2 = obj.points[0];
			} else {
				var point2 = obj.points[Number(index) + 1];
			}
			point.angle = getLineAngle(point, point2);
		}
}