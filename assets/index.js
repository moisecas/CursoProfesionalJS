import mediaPlayer from "./mediaplayer.js" 
import AutoPlay from "./plugins/Autoplay.js"

const video = document.querySelector("video")
const player = new mediaPlayer({el:video, plugins:[
    new AutoPlay()
]}); 

const button = document.querySelector("button") 
button.onclick = () => player.togglePlay();

//detectar si el navegador del usuario tiene service worker 

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error =>{ //capturar error
        console.log(error.message) 
    })
}