'strict';

var Shapes = require('./Shapes.js');
//create a Square constructor,, using length as parameter
function Square (side) {
	//properties
	this.type = "Square";
	this.side = side;	 
};

//export the Square function
module.exports = Square;