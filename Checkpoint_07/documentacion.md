## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

JavScript (JS) es uno de los lenguajes de programación más populares, especialmente en el desarrollo web, debido a que tiene varias características que lo hacen diferente. Este lenguaje se utiliza para crear interactividad en las páginas web (ej. cuando se hace clic sobre un botón y sucede algo). Características principales:

#### 1. Lenguaje interpretado y ejecutado en el navegador
JavaScript es un lenguaje interpretado, esto significa que el navegador web puede leer y ejecutar directamente el código.

#### 2. Lenguaje basado en eventos (Event-driven)
Un evento es cualquier acción que ocurre en la página, como puede ser hacer clic en un botón o escribir en un campo de texto. Por tanto, a través de estos eventos se logra la interactividad y JS se usa principalmente para ese objetivo, para agregar esa interactividad a la página web.

Como ejemplo, en el siguiente bloque de código, cuando llega el evento "click" se muestra un mensaje emergente. 

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Evento en JavaScript</title>
</head>
<body>
    <button id="miBoton">Haz clic aquí</button>
    <script>
        document.getElementById("miBoton").addEventListener("click", function() {
            alert("Esta es la ventana emergente al hacer clic");
        });
    </script>
</body>
</html>
```

#### 4. Es la Base para el Desarrollo Web Front-End
Este lenguaje se utiliza principalmente en el lado del usuario, es decir, se ejecuta en el navegador del usuario. Mientras que HTML y CSS definen la estructura y el diseño de la página web, JavaScript hace que la página se interactiva.
 
#### 3. Asincrónico
Esta es una de las diferencias clave respecto a los otros lenguajes. JavaScript es un lenguaje asíncrono, es decir, puede ejecutar tareas en segundo plano sin detener el resto de la aplicación, esto hace que JS sea ideal para el desarrollo web, donde se requiere que las páginas respondan rápidamente.

El siguiente código muestra un ejemplo con setTimeout. Este `setTimeout` hace que pare esa función durante 2 segundos (2000 ms). Como se puede ver en el resultado, aunque se detenga en esa función, el resto de código se sigue ejecutando; así, `"Han pasado 2 segundos"` se muestra en la pantalla después de `"Fin"`.

```
console.log("Inicio");

setTimeout(function() {
    console.log("Han pasado 2 segundos");
}, 2000);

console.log("Fin");
```

Resultado:

```
Inicio
Fin
Han pasado 2 segundos
```



## ¿Cuáles son algunos tipos de datos JS?

* **Número**: se usa para representar valores numéricos enteros o decimales. 

```
var edad = 25;  // Número entero
var temperatura = 36.6;  // Número decimal
console.log(edad + temperatura);  // 61.6
```

* **String**: son cadenas de texto, representan secuencias de caracteres. 

```
var nombre = "Ainhoa";
console.log("Hola " + nombre);
```

* **Boolean**: solo tiene dos valores posibles `true` o `false`. Se utiliza para representar valores lógicos, por ejemplo para controlar flujos de programación (condiciones).

```
var esAdmin = true;
if (esAdmin){
    console.log("Puedes editar este campo");
} else{
    console.log("Necesitas ser administrador");
}
```

* **Array**: se utiliza para almacenar varios valores en una sola variable. Los datos dentro del array pueden ser de diferentes tipos de datos, es decir, un array puede contener todo tipo de objetos. Se usa para guardar colecciones de datos, por ejemplo, una lista de nombres. 

```
var arrayMezclado = ["Este es un string", 3.4, true, "Otro string"];
console.log(arrayMezclado[1]); // 3.4
console.log(arrayMezclado[3]); // "Otro string"
```

* **Objeto**: en una colección de datos, pero en este caso, los datos se almacenan en pares de clave-valor, es decir, como un diccionario en python. Es muy útil para agrupar datos relacionados, por ejemplo agrupar todos los datos de una persona en un solo objeto. Los datos pueden llamarse individualmente, no hace falta llamar al objeto entero cuando solo se quiere un elemento. 

```
var usuario = {
  nombre: "Ainhoa",
  edad: 30,
  ciudad: "Donostia"
};

