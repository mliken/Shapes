'strict'
//import content of Square.js
var Square = require('./Square');

//import content of Triangle.js
var Triangle = require('./Triangle');

//import content of Pentagon.js
var Pentagon = require('Pentagon');

function Shape(type){

//property of type
	this.type = type;	
}

//adding a method to the constructor so that it will be global to all function DanDaManTran was here :P heheheh 
Shapes.prototype.get_type = function(){
	console.log ("This shape is" + this.type);
	return;
}

//adding a method to the constructor so that it will be global to all functions
Shapes.prototype.get_c

