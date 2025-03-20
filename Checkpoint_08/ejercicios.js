// -Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”
const miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (let name of miLista) {
    console.log(name);
}

// -Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.
let i = 0;
while (i < miLista.length){
    console.log(miLista[i]);
    i++;
}

// -Cree una función de flecha que devuelva "Hola mundo".
const saludo = () => {return "Hola mundo";}
console.log(saludo());
