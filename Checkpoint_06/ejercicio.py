#  Cree una clase de Python llamada Usuario que use el método init y 
# cree un nombre de usuario y una contraseña. Crea un objeto usando la clase.

class Usuario:
    def __init__(self, nombre, psw):
        self.nombre = nombre
        self.psw = psw

usuario_1 = Usuario('Ainhoa', '12345asd')

print(usuario_1.nombre)
print(usuario_1.psw)