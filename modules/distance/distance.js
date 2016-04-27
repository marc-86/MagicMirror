Module.register("Distance",{

	// Default module config.
	defaults: {
		text: "New Distance"
        
	},

	var five = require("johnny-five");
	var prox = null;
	
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		  return wrapper;
	}
    
    onStart: function() {
		Log.info("Starting module: " + this.name);

		

		// Schedule update interval.
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, 1000);
    }
});
