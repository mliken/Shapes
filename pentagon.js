var Shapes = require('./Shapes.js');

//create a Square constructor, using side as length
function Pentagon (side1, side2, side3, side4, side5){

	//properties
	 this.type = "Pentagon";
	 this.side1 = side1;
	 this.side2 = side2;
	 this.side3 = side3;
	 this.side4 = side4;
	 this.side5 = side5;
};

//export the Pentagon function
module.exports = Pentagon;