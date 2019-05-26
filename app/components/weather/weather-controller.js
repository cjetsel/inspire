import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let weather = _weatherService.Weather;
	let template = weather.WeatherTemplate();
	document.getElementById("weather").innerHTML = template;
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
