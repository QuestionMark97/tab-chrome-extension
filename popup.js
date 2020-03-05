const btn = document.getElementById('btn');
const declutter = document.getElementById('declutter');
const fiveSec = document.getElementById('5-sec-btn');
const fiveMin = document.getElementById('5-min-btn');

const time = document.getElementById('time-input');
const timeButton = document.getElementById('time-input-button');

const timeArr = [];

// Timed declutter
timeButton.addEventListener('click', () => {
  timeArr.push(time.value);
  chrome.runtime.sendMessage({ time: timeArr[0] });
});

fiveSec.addEventListener('click', () => {
  chrome.runtime.sendMessage({ time: 1000 });
});

fiveMin.addEventListener('click', () => {
  chrome.runtime.sendMessage({ time: 5000 });
});

// Instant declutter
declutter.addEventListener('click', () => {
  chrome.tabs.query({ currentWindow: true }, tabs => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].active === false) {
        chrome.tabs.remove(tabs[i].id);
      }
    }
  });
});
