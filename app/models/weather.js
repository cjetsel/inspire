export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.icon = data.weather[0].icon
  }

  ToFahrenheit(kelvin) {
    let k = kelvin;
    let f = 1.8 * (k - 273) + 32;
    return f.toFixed(0);
  }

  WeatherTemplate() {
    let f = this.ToFahrenheit(this.kelvin) + "°"
    return `
      <div class="row justify-content-center">
        <div class="col-4"><h2>${f}</h2></div>
        <div class="col-8"><h2>${this.city}</h2></div>
						</div>`
  }

}