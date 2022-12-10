const btnStart = document.getElementById("btnStarter");
const time = document.getElementById("time");

const startingMinutes = 10;
let totalTime = startingMinutes * 60;

function countDown() {
  const minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  totalTime--;
  time.innerHTML = `${minutes}:${seconds == 0 ? "0" + seconds : seconds}`;
}

btnStart.addEventListener("click", function () {
  setInterval(countDown, 1000);
});
