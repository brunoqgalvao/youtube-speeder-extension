
  Acelerar.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: "document.getElementsByTagName('video')[0].playbackRate = document.getElementsByTagName('video')[0].playbackRate + 0.2;console.log('New Playback Rate');"});
    });
  };

  Freiar.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: "document.getElementsByTagName('video')[0].playbackRate = document.getElementsByTagName('video')[0].playbackRate - 0.2;console.log('New Playback Rate');"});
    });
  };

