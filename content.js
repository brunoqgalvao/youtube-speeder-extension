function addPlaybackControl(event) {
    rate =document.zz('video')[0].playbackRate;
     if (event.keyCode === 38) {
         rate = rate + 0.2;console.log('New Playback Rate' + rate);event.preventDefault();
        };
     if (event.keyCode === 40) {
         rate = rate - 0.2;console.log('New Playback Rate' + rate);
     event.preventDefault();
        }
     document.getElementsByTagName('video')[0].playbackRate = rate;
    };
document.addEventListener('keydown',addPlaybackControl);
console.log('New Playback Rate');