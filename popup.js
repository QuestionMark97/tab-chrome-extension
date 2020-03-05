const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  chrome.runtime.sendMessage({ whitelist: [] });
});
