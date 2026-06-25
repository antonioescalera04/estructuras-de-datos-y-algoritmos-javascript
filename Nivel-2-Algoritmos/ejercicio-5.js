//Ejercicio 5 palindromo
// ¿Qué es un palíndromo?
// Una palabra, frase o número que se lee igual de izquierda a derecha
// que de derecha a izquierda (ignorando espacios, mayúsculas y
// tildes en versiones más complejas).

//VERSION 1.0

function esPalindromo(palabra){

    const palabraArray = Array.from(palabra);
    console.log(palabraArray);

    let delReves = []
    for (let i = palabra.length -1; i >= 0; i--){
        delReves.push(palabra[i]);
    }
    console.log(delReves);

    delReves = delReves.join('');


    if (palabra == delReves) {
        console.log("son iguales")
    }else {
        console.log("no son iguales")
    }

return delReves;
};

console.log(esPalindromo("patata"));

// Opcion limpia

function esPalindromo2(palabra) {
    const palabraLimpia = palabra.toLowerCase();
    const delReves = palabraLimpia.split('').reverse().join('');
    
    if (palabraLimpia === delReves) {
        console.log("son iguales")
    }else {
        console.log("no son iguales")
    }

}

console.log(esPalindromo2("reconocer"));
