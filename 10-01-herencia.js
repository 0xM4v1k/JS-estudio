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

  nombreCompleto() {
    return this._nombre + ' ' + this._apellido;
  }

  // Sobrescribiendo el método de la clase Padre (Object)
  toString() {
    // Se aplica poliformismo (multiples formas en tiempo de ejecución)
    // El método que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
    return this.nombreCompleto();
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
  // Sobrescritura: Modificar el comportamiento de un método definido de la clase padre
  // Una forma de sobrescritura
  /*
  nombreCompleto() {
    return this._nombre + ' ' + this._apellido + ', ' + this._departamento;
  }
  */
  // Otra forma de sobrescritura
  nombreCompleto() {
    return super.nombreCompleto() + ', ' + this.departamento;
  }
}

let persona1 = new Persona('Lauro', 'Spike');
console.log(persona1)

let empleado1 = new Empleado('Micaela', 'Jimenez', 'Sistemas');
console.log(empleado1);

console.log(empleado1.nombre);

// Heredar métodos

console.log(empleado1.nombreCompleto());

// Sobre escribir el metodo toString en la clase padre para poder visualizar la información en un navegador
console.log(empleado1.toString())