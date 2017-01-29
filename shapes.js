'strict';
//importing content of Square.js
var Square = require('./Square');

//importing content of Triangle.js
var Triangle = require('./Triangle');

//importing content of Pentagon.js
var Pentagon = require('./Pentagon');

function Shapes(type){

//property of type
	this.type = type;	
}

//adding a method to the constructor so that it will be global to all function 
Shapes.prototype.get_type = function(){
	console.log ("This shape is" + this.type);
	return;
}

//adding a method to the constructor so that it will be global to all functions
Shapes.prototype.get_totalLength = function () {
	console.log(this);
	var length = 0;
	if (this.type === 'Triangle'){
		length = this.side1 + this.side2 + this.side3;
	} else if (this.type === 'Square'){
		length = 4 * this.side;
	} else if (this.type === "Pentagon"){
		length = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;

	} return length;
};


//creating new child objects for each Triangle, Sqaure and Pentagon constructors
var triangle1 = new Triangle(3,4,5);
var pentagon1 = new Pentagon(1,2,3,4,5);
var square1 = new Square(4);
//var shapes = new Shapes("shapes");

//getting different types
console.log (triangle1.get_type());
console.log(triangle1.get_totalLength());
console.log(square1.get_type());
console.log (square1.get_totalLength());
console.log(pentagon1.get_type());
console.log(pentagon1.get_totalLength());
//console.log(shapes);


// double checking instanceof works 
console.log(triangle1 instanceof Triangle);
console.log (square1 instanceof Square);
console.log(pentagon1 instanceof Pentagon);
//console.log(shapes instanceof Shapes);






