// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ whitelist: [] });
// });
class Tabs {
  constructor() {
    this.initDate = new Date();
    this.timer = 0;
  }

  removeTabs(time) {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].active === false) this.createTimer(tabs[i].id, time);
      }
    });
  }

  createTimer(tabId, time) {
    this.timer = setTimeout(() => {
      chrome.tabs.remove(tabId);
    }, time);
    this.initDate = new Date();
  }

  editTimer(newTime) {
    clearTimeout(this.timer);
    const elapsed = new Date() - this.initDate;
    if (elapsed > newTime) {
      removeTabs(newTime - elapsed);
    }
  }
}

const tabs = new Tabs();

chrome.runtime.onMessage.addListener(() => tabs.removeTabs(1000));
