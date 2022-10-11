class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) printTimeCallback();
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let remainingSeconds = this.currentTime / 100;
    return remainingSeconds;
  }

  getCentiseconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 10;
    }
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();
    if (valueString.length === 2) {
      return valueString;
    } else if (value === 0) {
      valueString = "00";
      return valueString;
    } else {
      valueString = "0" + valueString;
      return valueString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let formattedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let formattedSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let formattedCentiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${formattedMinutes}:${formattedSeconds}.${formattedCentiSeconds}`;
  }
}
