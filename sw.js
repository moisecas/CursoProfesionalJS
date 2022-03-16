const VERSION = "v1"

//self es como el this pero para los serviceworker
//llama al navegador cuando se active, el callback va a atener un evento
//le damos una lista de recursos, de lo que esta en cache para regresarlo al navegador. Espera a que el precache se complete
self.addEventListener('install', event =>{
    event.waitUntil(precache())
}) 

//otra petición para los fetch, cada vez que corra una petición haga algo
//capturar la petición, capturar la aplicación get, tambien buscamos en el cache para ver si la tenemos o no
self.addEventListener('fetch', event =>{
    const request = event.request;
    if (request.method !== "GET"){
        return; 
    }
    //buscar en cache
    event.respondWith(cacheRespose(request))

    //actualzar el cache 
    event.waitUntil(updateCache(request))
}); 



//function precache, debemos utilizar una parte de la api del dom, caches
//recibe una promesa, declarar como async 
async function precache(){
    const cache = await caches.open(VERSION)
    cache.addAll([ //todos nuestros recursos, todo lo que hemos escrito 
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/ejercicio.mp4',
    ]) 
}

async function cacheRespose (request){
    const cache = await caches.open(VERSION)//await va con async
    const response = await cache.match(request) //le estamos preguntando a cache ¿ya tienes una copia para request? 
    return response || fetch(request) //es necesario devolver algo
}

async function updateCache (request){
    const cache = await caches.open(VERSION)//await va con async
    const response = await fetch(request);
    return cache.put(request,response);  
}