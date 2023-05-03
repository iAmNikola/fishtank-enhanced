// Author: Sean

var leftSidebarLogoElement = null;
var leftSidebarUserPanelElement = null;
var leftSidebarButtonsElement = null;
var leftSidebarCamListElement = null;


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
};


function disableLeftSidebar() {
  getHtmlElements();
  
  // Hide left sidebar elements
  if (leftSidebarLogoElement) leftSidebarLogoElement.style.display = 'none';
  if (leftSidebarUserPanelElement) leftSidebarUserPanelElement.style.display = 'none';
  if (leftSidebarButtonsElement) leftSidebarButtonsElement.style.display = 'none';
  if (leftSidebarCamListElement) leftSidebarCamListElement.style.display = 'none';
};


// Restore original page layout
function enableLeftSidebar() {
  getHtmlElements();
  // Remove style overrides
  if (leftSidebarLogoElement) leftSidebarLogoElement.style.display = '';
  if (leftSidebarUserPanelElement) leftSidebarUserPanelElement.style.display = '';
  if (leftSidebarButtonsElement) leftSidebarButtonsElement.style.display = '';
  if (leftSidebarCamListElement) leftSidebarCamListElement.style.display = '';
};


// Check if fullscreen is enabled
function isLeftSidebarEnabled() {
  getHtmlElements();
  return (leftSidebarLogoElement != null) && (leftSidebarLogoElement.style.display != 'none');
}


// Enable/disable fullscreen camera pane
function toggleLeftSidebar() {
  if (isLeftSidebarEnabled()) {
    disableLeftSidebar();
  } else {
    enableLeftSidebar();
  }
};


toggleLeftSidebar();
