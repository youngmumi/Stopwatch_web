let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  const millis = time % 1000;

  return (
    String(hrs).padStart(2, '0') + ':' +
    String(mins).padStart(2, '0') + ':' +
    String(secs).padStart(2, '0') + '.' +
    String(millis).padStart(3, '0')
  );
}

function printTime() {
  document.getElementById('time').textContent = timeToString(elapsedTime);
}

function start() {
  if (timerInterval) return;
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    printTime();
  }, 50); // 적절한 갱신 주기
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  printTime();
}

function setTheme(themeName) {
  document.body.className = themeName;
}