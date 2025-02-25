from decimal import *
import math

# EXERCISE 1: Create a list, tuple, float, integer, decimal, and dictionary.
my_list = ['My', 'First', 'List']
my_tuple = ('This', 'is', 'a tuple')
my_float = 2.46
my_int = 200
my_dec = Decimal(0.04788)
my_dictionary = {
    'Andy' : 26,
    'Jone': 28,
    'Aritz': 20,
    'Leire': 25
}
print(type(my_list))
print(type(my_tuple))
print(type(my_float))
print(type(my_int))
print(type(my_dec))
print(type(my_dictionary))


# EXERCISE 2: Round your float up.
round_float = math.ceil(my_float)
print(round_float)

# EXERCISE 3: Get the square root of your float.
my_sqrt = math.sqrt(my_float)
print(my_sqrt)

# EXERCISE 4: Select the first element from your dictionary.
firts_element = my_dictionary['Andy']
print(firts_element)

# EXERCISE 5: Select the second element from your tuple.
tuple_element = my_tuple[1]
print(tuple_element)

# EXERCISE 6: Add an element to the end of your list.
my_list.append('New element')
print(my_list)

# EXERCISE 7: Replace the first element in your list.
my_list[0] = 'Replacement'
print(my_list)

# EXERCISE 8: Sort your list alphabetically.
my_list.sort()
print(my_list)

# EXERCISE 9: Use reassignment to add an element to your tuple.
my_tuple += ('reassignment in tuple',)
print(my_tuple)