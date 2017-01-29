'strict';

var Shapes = require('./Shapes.js');

//create triangle constructor using length
function Triangle (side1, side2, side3) {

	//properties
	this.type = "Triangle";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
};

//export the triangle function
module.exports = Triangle;