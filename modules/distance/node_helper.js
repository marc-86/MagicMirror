"use strict";

/* Magic Mirror
 * Module: MMM-Distance
 *
 * By Marc Hüskens
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
// var usonic = require('r-pi-usonic');

module.exports = NodeHelper.create({	
	start: function() {
		this.distance = 0;	
		this.sensor = null;
		this.timer = null;
		this.config = [];
	},
	
	updateDistance: function (self) {
		// setTimeout(function () {
		// 	self.distance = self.sensor().toFixed(2);
		// }, 60);
		
		//TEST
		self.distance = Math.random();
		
		self.sendSocketNotification("DISTANCE_NEW_DISTANCE", {distance: self.distance});
	},

	initSensor: function (self) {
		this.sensor = null;
		// usonic.init(function (error) {
    	// 	if (error) {
		// 		console.log('Error');
		// 	} else {	
		// 		this.sensor = usonic.createSensor(this.config.echoPin, this.config.triggerPin, this.config.timeout);
		// 		console.log('usonic sensor initialised');
		// 	}
		// };	
	},

	socketNotificationReceived: function(notification, payload) {
		// if (notification === "DISTANCE_UPDATE_DISTANCE") {
		// 	this.updateDistance();			
		// } else if (notification === "SET_CONFIG"){
			
		// 	if (this.timer) {
		// 		clearInterval(this.timer);
		// 	}
		
		// 	this.config.updateInterval = payload.updateInterval;
		// 	this.config.echoPin = payload.echoPin;
		// 	this.config.triggerPin = payload.triggerPin;
		// 	this.config.timeout = payload.timeout;			
		// 	this.initSensor();
			
		// 	this.timer = setInterval(this.updateDistance, this.config.updateInterval, this);
		// };
	},
});
