Module.register("distance",{

	defaults: {
        updateInterval: 200,
		echoPin: 14,
		triggerPin: 15,
		timeout: 750,
	},
    
	start: function() {
		this.sendSocketNotification("SET_CONFIG", this.config);
		// this.sendSocketNotification("DISTANCE_UPDATE_DISTANCE", 0);
        Log.info("Starting module: " + this.name);
	},

	getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.distance;
        return wrapper;
	},
    
	socketNotificationReceived: function(notification, payload) {
		if (notification === "DISTANCE_NEW_DISTANCE") {
            this.distance = payload.distance;
			this.updateDom();
		}
	},
    
});
