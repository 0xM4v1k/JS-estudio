// Método call: Se usa para llamar los métodos de un objeto y adecuarlo a otro objeto

let persona1 = {
  nombre: "Katherine",
  apellido: "Pereira",
  nombrecompleto: function (titulo, tel) {
    return titulo + ': ' + this.nombre + ' ' + this.apellido + ',' +  tel;
  }
};

let persona2 = {
  nombre: 'Maria',
  apellido: 'Chavez',
};

// Uso de call para usar
// el método  persona1.nombrecompleto con los datos de persona2

console.log(persona1.nombrecompleto('Lic.', '38143814'));

console.log(persona1.nombrecompleto.call(persona2, 'Psi.', '3813481')); // Después de pasar como argumento el objeto, se pasa los argumentos uno por uno separado por coma


