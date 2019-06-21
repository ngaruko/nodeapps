
const request = require('request');
const geocode = (location, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoibmdhcnVrbyIsImEiOiJjand2OXB5YXMwMzVlNGFvbXlnZmJhcnlmIn0.I72ZbQGBRsohPMLHo7Riug&limit=1`;
	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('Something went wrong', undefined);

		} else if (response.body.features.length === 0) {
			callback('Something went wrong', undefined);

		} else {
			const data = response.body;
			const place = data.features[0].place_name.split(',');
			//console.log(`Weather forecast for ${place[0]}, ${place[2]}`);
			const coordinates = data.features[0].geometry.coordinates;
			callback(undefined, {
				latitude: data.features[0].geometry.coordinates[0],
				longitude: data.features[0].geometry.coordinates[1],
				location: `${place[0]}, ${place[2]}`
			});

		}

	});

};

module.exports = geocode;