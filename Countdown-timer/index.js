const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const time = document.getElementById("time");

startButton.addEventListener('click',start);
pauseButton.addEventListener('click',pause);
stopButton.addEventListener('click',stop);
let intervalID = null;
let seconds = 0;
function timeCB(){
    seconds++;
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds-(hrs*3600))/60);
    let secs = seconds%60;

    if(secs<10) secs = "0"+ secs
    if(mins<10) mins = "0"+ mins
    if(hrs<10) hrs = "0"+ hrs

    time.innerText = `${hrs}:${mins}:${secs}`

}
function start(){
    //create interval
    stopButton.disabled = false;
    pauseButton.disabled = false;
    startButton.disabled = true;
    if(intervalID){
        return
    }
    //existing 1 2 3 4
    intervalID = setInterval(timeCB,1000);
}

function pause(){
    clearInterval(intervalID);
    intervalID = null;
    if(pauseButton.innerText == "Pause"){
        pauseButton.innerText = "Contiune";

    } else {
        pauseButton.innerText = "Pause";
        start();
    }

}

function stop(){
    //stop interval
    clearInterval(intervalID);
    intervalID = null;
    seconds = 0;
    time.innerText ="00:00:00";
    stopButton.disabled = true;
    pauseButton.disabled = true;
    startButton.disabled = false;

}