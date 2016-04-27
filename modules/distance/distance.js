Module.register("Distance",{

	// Default module config.
	defaults: {
		text: "New Distance"
        
	},

    var distance = 0;
	var usonic = require('r-pi-usonic');
	var sensor = null;

	usonic.init(function (error) {
		if (error) {
			Log.info('Error');
		} else {
			sensor = usonic.createSensor(14, 15, 450);
			Log.info('usonic sensor initialised');
		}
	});
	
	var refreshDistance = function () {
		setTimeout(function () {
			this.distance = sensor().toFixed(2);
			console.log('Distance: ' + this.distance + ' cm');
		}, 60);
	}
	
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = "Distanz: " + this.distance;
		  return wrapper;
	}
    
    onStart: function() {
		Log.info("Starting module: " + this.name);		

		// Schedule update interval.
		var self = this;
		setInterval(function() {
		    self.refreshDistance();
			self.updateDom();
		}, 1000);
    }
});
