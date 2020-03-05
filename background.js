// chrome.commands.onCommand.addListener(command => {
//   if (command === 'close-tab') {
//     chrome.tabs.query({ currentWindow: true }, tabs => {
//       for (let i = 0; i < tabs.length; i++) {
//         if (tabs[i].active === false) {
//           setTimeout(() => {
//             chrome.tabs.remove(tabs[i].id);
//           }, 1000);
//         }
//       }
//     });
//   }
// });
