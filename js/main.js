const key = 'b6a2765a75f8c77f0b0da08c03ea337c';

function weatherBallon( cityName ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	//var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
	var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
	if( description.indexOf('rain') > 0 ) {
		document.body.className = 'rainy';
	} else if( description.indexOf('cloud') > 0 ) {
		document.body.className = 'cloudy';
	} else if( description.indexOf('sunny') > 0 ) {
		document.body.className = 'sunny';
	} else {
		document.body.className = 'clear';
	}
}
