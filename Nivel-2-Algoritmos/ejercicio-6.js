// Encuentra el número que más veces aparece.
const numbers = [1,1,2,3,3,3,4,4];
function contarRepes(arr){
    const contador = {}

    for (let number of numbers) {
        if (contador[number]) {
                contador[number]++
            } else {
                contador[number] = 1;
            } 
        
    }
    
    let numeroMaximo = null;
    let repesMaximas = 0;

    for (let clave in contador) {
        if (contador[clave] > repesMaximas) {
            repesMaximas = contador[clave];
            numeroMaximo = clave;
        }
    }

    return `El numero ${numeroMaximo} es el que mas aparece siendo ${repesMaximas} el numero de veces repetidas`
}
console.log(contarRepes(numbers));