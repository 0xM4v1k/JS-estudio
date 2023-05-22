// NO es posible de crear objetos antes de declarar una clase 
// No se aplica el concepto de hosting

class Persona{
    // Agregar constructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }
}

let persona1 = new Persona('Jheison', 'Cuñan');

console.log(persona1);

console.log(persona1.nombre)

persona1.nombre = 'Juaneco'; // set nombre ('Juaneco')

console.log(persona1) // get nombre