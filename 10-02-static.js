class Persona {
  constructor(nombre, apellido, edad) {
    this._nombre = nombre
    this._apellido = apellido
    this._edad = edad
  }
  static saludar() {
    console.log("Hola a todos")
  }

  static saludar2(persona) {
    console.log('Hola ' + persona.nombre + ' ' + persona.apellido	)
  }

  get nombre() {
    return this._nombre
  }

  set nombre(nombre) {
    this._nombre = nombre
  }

  get apellido() {
    return this._apellido
  }

  set apellido(apellido) {
    return this._apellido = apellido
  }
}

let persona1 = new Persona('Ash', 'Jimenez', '17');
//El método static se asocia con las clases y no con los objetos
// persona1.saludar(); // No es posible llamar un método static desde un objeto

Persona.saludar();
Persona.saludar2(persona1);
