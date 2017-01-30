//require shapes file
var Shape = require('./shape.js');

//shape to triangle
Pentagon.prototype = new Shapes();
Pentagon.prototype.constructor = Pentagon;


function Triangle (side1, side2, side3){

	//properties
	 this.type = "Triangle";
	 this.side1 = side1;
	 this.side2 = side2;
	 this.side3 = side3;
	 
};

//export the Pentagon function
module.exports = Triangle;
