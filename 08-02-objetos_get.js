// Método get

let persona = {
  nombre: 'Ada',
  apellido: 'Garcia',
  edad: '17',
  correo: 'adagarcia@gmail.com',
  numero: '91843148131',
  idioma: 'es',
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
   },
  
  get nombreCompleto() {
    return this.nombre + ' ' + this.apellido;
  },

}

console.log(persona.nombreCompleto); // ya no se pone ()
console.log(persona.lang);

// Método set: Cambia el valor de una propiedad

persona.lang = 'en';
console.log(persona.lang);

// Funcion Constructor de objetos

function Persona(nombre, apellido, email) {
  // con this.nombre se esta definiendo el atributo nombre (Es como crear una variable de tipo objeto)
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  // Se puede crear métodos o funciones dentro de un constructor
  this.nombrecompleto = function () {
    return nombre + ' ' + apellido;
  }
};

let padre = new Persona('Luki', 'Sor', 'Lukisor@hotmail.com');

console.log(padre.nombrecompleto());

// Se puede realizar cambios

padre.apellido = 'Saldaña';

console.log(padre)

let madre = new Persona('Larissa', 'Jimenez', 'jimenezlarissa@hotmail.com');
console.log(madre)

// Otras Formas de Crear de objetos

let miObjeto = new Object();
let miObjeto2 = {};

let miArray = new Array();
let miArray2 = [];

let miFuncion = new Function ();
let miFuncion2 = function () { };
