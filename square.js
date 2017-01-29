//'strict';

//var Shapes = require('./Shapes.js');
//create a Square constructor, using side as parameter
function Square (side) {
	//properties
	this.type = "Square";
	this.side = side;	 
};

//export the Square function
module.exports = Square;