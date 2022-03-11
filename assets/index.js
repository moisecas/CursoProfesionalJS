import mediaPlayer from "./mediaplayer.js" 
import AutoPlay from "./plugins/Autoplay.js"

const video = document.querySelector("video")
const player = new mediaPlayer({el:video, plugins:[
    new AutoPlay()
]}); 

const button = document.querySelector("button") 
button.onclick = () => player.togglePlay();