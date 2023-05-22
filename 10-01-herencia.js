
class Persona{
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }
}

class Empleado extends Persona{
  constructor(nombre, apellido,departamento) { // Es importante asignar los parametros que se usarán en super() ya que mediante este se podrá utilizar los atributos y métodos de la clase padre
    super(nombre, apellido); // llamar al constructor de la clase padre
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }
}

let persona1 = new Persona('Lauro', 'Spike');
console.log(persona1)

let empleado1 = new Empleado('Micaela', 'Jimenez', 'Sistemas');
console.log(empleado1);

console.log(empleado1.nombre)