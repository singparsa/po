let timerInterval;

function startStudyMode() {
  const minutes = document.getElementById("studyTime").value;

  if (!minutes || minutes <= 0) {
    alert("공부 시간을 입력하세요.");
    return;
  }

  // 검은 집중 화면 표시
  document.getElementById("overlay").style.display = "flex";

  let totalSeconds = minutes * 60;

  updateOverlayTimer(totalSeconds);

  openFullscreen();

  timerInterval = setInterval(() => {
    totalSeconds--;

    updateOverlayTimer(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);

      resetToHome();
    }
  }, 1000);
}

// 검은 화면 타이머 업데이트
function updateOverlayTimer(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");

  document.getElementById("overlayTimer").innerText = `${min}:${sec}`;
}

// 처음 화면으로 복귀
function resetToHome() {
  document.getElementById("overlay").style.display = "none";

  document.getElementById("studyTime").value = "";

  closeFullscreen();
}

// 수면 모드
function startSleepMode() {
  document.getElementById("sleepOverlay").style.display = "flex";

  openFullscreen();
}

// 수면 모드 종료
function exitSleepMode() {
  document.getElementById("sleepOverlay").style.display = "none";

  closeFullscreen();
}

// 전체화면 실행
function openFullscreen() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}

// 전체화면 종료
function closeFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}
