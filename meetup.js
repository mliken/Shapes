var weather = require('weather-js');

var meetups = function (name, type, networking,location ){

	this.name = name,

	this.type = type,

	this.networking = networking,

	this.location = location,

	this.whatstheweather = function(){
		
	weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  // console.log(JSON.stringify(result, null, 2));
  console.log(result[0].current.skytext);
});
	}

};
module.exports = meetups;