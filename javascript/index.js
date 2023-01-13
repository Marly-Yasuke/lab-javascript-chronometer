const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');
console.log(chronometer.stop())

function printTime() {
  // ... your code goes here
}

function printMinutes() {

}
function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}



function setStopBtn() {
// if(btnLeftElement.classList.contains('btn', 'start')){
  btnLeftElement.classList.toggle('btn', 'start')
  btnLeftElement.classList.toggle('btn', 'stop')
  btnLeftElement.textContent = 'STOP'
  chronometer.start()
  console.log('stop')

// }
}
function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
// if(btnLeftElement.classList.contains('btn', 'stop')){
    btnLeftElement.classList.toggle('btn', 'stop')
    btnLeftElement.classList.toggle('btn', 'start')
    btnLeftElement.textContent = 'START'
    chronometer.stop()
    console.log('start')


// }
}

function setResetBtn() {

}

// only switch to stop => in this case run both, code to implement
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

 setStartBtn()
 setStopBtn()
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
