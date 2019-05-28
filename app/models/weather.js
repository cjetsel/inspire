export default class Weather {
  constructor(data) {
    this.city = data.name,
      this.kelvin = data.main.temp,
      this.icon = data.weather[0].icon
  }

  ToFahrenheit(kelvin) {
    let k = kelvin;
    let f = 1.8 * (k - 273) + 32;
    return f.toFixed(0);
  }

  WeatherTemplate() {
    let f = this.ToFahrenheit(this.kelvin) + "°";
    return `
      <div class="row mt-4 text-center justify-content-center">
        <div class="col-2"><img src="assets/img/svg/${this.icon}.svg" class="img-weather" alt=""></div>
        <div class="col-auto align-self-center"><h2 class="pink">${this.city} - ${f}</h2></div>
						</div>`
  }

}