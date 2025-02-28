# Documentación Checkpoint 5

## Condicionales

Los condionales permiten ejecutar diferentes bloques de código dependiendo si se cumple o no una condición específica. En otras palabras, dependiendo de si una expresión es verdadera o falsa se pueden tomar decisiones y realizar diferentes acciones en base a ello. 

Par ello, la estructura más básica es `if`, que se puede combinar con `elif` si se quiere añadir otra condición específica y con `else`.

Como ejemplo, en el siguiente código hemos tomado una decisión en base a la edad. Si la edad es mayor a 18 se ejecuta una parte del código y si es menor otra parte.
En este caso, se imprime `Eres mayor de edad` si se cumple la primera condición, es decir, si la variable `edad` es mayor o igual a 18. Se imprime `Eres menor de edad` si `edad` es inferior a 18, es decir, no se cumple la condición de `if`.

```
edad = 20
if edad >= 18:
    print('Eres mayor de edad')
else: 
    print('Eres menor de edad')
```

## Bucles

Los bucles permiten ejecutar un bloque de código una y otra vez hasta que se cumple una condición. Los bucles son útiles porque permiten repetir tareas evitando la repetición de código, esto hace que el código sea más eficiente, limpio y fácil de mantener. 

Para ello, python cuenta con dos tipos de bucles: `for` y `while`. El primero es útil cuando se sabe cuántas veces se va a repetir el código o si se quiere iterar sobre una lista o secuencia. Por otro lado, `while` es útil cuando no se sabe cuántas veces se va a repetir el código, pero se quiere iterar el bucle hasta cumplir una condición específica. 

###  `for`: 
Este bucle se emplea cuando se sabe cuántas veces tiene que repetirse el código o cuando se quiere iterar sobre una secuencia. Por ejemplo, si tenemos una lista con 5 elementos, y queremos realizar alguna acción sobre cada elemento, sabemos que se iterará 5 veces. 

En el siguiente ejemplo, teniendo la lista `num_list`, se realiza el bucle que se repetirá por cada elemento, en este caso, se imprime cada número de la lista. 

```
num_list = [1, 2, 3, 4, 5]
for num in num_list:
    print(num)

# Output:
# 1
# 2
# 3
# 4
# 5
```

### `while`:
En este bucle, se repite un bloque de código mientras se cumpla una condición, es decir, el momento en que la condición no se cumpla, dejara de iterarse sobre el bucle. 

Por ejemplo, en el siguiente código, se imprimirán los números mientras que se cumpla la condición `num < 4`, es decir, en el momento que `num` sea mayor o igual a 4, se parará la iteración. 

```
num = 0
while num < 4:
    print(num)
    x += 1

# Output:
# 1
# 2
# 3
# 4
```

## Lista por comprensión

La lista por comprensión consiste en crear listas configurando bucles `for` y condicionales, es decir, se aplica un bucle y una condición en una sola línea de código para crear una lista. 
Permiten reducir y agilizar el código la mismo tiempo que permiten escribir un código más compacto y legible. 

En el siguiente ejemplo se crea una lista de números pares con el método "tradicional", separando bucle y condicional en diferentes líneas. Primero se itera sobre la lista inicial, y se comprueba la condición por cada número; así, solo se añadirán a la lista `numeros_pares` los números que sean divisibles por 2. 

```
num_list = range(1, 11)

numeros_pares = []
for num in num_list:
    if num % 2 == 0:
        numeros_pares.append(num)

numeros_pares = [num for num in num_list if num % 2 == 0]

print(numeros_pares)  # Output: [2, 4, 6, 8, 10]
```
Este ejemplo se puede reducir en una única línea con las listas por comprensión. Se itera sobre la lista `num_list` y solo se añaden a la lista los números que cumplen la condición, es decir, los números divisibles por 2. 

```
numeros_pares = [num for num in num_list if num % 2 == 0]
```

## Argumentos

Un argumento es un valor que se pasa a una función cuando se llama. Permiten crear funciones dinámicas, es decir, funciones que realizan operaciones basadas en los valores dados. 

Cuando se crea una función se especifican los parámetros, es decir, los nombres que aparecen en la definición de la función. Después, cuando se llama a la función, se pasan los argumentos, los valores que se asignan a los parámetros.

En el siguiente ejemplo, `nombre`y `apellido` serán los argumentos de la función mientras que `Juan` y `Lopez` serán los argumentos.
 
```
def greeting(nombre, apellido):
    print(f'Hola, {nombre} {apellido}!')

greeting('Juan', 'Lopez')
```

## Función Lambda

Es una herramienta que permite encapsular una función en una variable. Normalmente son funciones simples y pequeñas. La ventaja de las funciones lambda es que son muy móviles y fáciles de usar. La estructura de estas funciones es la siguiente:

```
lambda argumentos: expresión
```
Los argumentos son los parámetros que recibe la función, mientras que la expresión es la operación que realiza la función, determina lo que devuelve la función. 

A continuación, se muestra una función básica tradicional:

```
def sumar (x, y):
    return x + y

print(sumar(4, 6)) # Output: 10
```

Esta función simple de suma se puede simplificar en una función lambda de la siguiente manera:

```
sumar = lambda x, y: x + y
print(sumar(4, 6)) # Output: 10
```

## Paquete pip

Un paquete pip es un conjunto de módulos que se puede instalar y gestionar mediante `pip`. `pip` ("Pip Installs Packages") es la herramienta estándar para python que se utiliza para instalar, actualizar y administrar paquetes.

El paquete pip contiene código en python que implementa alguna función específica. Por ejemplo, el paquete `numpy` es una librería popular para cálculos numéricos. Con este paquete, por ejemplo, se pueden crear matrices y realizar cálculos sobre ellos. 

En resumen, los pequetes pip son paquetes que permiten agregar funcionalidades sin tener que escribir el código desde cero. 