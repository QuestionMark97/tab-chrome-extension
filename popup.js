const declutter = document.getElementById('declutter');

const cancelTimer = document.getElementById('clear-timer-btn');
const display = document.getElementById('timer');
const hr = document.getElementById('hr-input');
const min = document.getElementById('min-input');
const sec = document.getElementById('sec-input');
const timeButton = document.getElementById('time-input-button');

const timeArr = [];

// Timed declutter
timeButton.addEventListener('click', () => {
  const time = ((hr.value * 60 + min.value) * 60 + sec.value) * 1000;
  timeArr.push(time);
  chrome.runtime.sendMessage({ time: timeArr[0] });
});

// Clear timer
cancelTimer.addEventListener('click', () => {
  chrome.runtime.sendMessage({ clear: true });
});

// Instant declutter
declutter.addEventListener('click', () => {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].active === false) {
        chrome.tabs.remove(tabs[i].id);
      }
    }
  });
});

// Display timer
chrome.runtime.onMessage.addListener((message) => {
  if (message.hasOwnProperty('value')) display.value = formatTime(message.value);
});

function formatTime(seconds) {
  let s = seconds;
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  s -= m * 60;
  m -= h * 60;
  s = (s < 10) ? `0${s}` : s;
  m = (m < 10) ? `0${m}` : m;
  h = (h < 10) ? `0${h}` : h;
  return `${h}:${m}:${s}`;
}
