# Ejercicio 1: Cree un bucle For de Python.

print('Ejercicio 1:')
for num in range(1,11):
    print(num)


# Ejercicio 2: Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3.

def suma(primero, segundo, tercero):
    return primero + segundo + tercero

print('Ejercicio 2:')
print(suma(4,6,8))

# Ejercicio 3: Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear.

total = lambda primero, segundo, tercero: primero + segundo + tercero
print('Ejercicio 3:')
print(total(1, 2, 3))

# Ejercicio 4: -Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o no con un valor de la lista. *Sugerencia, si es necesario, utilice un bucle for in y el operador in.

nombre = 'Enrique'
lista_nombre = 'Jessica', 'Paul', 'George', 'Henry', 'Adán'
nombre_en_lista = nombre in lista_nombre  # Si el nombre está en la lista devuelve 'True', si no 'False'
print('Ejercicio 4:')
print(nombre_en_lista)  
