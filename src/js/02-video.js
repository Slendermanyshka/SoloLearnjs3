import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const player = new Player(document.querySelector("iframe"));

player.on('play', function() {
    console.log('played the video!');
});

player.on('loaded',function(){
  console.log(`Resumed from last part: ${localStorage.getItem("videoplayer-current-time")}`)
  player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
})

throttle( player.on('timeupdate', function(){
  player.getCurrentTime().then (function(seconds){
    localStorage.setItem("videoplayer-current-time", seconds)
  })
}),1000);
