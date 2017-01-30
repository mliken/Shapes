var Shapes = require('./shapes.js');
var Triangle = require('./triangle.js');
var Square = require('./square.js');
var Pentagon = require('./pentagon.js');

//creating new child objects for each Triangle, Sqaure and Pentagon constructors
var triangle1 = new Triangle(3,4,5);
var pentagon1 = new Pentagon(1,2,3,4,5);
var square1 = new Square(4);

//getting different types
console.log (triangle1.get_type());
console.log(triangle1.get_totalLength());
console.log(square1.get_type());
console.log (square1.get_totalLength());
console.log(pentagon1.get_type());
console.log(pentagon1.get_totalLength());
console.log(shapes);


// double checking instanceof works 
console.log(triangle1 instanceof Triangle);
console.log (square1 instanceof Square);
console.log(pentagon1 instanceof Pentagon);
console.log(shapes instanceof Shapes);




