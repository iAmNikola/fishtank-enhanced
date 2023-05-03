const buttonsDiv = document.getElementById('div_buttons');
const btFullscreen = document.getElementById('bt-fullscreen');
const btAllWithAudio = document.getElementById('bt-all-with-audio');
const btToggleFooter = document.getElementById('bt-footer');
const btLiveThumbs = document.getElementById('bt-live-thumbs');
const btLeftSidebar = document.getElementById('bt-left-sidebar');
const btChat = document.getElementById('bt-chat');
const killChatLink = document.getElementById('bt-kill-chat');


btFullscreen.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/fullscreen.js'});
    });
  };

btAllWithAudio.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/allWithAudio.js'});
    });
  };

btToggleFooter.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/messageFooter.js'});
    });
  };

btLiveThumbs.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/liveThumbs.js'});
    });
  };

  killChatLink.onclick = function(el) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/killChat.js'});
    });
  };

// btLeftSidebar.onclick = function(element) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {file: 'js/leftSidebar.js'});
//     });
//   };
// 
// btChat.onclick = function(element) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {file: 'js/chat.js'});
//     });
//   };
