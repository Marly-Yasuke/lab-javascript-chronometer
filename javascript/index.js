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

function printTime() {
  // ... your code goes here
}

function printMinutes() {}
function printSeconds() {
}

// ==> BONUS
function printMilliseconds() {

}

function clearSplits() {
}

function setStopBtn() {
  btnLeftElement.classList.remove('btn', 'start');
  btnLeftElement.classList.add('btn', 'stop');
  btnLeftElement.textContent = 'STOP';
chronometer.stop()
}


function setStartBtn() {
  btnLeftElement.classList.remove('btn', 'stop');
  btnLeftElement.classList.add('btn', 'start');
  btnLeftElement.textContent = 'START';
chronometer.start()
}

function setSplitBtn() {
btnRightElement.classList.remove('btn', 'reset')
btnRightElement.classList.add('btn', 'split')
btnRightElement.textContent = 'SPLIT'
}

function setResetBtn() {
  btnRightElement.classList.remove('btn', 'split')
  btnRightElement.classList.add('btn', 'reset')
btnRightElement.textContent = 'RESET'
}

// only switch to stop => in this case run both, code to implement
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
  }else{
    setStartBtn()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
 if(btnRightElement.classList.contains('reset')){
  setSplitBtn()
 }else{
  setResetBtn()
 }
});
