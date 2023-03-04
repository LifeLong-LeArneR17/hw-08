import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);

// player.on('timeupdate', function (data) {
//     const currentTime = data.seconds;
//     localStorage.setItem('videoplayer - current - time', currentTime);
// });




// const savedTime = localStorage.getItem('videoplayer - current - time');
// player.setCurrentTime(savedTime).then(function (seconds) {
//     // ваш код
// });



const playerVideo = document.querySelector('#vimeo-player');
const player = new Player(playerVideo);
const videoplayerTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

const onPlay = function (data) {
    localStorage.setItem(
        'videoplayer-current-time',
        JSON.stringify(data.seconds)
    );
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(videoplayerTime).then(function (seconds) {
    // seconds = the actual time that the player seeked to
});