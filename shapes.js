'strict';

//creating shape function
var Shapes = function() {
    this.type = type
}
// adding method to Shape: returns type fo shape
	Shapes.prototype.get_type = function() {
	console.log(this.constructor)
};

//adding a method to the constructor so that it will be global to all functions
//Shapes.prototype.get_sides = function () {
//	console.log(this);
//	var length = 0;
//	if (this.type === 'Triangle'){
//		length = this.side1 + this.side2 + this.side3;
//	} else if (this.type === 'Square'){
//		length = this.side * this.side;
//	} else if (this.type === "Pentagon"){
//		length = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;

//	} return length;
//};


module.exports = Shapes;



