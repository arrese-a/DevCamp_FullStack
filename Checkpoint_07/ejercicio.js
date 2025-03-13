// Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, 
// luego los dos segundos y multiplícalos. 
// Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
// Si es más pequeño, la consola registra "¡El número es menor que 50!"

function operation(a, b, c, d) {
    result = (a + b) * (c + d)
    if (result > 50) {
        console.log("¡El número es mayor que 50!")
    }else if (result < 50) {
        console.log("¡El número es menor que 50!")
    }
}

operation(5, 3, 1, 9); 