console.log(usuario.nombre); // "Ainhoa"
```

* **null**: este tipo de datos no tienen ningún valor, es decir, son datos vacíos. Se utiliza para indicar que una variable no tiene ningún valor asignado. 

```
var vacio = null;
console.log(vacio); // null
```

* **undefined**: un elemento será de este tipo cuando se define, pero no se le asigna ningún valor.

```
var valorUndefined;
console.log(valorUndefined); // undefined
```

## ¿Cuáles son las tres funciones de String en JS?

JavaScript ofrece tres funciones muy importantes para manipular las cadenas `String`:
1. `String.length`: 
Esta función permite saber el número de caracteres de la cadena de texto o string. Se utiliza cuando se quiere saber el tamaño del string, por ejemplo, cuando se quiere mostrar el número de caracteres que tiene un mensaje. Se utiliza de la siguiente manera:

```
var texto = 'Hola!';
conole.log(texto.length); // 5
``` 

2. `String.toUpperCase()`:
Este método se usa cuando se quieren convertir todos los caracteres de un string a mayúsculas. Esto puede ser útil, por ejemplo, para estilizar un texto en una página web. Es necesario colocar paréntesis cuando se llama la función.

```
var texto = 'buenos días';
conole.log(texto.toUpperCase()); // BUENOS DÍAS
```

3. `String.toLoweCase()`:
Es el método contrario a `toUpperCase()`. Esta función pone en minúsculas todos los caracteres del string. Se emplea para hacer comparación de texto sin importar si el usuario introduce mayúsculas o minúsculas.

```
var texto = 'BUENOS DÍAS';
conole.log(texto.toUpperCase()); // buenos días
```

## ¿Qué es un condicional?

Los condionales permiten ejecutar diferentes bloques de código dependiendo si se cumple o no una condición específica. En otras palabras, dependiendo de si una expresión es verdadera o falsa se pueden tomar decisiones y realizar diferentes acciones en base a ello.
Los condicionales permiten crear código más dinámico y fleible ya que la ejecución es diferente dependiendo de los datos que se reciben o las situaciones que se presenten.

Par ello, la estructura más básica es `if`, aquí se define una condición, y si es verdadera (`true`), se ejecuta el bloque dentro de las llaves. En el siguiente bloque se prueba si el numero es mayor a 10. Si esa condición se cumple se ejecuta `console.log`. 

```
var numero = 11;
if (numero > 10) {
    console.log("El número es mayor a 10");
}
```

Por otro lado, cuando se quiere ejecutar algo cuando la condición no se cumple se usa el condicional `if` junto a `else`. Dentro de `if`irá el bloque que debe ejecutarse cuando se cumple la condición mientras que el bloque `else` definirá el código a ejecutar cuando la condición no se cumple (`false`).

```
var numero = 11;
if (numero > 10) {
    console.log("El número es mayor a 10");
} else {
    console.log("El número es menor o igual a 10");
}
```

Por último, cuando se quieren comprobar más de una condición, se puede usar una combinación de `if`con `else if`.

```
var numero = 11;
if (numero > 10) {
    console.log("El número es mayor a 10");
} else if (numero == 10) {
    console.log("El número es 10");
} else {
        console.log("El número es menor a 10");
}
```
 
## ¿Qué es un operador ternario?

El operador ternario es una forma más abreviada de escribir un condicional. En vez de usar varias líneas, el operador ternario permite comprobar la condición y devolver un valor en una sola línea de la siguiente manera:

```
condición ? expresión_true : expresión_false;
```

Siguiendo el ejemplo anterior:

```
var numero = 11
var resultado = numero > 10 ? "El número es mayor a 10" : "El número es menor o igual a 10";
console.log(resultado);     // El número es mayor a 10
```

Este tipo de operador permite reducir las líneas de código, ya que refleja los condicionales en una sola línea. Sin embargo, en condiciones complicadas o expresiones largas, la lectura puede ser compleja y hace que el código sea más difícil de entender.
Por lo tanto, los operadores ternarios son aconsejables en condiciones simples, de fácil comprensión. 
 
## ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

Una **declaración de función** es la forma más común de definir una función. Una vez definida una función con su nombre, cuando se ejecuta el código ya se sabe que la función existe y está disponible para ser llamada. Se usa cuando se quiere definir la función de una manera clara y cuando se necesita que la función esté disponible a lo largo del código. 

La declaración de función se hace de la siguiente manera:

```
function saludo() {
    console.log('Hola!');
}

saludo(); // Hola!
```

Las funciones definidas de esta manera son "elevadas" (hoisted), lo que significa que se puede llamar a la función antes de haberla definido siempre que la función esté declarada a su alcance. El siguiente ejemplo funciona perfectamente aunque la función es declarada después de ser llamada.

```
saludo(); // Hola!


function saludo() {
    console.log('Hola!');
}
```

Por otro lado, una **expresión de función** es cuando se define una función como parte de una expresión. Normalmente, se usa cuando se asigna una función a una variable o cuando se pasa como argumento a otra función. Se utiliza cuando se quiere tratar la función como un valor.

```
var funcionEnVariable = function() {
  console.log("¡Hola esto es una expresión de función!");
};

funcionEnVariable(); // ¡Hola esto es una expresión de función!
```

Este tipo de funciones no son elevadas (hoisted), es decir, es necesario declarar la función antes de ser llamada. 
 
## ¿Qué es la palabra clave "this" en JS?

La palabra `this` hace referencia al contexto en el que se está ejecutando la función; es decir, es una referencia al entorno donde se llama una función. Permite acceder a las propiedades y métodos del objeto en el que se está trabajando. 

El valor de `this` se determina cuando se ejecuta la función, no cuando se define, por lo tanto, depende de cómo y dónde se usa. En el siguiente ejemplo se puede ver cómo se usa `this`para acceder a los elementos del propio objeto. Se utiliza `this` para acceder tanto a `titulo` como a `acceso`, que son definidos dentro del objeto `guia`. 

```
var guia = {
    titulo: 'Questionario 3',
    acceso: 'Acceso permitido',
    permisoUsuario: function(rolUsuario) {
        if (rolUsuario == 'admin')  {
            return true;
        } else {
            return false;
        }
    },
    respuesta: function(rolUsuario) {
        if(this.permisoUsuario(rolUsuario)){
            return (this.titulo + ' - ' + this.acceso);
        } else {
            this.acceso = ' ';
            return (this.titulo + ' - ' + this.acceso);
        }
    }
}

user1 = {rol: 'admin'};
console.log(guia.respuesta(user1.rol));
user2 = {rol: 'estudiante'};
console.log(guia.respuesta(user2.rol));
```
Por otro lado, también se emplea esta palabra clave en eventos, por ejemplo hacer clic en un botón. En un manejador de eventos, como puede ser una página HTML, `this`hace referencia al elemento HTML que activa el evento. 

A continuación se muestra el ejemplo de un botón. Cuando el usuario clica el botón, se ejecuta el manejador de eventos y `this`se referirá al botón clicado. 

```
<button id="miBoton">Haz clic</button>

<script>
  document.getElementById("miBoton").addEventListener("click", function() {
    console.log(this);  // hace referencia al botón que se hizo clic
  });
</script>
```