// Funcion Constructor de objetos

function Persona(nombre, apellido, email) {
  // con this.nombre se esta definiendo el atributo nombre (Es como crear una variable de tipo objeto)
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  // Se puede crear métodos o funciones dentro de un constructor
  this.nombrecompleto = function () {
    return nombre + " " + apellido;
  };
}

// al usar prototype se agrega una propiedad con su valor a todos los objetos
Persona.prototype.tel = '2313141';

let padre = new Persona("Luki", "Sor", "Lukisor@hotmail.com");
padre.tel = '317414';
console.log(padre.tel);

let madre = new Persona("Ada", "Garcia", "aditagarcia@hotmail.com");

console.log(madre.tel);

