//tipos de datos 

//boolean 
let muted = true; 
muted = false; 
//muted = "silencio" //error

//numeros 
let age = "6"
let numerador:number = 42;
//let denominador: number = age; //error  
//let resultado = numerador/denominador; Se debe tener muy presente el tipo de dato

//string 
let nombre: string = "moiso"

//arreglos, podemos decidir que sean especificos o diversos
let people: string [] = []; 
people = ["simon", "violeta"];
//people.push(90) //error, no se puede asignar por el tipo de dato
let people2: Array<string|number>=[] //forma de escribir que reciba varios tipos de datos
people2.push("moises", 90) //permitido por como se declaro el array 

//enum 
enum Color {
    rojo = "rojo",
    amarillo="amarillo",
    verde= "verde",  
}
let colorF: Color = Color.verde //debo asignarle uno de los datos especificados

//any para variables, pueden ser lo que desee
let prueba: any = "tayson"; 
prueba = {type:"mohamed"} 

//object 
