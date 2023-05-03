// Author: Sean

var leftSidebarLogoElement = null;
var leftSidebarUserPanelElement = null;
var leftSidebarButtonsElement = null;
var leftSidebarCamListElement = null;
var chatElement = null;
var videoElement = null;
var styleEl = null;
var STYLE_ID_FULLSCREEN = `#custom_style_element_xx`;

var videoStyleOverrideGridColumn = '1 / -1';


// Find the relevant HTML elements in the page
function getHtmlElements() {
  if (leftSidebarLogoElement === null) {
      leftSidebarLogoElement = document.getElementsByClassName('Logo_logo___yD0t')[0];
  }
  if (leftSidebarUserPanelElement === null) {
      leftSidebarUserPanelElement = document.getElementsByClassName('UserPanel_user-panel__ZKfKU')[0];
  }
  if (leftSidebarButtonsElement === null) {
      leftSidebarButtonsElement = document.getElementsByClassName('AdditionalLinksPanel_additional-links-panel__Rz5nY')[0];
  }
  if (leftSidebarCamListElement === null) {
      leftSidebarCamListElement = document.getElementsByClassName('LiveStreamsList_live-streams-list___Dfsg')[0];
  }
  if (chatElement === null) {
      chatElement = document.getElementsByClassName('Chat_chat__Bdojy Chat_hidden__M1NIH')[0];
  }
  if (videoElement === null) {
      videoElement = document.getElementsByClassName('MainPanel_main-panel__imCh9')[0];
  }
  if (styleEl == null) {
    styleEl = document.querySelector(STYLE_ID_FULLSCREEN);
  }
};


// Make the cameras/video pane fill the page
function enableFullscreen() {
  getHtmlElements();
  
  // Hide left sidebar elements
  leftSidebarLogoElement.style.display = 'none';
  leftSidebarUserPanelElement.style.display = 'none';
  leftSidebarButtonsElement.style.display = 'none';
  leftSidebarCamListElement.style.display = 'none';
  
  // Hide chat
  if (chatElement) chatElement.style.display = 'none';
  
  // Make camera feeds fill the window
  videoElement.style.gridColumn = videoStyleOverrideGridColumn;
};


// Restore original page layout
function disableFullscreen() {
  getHtmlElements();
  // Remove style overrides
  leftSidebarLogoElement.style.display = '';
  leftSidebarUserPanelElement.style.display = '';
  leftSidebarButtonsElement.style.display = '';
  leftSidebarCamListElement.style.display = '';
  if (chatElement) chatElement.style.display = '';
  videoElement.style.gridColumn = '';
  if (styleEl) styleEl.remove();
};


// Check if fullscreen is enabled
function isFullscreenEnabled() {
  getHtmlElements();
  return (videoElement != null) && (getComputedStyle(videoElement)['grid-column'] == videoStyleOverrideGridColumn);
}


// Enable/disable fullscreen camera pane
function toggleFullscreen() {
  if (isFullscreenEnabled()) {
    disableFullscreen();
  } else {
    enableFullscreen();
  }
};


toggleFullscreen();
