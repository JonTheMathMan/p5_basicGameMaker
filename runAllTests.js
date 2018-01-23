function runAllTests(verbose=false){
	//simple functions
	if(verbose){
		testGetLineAngle();
	}
	testToLeftOrRight();
	testBetweenAngles();
	testBetweenNumbers();
	
	//intersections
	testIntersection_firstTest();
	testIntersection_secondTest();
	testIntersection_thirdTest();
	testIntersection_fourthTest();
	testIntersection_fifthTest();
	testIntersection_sixthTest();
	
	//collisions
	testCollision_firstTest();
}