// Funciona similar al método call, solo que acá se pasa los argumentos mediante un arreglo
let persona1 = {
  nombre: 'Lara',
  apellido: 'Acosta',
  nombrecompleto: function (titulo, tel) {
    return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
  }
};

let persona2 = {
  nombre: 'Karla',
  apellido: 'Vela'
};

//Uso de apply
console.log(persona1.nombrecompleto('Lic.', '391491'));

let arreglo = ['Ingeniera', '39134'];
console.log(persona1.nombrecompleto.apply(persona2, arreglo));
