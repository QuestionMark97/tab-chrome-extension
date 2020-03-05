// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ whitelist: [] });
// });
class Tabs {
  constructor() {
    this.initDate = new Date();
    this.timer = [];
  }

  removeTabs(time) {
    if (this.timer[0] === undefined) {
      console.log('hi');
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].active === false) this.createTimer(tabs[i].id, time);
        }
      });
    } else this.editTimer(time);
  }

  createTimer(tabId, time) {
    this.timer.push(setTimeout(() => {
      chrome.tabs.remove(tabId);
      this.timer = [];
    }, time));
    this.initDate = new Date();
  }

  clearTimers() {
    for (let i = 0; i < this.timer.length; i++) clearTimeout(this.timer[i]);
    this.timer = [];
  }

  editTimer(newTime) {
    // this.clearTimers();
    // const elapsed = new Date() - this.initDate;
    // if (elapsed > newTime) {
    //   this.removeTabs(newTime - elapsed);
    // }
  }
}

const tabs = new Tabs();

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);

  tabs.removeTabs(message.time);
});
