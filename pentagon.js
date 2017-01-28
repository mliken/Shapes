var Shapes = require('./Shapes.js');

//create a Square constructor,, using length as parameter
function Pentagon (length1, length2, length3, length4, length5){

	//properties
	 this.type = "Pentagon";
	 this.length1 = length1;
	 this.length2 = length2;
	 this.length3 = length3;
	 this.length4 = length4;
	 this.length5 = length5;
};

//export the Pentagon function
module.exports = Pentagon;