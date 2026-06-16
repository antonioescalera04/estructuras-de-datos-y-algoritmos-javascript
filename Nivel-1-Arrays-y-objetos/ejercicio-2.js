//Crea una función que reciba un texto y devuelva cuántas veces aparece cada palabra.
function contarPalabras(texto) {
   const palabras = texto.split(' '); 

   //objeto que va a guardar los pares clave valor.
   const contador = {};

    for (let i of palabras) {
        if (contador[i]) {
            contador[i]++
        } else {
            contador[i] = 1;
        }  
    }

    return contador;

};

console.log(contarPalabras("hola esto es un string"));

//Estuve probando erróneamente con for in y devolvia indices.
//Ahora con el for of devuelve valores;
//Ha servido para poner en practica lo aprendido.