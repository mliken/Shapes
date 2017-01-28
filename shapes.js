'strict'
//import content of Square.js
var Square = require('./Square');

//import content of Triangle.js
var Triangle = require('./Triangle');

//import content of Pentagon.js
var Pentagon = require('./Pentagon');

function Shapes(type){

//property of type
	this.type = type;	
}

//adding a method to the constructor so that it will be global to all function DanDaManTran was here :P heheheh 
Shapes.prototype.get_type = function(){
	console.log ("This shape is" + this.type);
	return;
}

//adding a method to the constructor so that it will be global to all functions
Shapes.prototype.get_totalLength = function () {
	var length = 0;
	if (this.type === 'Triangle'){
		length = this.side1 + this.side2 + this.side3;
	} else if (this.type === 'Square'){
		length = 4 * this.side;
	} else if (this.type === "Pentagon"){
		length = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;

	} return length;
};

//where inheritance occurs from shape to square
Square.prototype = new Shapes ();
// Otherwise instances of square would have a constructor of shape
Square.prototype.constructor = Square;

//shape to triangle
Triangle.prototype = new Shapes ();
Triangle.prototype.constructor = Triangle;

//shape to pentagon
Pentagon.prototype = new Shapes();
Pentagon.prototype.constructor = Pentagon;

//creating variables of each constructor
var triangle1 = new Triangle(3,4,5);
var square1 = new Square(4);
var pentagon1 = new Pentagon(1,2,3,4,5);
var shape = new Shapes("shapes");

//getting different types
console.log (triangle1.get_type());
console.log(triangle1.get_totalLength());
console.log(square1.get_type());
console.log (square1.get_totalLength());
console.log(pentagon1.get_type());
console.log(pentagon1.get_totalLength());
console.log(shape);

// double instanceof works 
console.log(triangle1 instanceof Triangle);
console.log (square1 instanceof Square);
console.log(pentagon1 instanceof Pentagon);
console.log(shape instanceof Shape);






