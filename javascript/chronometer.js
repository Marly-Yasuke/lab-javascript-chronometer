class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback();
      }
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    if (this.currentTime < 60) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    if (this.currentTime > 0) {
      return this.currentTime % 60;
    } else {
      return 0;
    }
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    let result = '0';
    if (value.length < 2) {
      result = result + value;
      return result.slice(0, 2);
    } else if (value.length >= 2) {
      value = value.toString();
      return value.slice(0, 2);
    } else if (value == 0) {
      return '00';
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    document.getElementsByClassName('number').innerHTML = 0;
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds())
    );
  }
}

// Method testing part
// let test = new Chronometer()
// console.log(test.start())
// let showTime = setInterval(()=>{
//   console.log(test.currentTime)
// }, 1000);
// console.log(showTime)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
