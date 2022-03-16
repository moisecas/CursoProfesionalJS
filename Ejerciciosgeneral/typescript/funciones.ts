//funciones, podemos ser explicitos en los argumentos y proveer el valor que debe retornar la función 

function add (a:number, b: number){
    return a + b; 
}
const sum = add(4,6); 

function createAdder (a:number):(number)=> number { //forma de decirle que va a retornar 
    return function(b:number){
        return b+a;
    }
}
const addfour = createAdder(4)
const fourPlus = addfour(6) 

function fullName (firstName: string, lastName?: string): string{ //usamos ? para permitir que el dato sea opcional
    return `${firstName} ${lastName}`; 
}
const moises = fullName("moiso", "cas"); 