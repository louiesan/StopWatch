let sTime = 0;
let eTime = 0;
let running = false;
let timer = null;
let lap;
let index = 0;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let flag = document.getElementById("lap");
let laps = document.getElementById("laps");
let display = document.getElementById("display");

start.onclick = function () {
  if (!running) {
    sTime = Date.now() - eTime;
    timer = setInterval(Update, 1);
    running = true;
    console.log("worked");
  }
};

stop.onclick = function () {
  eTime = Date.now() - sTime;
  clearInterval(timer);
  running = false;
};

reset.onclick = function () {
  clearInterval(timer);
  sTime = 0;
  eTime = 0;
  running = false;
  lap = undefined;
  index = 0;
  laps.innerHTML = "";
  display.textContent = "00:00:00:00";
};

flag.onclick = function () {
  if (lap !== undefined) {
    index++;
    let p = document.createElement("p");
    laps.appendChild(p);
    p.textContent = `${index}-  +${lap}`;
    console.log(lap);
  }
};
function Update() {
  eTime = Date.now() - sTime;
  //   console.log(Date.now());
  //   console.log(sTime);
  //   console.log(eTime);

  let hours = Math.floor(eTime / (1000 * 60 * 60));
  let minute = Math.floor((eTime / (1000 * 60)) % 60);
  let seconds = Math.floor((eTime / 1000) % 60);
  let milliseconds = Math.floor((eTime % 1000) / 10);

  hours = hours.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  milliseconds = milliseconds.toString().padStart(2, "0");
  lap = `${hours}:${minute}:${seconds}:${milliseconds}`;
  display.textContent = lap;
}
