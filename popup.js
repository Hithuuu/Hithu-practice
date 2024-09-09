document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('activate').addEventListener('click', function () {
    // Get the currently active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tab = tabs[0];
      let tabId = tab.id;

      // Check if the current tab's URL is restricted
      if (tab.url.startsWith('chrome://') || tab.url.startsWith('https://chrome.google.com')) {
        alert('Cannot inject script into this page.');
        return;
      }

      // Inject the content script into the valid page
      chrome.scripting.executeScript({
        target: { tabId: tabId, allFrames: true },
        files: ['content.js']
      });
    });
  });
});

