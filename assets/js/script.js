chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      chrome.tabs.executeScript({
        file: 'assets/js/content.js'
      });
   }
);