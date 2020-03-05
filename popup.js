const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  chrome.tabs.query({ currentWindow: true }, tabs => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].active === false) {
        setTimeout(() => {
          chrome.tabs.remove(tabs[i].id);
        }, 1000);
      }
    }
  });
});
