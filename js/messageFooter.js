// Author: Sean

var chatElement = null;
var videoElement = null;
var messageFooterElement = null;

var styleOverrideGridRow = '1 / -1';


// Find the relevant HTML elements in the page
function getHtmlElements() {
  if (chatElement === null) {
      chatElement = document.getElementsByClassName('Chat_chat__Bdojy Chat_hidden__M1NIH')[0];
  }
  if (videoElement === null) {
      videoElement = document.getElementsByClassName('MainPanel_main-panel__imCh9')[0];
  }
  if (messageFooterElement === null) {
      messageFooterElement = document.getElementsByClassName('Footer_footer__Dhw_9')[0];
  }
};


// Restore the message/announcement footer at the bottom of the screen
function enableMessageFooter() {
  getHtmlElements();
  // Remove style overrides
  messageFooterElement.style.display = '';
  videoElement.style.gridRow = '';
  if (chatElement) chatElement.style.gridRow = '';
};


// Hide the message/announcement footer at the bottom of the screen
function disableMessageFooter() {
  getHtmlElements();
  
  // Increase height of video/chat panes
  videoElement.style.gridRow = styleOverrideGridRow;
  if (chatElement) chatElement.style.gridRow = styleOverrideGridRow;
  
  // Hide footer element
  messageFooterElement.style.display = 'none';
};


// Check if message/announcement footer is enabled
function isMessageFooterEnabled() {
  getHtmlElements();
  return (videoElement != null) && (getComputedStyle(videoElement)['grid-row'] != styleOverrideGridRow);
}


// Enable/disable message/announcement footer
function toggleMessageFooter() {
  if (isMessageFooterEnabled()) {
    disableMessageFooter();
  } else {
    enableMessageFooter();
  }
};


toggleMessageFooter();
