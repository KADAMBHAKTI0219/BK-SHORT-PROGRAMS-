const month = document.querySelector(".date h1");
const fullDate = document.querySelector(".date p");
const daysEl = document.querySelector(".days");
const timeEl = document.getElementById("time");

const monthInx = new Date().getMonth();
const year = new Date().getFullYear();
const lastDay = new Date(year, monthInx + 1, 0).getDate();
const firstDay = new Date(year, monthInx, 1).getDay();

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

month.innerText = months[monthInx];
fullDate.innerText = new Date().toDateString();

let days = "";
for (let i = 0; i < firstDay; i++) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  const today = i === new Date().getDate() && monthInx === new Date().getMonth();
  days += `<div class="${today ? "today" : ""}">${i}</div>`;
}
daysEl.innerHTML = days;

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeEl.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();
