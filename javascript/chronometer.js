
class Chronometer {
  constructor() {
this.currentTime = 0;
this.intervalId = null
  }


  start(callback) {

    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if(callback){
        callback();
      }

    }, 1000);
}
getMinutes() {
  // ... your code goes here
  if (this.currentTime < 60){
    return 0;
  } else {
    return Math.floor(this.currentTime / 60)
  }
}

  getSeconds() {
   if(this.currentTime > 0){
    return this.currentTime % 60
   }else {
    return 0
   }
  }

  computeTwoDigitNumber(value) {
    value = value.toString
    let result ="0"
if(value.length < 2){
  return result + value
}else{
  return value
}
  }

  stop() {
   clearInterval(this.intervalId)
  }

  reset() {
   this.currentTime = 0
document.getElementsByClassName('number').innerHTML = 0
  }

  split() {
   return this.getMinutes + ':' + this.getSeconds
  }
}
console.log(Chronometer)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
