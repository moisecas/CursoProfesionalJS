//autoplay, scroll pause y play. IntersectionObserver observa un elemento y mira su posicición
//le vamos a pasar un objeto de configuración para que pause o autoplay 

class autoPause {
    constructor(){ //acá defino el threshold 
        this.threshold = 0.25; //que porcentaje del elemento debe tener el contenedor, cada vez que cruce ese limite es el momento de IntersectionObserver hacer lo suyo, pause o play
        this.handleIntersection = this.handleIntersection.bind(this); //usamos bin para hacer permanente this a la instancia del objeto
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this); 
    }

    
    run(player) { //todos los plugin tiene un metodo run 
        this.player = player; //guardamos el player en una instancia de la clase     

        const observer = new IntersectionObserver(this.handleIntersection, { //lo creamos, recibe dos argumentos, el handler y el objeto de configuración
          threshold: this.threshold  //define que porcentaje del elemento debe tener intersección con el contenedor
        
        })
        observer.observe(this.player.media);  //va a observar el media
        
        document.addEventListener("visibilitychange", this.handleVisibilityChange)//video se pausa al cambiar de pestaña
    }
    handleIntersection (entries){ //todos los objetos que estamos observando 
        const entry = entries[0];
        
        const isVisible = entry.IntersectionRatio >= this.threshold //tenemos que ver la intersección, lo guardo en una variable 
//creo un ciclo para validar en que momento pause o play. 
        if (isVisible){
            this.player.play()
            
        }else {
            this.player.pause() 

        }
        handleVisibilityChange() { 
            const isVisible = document.visibilityState === "visible";
            if (isVisible) {
                if(this.pausedByVisibility) {
                    this.pausedByVisibility = false;
                    this.player.play()
                }
            } else {
                if(!this.player.media.paused) {
                    this.pausedByVisibility = true;
                    this.player.pause()
                }
            }
        }
        
         
       
    } 
}

export default autoPause; //se debe exportar