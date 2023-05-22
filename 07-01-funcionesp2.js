/* Argumentos

let sumar = function (a, b) {
  // Verifica los argumentos y estos funcionan como los arrays
  // en la posicion cero se encuentra a, o sea el primer argumento y así sucesivamente
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]) // A pesar que  no esté declarado este argumento se puede agregar otro 
  return a + b + arguments[2];
}

resultado = sumar(4, 6, 8);
console.log(resultado)
*/
// Ejercicio

let resultado = sumarTodo(5, 4, 13, 10, 9);

console.log(resultado)

function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++){
    suma += arguments[i]; // suma = suma + arguments[i]
  }
  return suma;
}

// Paso por valor

// Datos primitivos
// Significa que no cambiarán su valor ya que los tipo primitivos no tienen ni propiedades ni métodos

let x = 10;

function cambiarValor(a) {
  a = 20;

}

cambiarValor(x);
console.log(x)

const persona = {
  nombre: 'Juan',
  apellido: 'Perez'
}

function cambiarValorObjeto(p1) {
  p1.nombre = 'Carlos';
  p1.apellido = 'Lara';
}
// Paso por referencia
cambiarValorObjeto(persona)