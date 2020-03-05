const btn = document.querySelector('.btn');
console.log(btn);
btn.onclick = function closeTab() {
  // get second tab
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs.active === false) {
        setTimeout(() => {
          chrome.tabs.remove(tabs[i].id);
        }, 2500);
      }
    }
  });
};
