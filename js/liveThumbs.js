// Author: Sean

var LIVE_THUMBS_TOGGLE_ELEMENT_ID = 'improverLiveThumbsElement';
var FETCH_INTERVAL = 1500;  // Milliseconds

var toggleElement = null;
var thumbContainers = null;
var thumbImgs = null;
var thumbsNullified = true;

// Find the relevant HTML elements in the page
function getHtmlElements() {
  if (document.getElementsByClassName('LiveStreamsFullScreen_live-streams-full-screen__KpCZv').length > 0) {
    thumbsNullified = true;
  } else {
    if (toggleElement === null) {
      toggleElement = document.getElementById(LIVE_THUMBS_TOGGLE_ELEMENT_ID);
      if (toggleElement === null) {
        toggleElement = document.createElement('span');
        toggleElement.id = LIVE_THUMBS_TOGGLE_ELEMENT_ID;
        toggleElement.liveThumbsInitialized = false;
        toggleElement.liveThumbsEnabled = false;
        document.body.appendChild(toggleElement);
      }
    }
    if (thumbContainers === null || thumbsNullified) {
      thumbContainers = document.getElementsByClassName('LiveStreamsGridItem_thumbnail__LAKyg');
    }
    if (thumbImgs === null || thumbsNullified) {
      thumbImgs = [];
      for (let i = 0; i < thumbContainers.length; i++) {
        thumbImgs.push(thumbContainers[i].getElementsByTagName('img')[0])
      }
    }
    thumbsNullified = false;
  }
  
};


function updateThumbs() {
  setTimeout(() => {
    getHtmlElements();
    
    if (!thumbsNullified) {
      toggleElement.liveThumbsInitialized = true;
      
      if (toggleElement.liveThumbsEnabled) {
        //console.log('Updating thumbnails');
        for (let i = 0; i < thumbImgs.length; i++) {
          if (thumbImgs[i]) {
            let src = thumbImgs[i].src;
            let ampIdx = src.lastIndexOf('&');
            if (ampIdx >= 0) {
              src = src.substring(0, ampIdx);
            }
            src += ('&improver=' + Date.now());
            thumbImgs[i].src = src;
          }
        }
      }
    }
    
    updateThumbs();
    
  }, FETCH_INTERVAL);
};


if (document.getElementsByClassName('LiveStreamsFullScreen_live-streams-full-screen__KpCZv').length == 0) {
  getHtmlElements();
  if (!toggleElement.liveThumbsInitialized) {
    updateThumbs();
  }
  toggleElement.liveThumbsEnabled = !toggleElement.liveThumbsEnabled;
  let logMsg = 'Live thumbnails ';
  if (toggleElement.liveThumbsEnabled) {
    logMsg += 'enabled';
  } else {
    logMsg += 'disabled';
  }
  console.log(logMsg);
} else {
  alert('Thumbnails not available while large video feed is active.');
}
