class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
    
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let remainingSeconds = this.currentTime % 60;
    return remainingSeconds;
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
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
