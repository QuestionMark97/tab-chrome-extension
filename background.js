// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ whitelist: [] });
// });
class Tabs {
  constructor() {
    this.initDate = new Date();
    this.timer = null;
    this.time = 0;
  }

  createTimer(time) {
    if (this.timer === null) {
      this.timer = setInterval(() => {
        chrome.runtime.sendMessage({ value: time / 1000 - ++this.time });
        if ((this.time) * 1000 === time) {
          this.removeTabs();
          this.clearTimer();
        }
      }, 1000);
      this.initDate = new Date();
    } // else this.editTimer(time);
  }

  removeTabs() {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].active === false) chrome.tabs.remove(tabs[i].id);
      }
    });
  }

  clearTimer() {
    clearInterval(this.timer);
    this.timer = null;
    this.time = 0;
    chrome.runtime.sendMessage({ value: 0 });
  }

  // editTimer(newTime) {
  //   // this.clearTimer();
  //   // const elapsed = new Date() - this.initDate;
  //   // if (elapsed > newTime) {
  //   //   this.removeTabs(newTime - elapsed);
  //   // }
  // }
}

const tabs = new Tabs();

chrome.runtime.onMessage.addListener((message) => {
  if (message.hasOwnProperty('time')) {
    tabs.createTimer(message.time);
  } else if (message.hasOwnProperty('clear')) {
    tabs.clearTimer();
  }
});
