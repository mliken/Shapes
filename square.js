//require shapes file
var Shapes = require('./shapes.js');

//where inheritance occurs from shape to square
Square.prototype = new Shapes ();
// Otherwise instances of square would have a constructor of shape
Square.prototype.constructor = Square;

//create a Square constructor, using side as parameter
function Square (side) {
	//properties
	this.type = "Square";
	this.side = side;	 
};

//export the Square function
module.exports = Square;