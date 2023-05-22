
let contador = 0;
/*
while(contador < 3){
    console.log(contador);
    contador++;
}

console.log("Fin del ciclo While");
console.log(contador)

do{
    console.log(contador);
    contador++;
}while(contador < 10);

*/
//Etiquetas label
inicio: 
for(contador; contador<=10; contador++){

    if(contador % 2 !== 0){
        continue inicio; //Ir a la siguiente iteracción y regresa a Inicio
    }else{
        console.log(contador)
    }
}
