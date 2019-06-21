const request = require('request');
const forecast = (latitude, longitude, callback) => {
	const uri = 'https://api.darksky.net/forecast/4bdc7f0bc612be8ecc8cfca178c7d0c2/' + latitude + ',' + longitude;
	request({ url: uri, json: true }, (error, response) => {

		if (error) {

			callback('Unable to connect... ', undefined);

		} else if (response.body.error) {

			callback('Unable to find location with  ' + uri, undefined);

		} else {
			callback(undefined, {
				rain: response.body.currently.precipIntensity,
				temperature: response.body.currently.apparentTemperature
			});
		}
	});

};




