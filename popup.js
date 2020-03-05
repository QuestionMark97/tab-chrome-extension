let btn = document.querySelector('.btn');
console.log(btn);
btn.onclick = function closeTab() {
  // get second tab
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    let current = tabs[1];
    chrome.tabs.remove(current.id);
  });
};
