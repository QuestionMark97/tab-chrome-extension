const btn = document.getElementById('btn');
const declutter = document.getElementById('declutter');
const fiveSec = document.getElementById('5-sec-btn');
const fiveMin = document.getElementById('5-min-btn');

fiveSec.addEventListener('click', () => {
  chrome.runtime.sendMessage({ time: 1000 });
});

fiveMin.addEventListener('click', () => {
  chrome.runtime.sendMessage({ time: 5000 });
});

declutter.addEventListener('click', () => {
  chrome.tabs.query({ currentWindow: true }, tabs => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].active === false) {
        chrome.tabs.remove(tabs[i].id);
      }
    }
  });
});
