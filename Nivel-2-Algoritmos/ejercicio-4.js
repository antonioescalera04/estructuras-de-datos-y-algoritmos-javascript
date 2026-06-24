//Algoritmos
//Eliminar duplicados
const numeros = [1, 2, 3, 2, 4, 1, 5];

let noDuplicates = []
for (let numero of numeros) {
    
    if (!noDuplicates.includes(numero)) {
        noDuplicates.push(numero);
    }
}

console.log(noDuplicates)

