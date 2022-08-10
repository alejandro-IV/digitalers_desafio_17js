//Cree una función llamada  function gastoConIva() que acepte un número 
// y devuelva ese número más el 21% que es el valor del IVA.

const gastoConIva = (precio) => {
    return precio + (precio * 0.21);   
}
//Guardo en una variable el resultado
calculoIva = gastoConIva;
console.log(calculoIva(100));


//Luego crea una function map() que tome dos entradas o parámetros:
//Un array de como valores números. 
//Una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
//Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar 
//la función callback en cada elemento de la matriz de entrada.

numeros = [3, 7, 9, 17, 23, 45, 98, 122, 350]

// Guardo en una varible la función map
const func = numeros.map(function (numero) {
    // Devuelvo nuevo array
    return numero
})

console.log(numeros)
console.log(func)