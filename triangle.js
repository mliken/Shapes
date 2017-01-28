'strict'

var Shapes = require('./Shapes.js');

//create triangle constructor using length
function Triangle (length1, length2, length3) {

	//properties
	this.type = "Triangle";
	this.side1 = length1;
	this.side2 = length2;
	this.side3 = length3;
};

//export the triangle function
module.exports = Triangle;