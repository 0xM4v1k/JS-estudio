// Objeto
// Una forma de crear objetos
let persona = {
    nombre: 'Trola',
    apellido: 'Pipo',
    correo: 'pipito@hotmail.com',
    edad: 50,
    nombreCompleto: function(){
        return this.nombre +' ' +this.apellido;
    },
    mifuncion: function(){
        return this.correo + this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.correo);
console.log(persona.edad);
console.log(persona.nombreCompleto())

// Otra forma de crear objetos
let persona2 = new Object();

persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15'