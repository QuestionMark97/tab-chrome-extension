const btn = document.getElementById('btn');
const declutter = document.getElementById('declutter');
const fiveMin = document.getElementById('5-min-btn');

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

fiveMin.addEventListener('click', () => {
  chrome.runtime.sendMessage({ time: 1000 });
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
