const btn = document.querySelector('.btn');
const declutter = document.getElementById('declutter');

btn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ whitelist: [] });
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
