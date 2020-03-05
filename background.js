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

chrome.commands.onCommand.addListener(function(command) {
  if (command == 'close-tab') {
    // get second tab
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      let current = tabs[1];
      console.log(tabs);
      chrome.tabs.remove(13);
    });
  }
});
