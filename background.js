// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({ color: '#3aa757' }, function() {
//     console.log('The color is green.');
//   });
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { hostEquals: 'developer.chrome.com' }
//           })
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()]
//       }
//     ]);
//   });
// });

chrome.commands.onCommand.addListener((command) => {
  if (command === 'close-tab') {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].active === false) {
          setTimeout(() => {
            chrome.tabs.remove(tabs[i].id);
          }, 1000);
        }
      }
    });
  }
});
