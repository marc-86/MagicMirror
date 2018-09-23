/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'Kalender',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'https://calendar.google.com/calendar/ical/1ongjafuhtohge0om9q0p70nbo%40group.calendar.google.com/private-3e265cd53bc6e4198e56d25a98b52734/basic.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Eschweiler',
				appid: 'cf75c38780f8a019aa5de48d17cd39a9'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'Eschweiler',
				appid: 'cf75c38780f8a019aa5de48d17cd39a9'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "Tagesschau",
						url: "http://www.tagesschau.de/xml/rss2"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: 'MMM-Traffic',
			position: 'bottom_right',
			classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
			config: {
				api_key: 'AIzaSyBVRrfpaE_YLtHe2nYyQqLpbiYmEsi1uXg',
				mode: 'driving',
				origin: 'Kathy-Beys-Straße 2, 52249 Eschweiler',
				destination: 'Hansemannplatz, Aachen',
				route_name: 'Home to Work',
				changeColor: true,
				showGreen: false,
				limitYellow: 10,
				limitRed: 20,
				traffic_model: 'pessimistic',
				interval: 120000, //2 minutes
                prependText: ' '
			}
		},
		{
			module: 'MMM-PIR-Sensor',
			config: {
				sensorPIN:27,
			}
		},
		// {
		// 	module: 'MMM-Podcast',
		// 	config: {
		// 		// See 'Configuration options' for more information.
		// 	}
		// },
		//{
		//	module: 'PIR-Sensor',
		//	config: {
		//		sensorPIN:22,
		//	}
		//},
		// {
        // 	module: 'distance',
        // 	position: 'top_center',
        // 	header: 'Distanz',
		// }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') { module.exports = config; }
