// Author: Sean

var THUMB_CONTAINER_CLASS = 'LiveStreamsGridItem_thumbnail__LAKyg';

function getVidThumbnailByTitle(title) {
    title = title.toLowerCase();
    var thumbContainers = document.getElementsByClassName(THUMB_CONTAINER_CLASS);
    for (let i = 0; i < thumbContainers.length; i++) {
      if (title == thumbContainers[i].parentNode.childNodes[1].textContent.toLowerCase()) {
        return thumbContainers[i];
      }
    }
    return null;
};

// Minimize the currently-expanded video pane while retaining audio/video feed
function showAllWithAudio() {
  var bigVidTitle = document.getElementsByClassName('LiveStreamsFullScreen_name__TtYJX')[0];
  var bigVidPlayer = document.getElementsByClassName('LiveStreamsCloudflarePlayer_live-streams-player__OCZ2v')[0];
  var bigVidCloseBt = document.getElementsByClassName('LiveStreamsControls_close__n2r_s')[0];
  
  if (!(bigVidPlayer && bigVidTitle && bigVidCloseBt)) {
    alert('Failed to find enlarged video feed.');
    return;
  }
  
  bigVidTitle = bigVidTitle.textContent;
  bigVidPlayer = bigVidPlayer.childNodes[0].childNodes[0];
  bigVidCloseBt.click();
  
  setTimeout(() => {
    var thumbEl = getVidThumbnailByTitle(bigVidTitle);
    thumbEl = thumbEl.getElementsByTagName('img')[0];
    // @TODO: Allow clicking the live video to re-enlarge it
    thumbEl.parentNode.replaceChild(bigVidPlayer, thumbEl);
    bigVidPlayer.src = bigVidPlayer.src.replaceAll('controls=false','controls=true')
  }, 500);
};


// Code for original site layout
//function showAllWithAudio() {
//  const clazz = 'LiveStreamsGridItem_full-screen__fnIDM';
//  var bigVidElement = document.getElementsByClassName(clazz)[0];
//  if (bigVidElement) {
//    bigVidElement.classList.remove(clazz);
//  } else {
//    alert('Failed to find enlarged video feed.');
//  }
//};

showAllWithAudio();
