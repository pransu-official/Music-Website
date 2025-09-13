let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
masterplay.addEventListener('click' , ()=>{ 
    if(audioElement.paused || audioElement.currentTime <=0){  
        audioElement.play();
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        gif.style.opacity = 0;
    }     

})
