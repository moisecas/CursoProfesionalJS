// target es mi objeto a supervisar (sus propiedades pueden ser objetos, array, funciones, u otro proxy)
const target = {
    red: 'Rojo',
    blue: 'Azul',
    green: 'Verde'
}
// handler es un objeto con funciones (trampa) que definen las acciones a seguir cuando se accede al objeto supervisado
const handler = {
    // get es una función que recibe el objeto supervisado y la propiedad a la que se quiere acceder
    get(objeto, propiedad) {
        if (propiedad in objeto) {
            // si la propiedad existe, pues retornamos su valor
            return objeto[propiedad]
        }

        // Si llega hasta aqui, significa que la propiedad invocada sobre el objeto no existe, por tanto, vamos a ver si podemos retornar una sugerencia
        const sugerencia = Object.keys(objeto).find(key => {
            // creo un objeto con todas mis claves del objeto supervisado, y retorno aquella (nombre) que su distancia sea <= 3 tomando como base la propiedad invocada
            return Levenshtein.get(key, propiedad) <= 3
        })

        if (sugerencia) {
            console.log(`${propiedad} no se encontró, Quizá tu querías decir ${sugerencia}`)
        }

        // RETORNAMOS EL VALOR DE LA PROPIEDAD INEXISTENTE (por buenas prácticas)
        return objeto[propiedad]
    }
}


// 1. Proxy() es un constructor (que siempre debe utilizarse con new) que recibe dos parámetros:
        // targer: un objeto sobre el cual se producirá la supervisión
        // handler: un objeto con una serie de manejadores para cada una de las diferentes operaciones que se realizarán sobre el objeto pasado en el primer parámetro
// 2. Este constructor devuelve el objeto pasado como parámetro, pero que está siendo interceptado. Es importante tener en cuenta que Proxy() no copia el objeto, devuelve el mismo objeto, pero supervisado.
const p = new Proxy(target, handler)


console.log(p.red)
console.log(p.res)