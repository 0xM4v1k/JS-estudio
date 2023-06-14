console.log("**********Elementos del Documento**********");
console.log(window.document); // El objeto padre global es window
console.log(document.head);
console.log(document.body);
console.log(document.documentElement); // Para obtener la etiqueta html (Solo nos trae el tipo de documento)
console.log(document.doctype); // Solo para ver el tipo de documento
console.log(document.charset);
console.log(document.title); // Acceder al título del documento
console.log(document.images); // Acceder a las imagenes del documento
console.log(document.forms); // Acceder a los formularios del documento
console.log(document.styleSheets); // Acceder a las hojas de estilo enlazadas al documento
console.log(document.scripts); // Acceder a los scripts enlazados al documento

setTimeout(() => {
  console.log(document.getSelection().toString()) // Método para acceder a lo que se selecciona y luego se le convierte a una cadena de texto
}, 3000);

document.write("<h2>Hola Mundo desde el DOM</h2>") // Mala práctica