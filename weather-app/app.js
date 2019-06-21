const request = require('request');
const geocode = require('./geocode');
const forecast = require('./forecast');

geocode('auckland', (error, data) => {
	// const uri = 'https://api.darksky.net/forecast/4bdc7f0bc612be8ecc8cfca178c7d0c2/' + data.longitude+ ',' + data.latitude;
	// request({ url: uri, json: true }, (error, response) => {

	// 	if (error) {

	// 		console.log('Unable to connect... ' + error);

	// 	}  else {
	// 		console.log(`Weather forecast for  ${data.location}: `);
	// 		console.log(`There is ${response.body.currently.precipIntensity} % chance of train`);
	// 		console.log(`Temperature is ${response.body.currently.apparentTemperature}`);
	// 	}
	// });
	if (error) {

		return console.log('Unable to connect... ' + error);

	} 

		console.log(`Weather forecast for  ${data.location}: `);
		forecast(data.longitude, data.latitude, (error, data) => {
			if (error) {

				return console.log('Unable to connect... ' + error);

			} 
			console.log(`There is ${data.rain} % chance of train`);
			console.log(`Temperature is ${data.temperature}`);
		
		})
	
});


	
