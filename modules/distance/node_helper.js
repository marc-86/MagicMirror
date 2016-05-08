var NodeHelper = require("node_helper");

// var usonic = require('r-pi-usonic');

module.exports = NodeHelper.create({

	// Override start method.
	start: function() {
		var self = this;
        var distance = 0;
	
        var sensor = null;

		console.log("Starting node helper for: " + this.name);
	},



	// usonic.init(function (error) {
    // 	if (error) {
	// 		console.log('Error');
	// 	} else {
	// 		sensor = usonic.createSensor(14, 15, 450);
	// 		console.log('usonic sensor initialised');
	// 	}
	// });
	// 	var refreshDistance = function () {
	// 	setTimeout(function () {
	// 		service.distance = sensor().toFixed(2);
	// 		console.log('Distance: ' + service.distance + ' cm');
	// 	}, 60);
	// }

	// service.distance = function () {
	// 	return service.distance;
	// };
	// 	return service
});
