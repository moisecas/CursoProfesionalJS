//interfaces, para declararla usamos interface, forma exacta en que se define un objeto 
interface Rectangulo {
    ancho: number
    alto: number
}
let rect: Rectangulo = { //requiere los datos especificados anteriormente 
    ancho:4,
    alto:6 
}

function area(r:Rectangulo): number{
    return r.alto * r.ancho;
}

const areaRect = area(rect)
console.log(areaRect); 

