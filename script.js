let sound = document.getElementById('sound');
let controlsId = document.querySelector('#control');
let musicBar = document.getElementById('music-range');


function playPause(){
    if (controlsId.classList.contains('fa-play')){
        sound.play();
        
        controlsId.classList.add('fa-pause');
        controlsId.classList.remove('fa-play');
        
    }

    else{
        sound.pause();
        controlsId.classList.add('fa-play');
        controlsId.classList.remove('fa-pause');
        
    }
}

sound.onloadedmetadata = function(){
    musicBar.max = sound.duration;
    musicBar.value = sound.currentTime;

}

if (sound.play()){
    setInterval(() => {
        musicBar.value = sound.currentTime;
    }, 200);
}


musicBar.onchange = function(){
    sound.play()
    sound.currentTime = musicBar.value;
}


// footer========


let time = document.getElementById('year');

yearDate = new Date().getFullYear();

time.innerHTML = 'All Rights Reserved ' + yearDate





  