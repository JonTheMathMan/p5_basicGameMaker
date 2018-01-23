var mBoy = {
	x: 100,
	y: 100,
	width: 20,
	height: 20
};

var walls = {
	color: [255, 0, 0],
	pieces: [
				{
				color: [255, 0, 0],
				points: [
					{
						x: 0,
						y: 0
					},
					{
						x: 20,
						y: 0
					},
					{
						x: 20,
						y: 460
					},
					{
						x: 620,
						y: 460
					},
					{
						x:620,
						y:220
					},
					{
						x:640,
						y:200
					},
					{
						x:640,
						y:480
					},
					{
						x: 0,
						y: 480
					},
					{
						x: 0,
						y: 0
					}
				]
		}
	]
};
setAllAngles(walls.pieces[0]);

var mouseDraw = {
	color: [0, 255, 0],
	points: []
};