let persona = {
  nombre: 'Larissa',
  apellido: 'Jimenez',
  email: 'larissauwu@gmail.com',
  numero: 999999999,
  nombreCompleto: function () {
    return this.nombre +  ' ' + this.apellido;
  }
}

/*
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.numero);

console.log(persona)
*/

// Acceder a las propiedades de un objeto

console.log(persona.nombre);
console.log(persona['nombre']);

// for in

for (propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad])
}

// Agregar propiedades a los objetos

persona.edad = '18';
persona.edad = '19'; // Cambia el valor de edad

console.log(persona);

// eliminar propiedades a los objetos

delete persona.edad;
console.log(persona);

// Imprimir objetos en navegador web

// Concatenar cada valor de cada propiedad

console.log(persona.nombre + ', ' + persona.apellido);

// for in

for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

// Usar métodos

let personaArray = Object.values(persona); // Pasar como argumento al objeto
console.log(personaArray);

let personaString = JSON.stringify(persona); // Convierte el objeto a cadena
console.log(personaString)

