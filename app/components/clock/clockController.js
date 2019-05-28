import ClockService from "./clockService.js";

let _clockService = new ClockService()

export default class ClockController {
  constructor() {
    _clockService.beginClock();
  }

};