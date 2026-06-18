//Ejercicio 3: Usuario más mayor

/*
tengo que acceder a personas, quedarme con el valor de
la propiedad edad del indice 0,
creo variable de acumulacion
if el index 0 > variable, variable guarda [i];
*/

function mayorEdad() {
    const personas = [
    { nombre: "Luis", edad: 25 },
    { nombre: "María", edad: 40 },
    { nombre: "Pedro", edad: 35 }
    ];

    let acumuladorPersonaMayor = personas[0];
    for (let persona of personas) {
        if ( persona.edad > acumuladorPersonaMayor.edad ) {
            acumuladorPersonaMayor = persona;
        }
    }
    
    return acumuladorPersonaMayor;

}

console.log(mayorEdad());
