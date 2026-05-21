let timerInterval;

function startStudyMode() {
  const minutes = document.getElementById("studyTime").value;

  if (!minutes || minutes <= 0) {
    alert("공부 시간을 입력하세요.");
    return;
  }

  document.getElementById("overlay").style.display = "flex";

  let totalSeconds = minutes * 60;

  updateTimer(totalSeconds);

  timerInterval = setInterval(() => {
    totalSeconds--;

    updateTimer(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);

      alert("집중 시간이 종료되었습니다!");

      exitMode();
    }
  }, 1000);

  openFullscreen();
}

function updateTimer(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');

  document.getElementById("timer").innerText = `${min}:${sec}`;
}

function exitMode() {
  clearInterval(timerInterval);

  document.getElementById("overlay").style.display = "none";
}

function startSleepMode() {
  document.getElementById("sleepOverlay").style.display = "flex";

  openFullscreen();
}

function exitSleepMode() {
  document.getElementById("sleepOverlay").style.display = "none";
}

function openFullscreen() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}
