/* global Module */

/* Magic Mirror
 * Module: MMM-PIR-Sensor
 *
 * By Paul-Vincent Roll http://paulvincentroll.com
 * MIT Licensed.
 */

Module.register('PIR-Sensor',{
	
	defaults: {
		sensorPIN: 27,
	},
	
	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === "SENSOR_ACTIVATED"){
			console.log("got WHOOOPed !" + notification);
			this.sendNotification(notification, payload);
		}
	},
	
	start: function() {
		this.sendSocketNotification('CONFIG', this.config);
		Log.info('Starting module: ' + this.name);
	},

});