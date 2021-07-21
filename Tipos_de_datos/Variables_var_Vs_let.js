/* ~Variables de bloque y constantes~ */

let topic_0001 = "~Variables de bloque y constantes~";
console.log(topic_0001);

let x /* Nombre de la variable */ = "Hola extraño";

if (true) {
    let x = "Hola bro";
    console.log(x) // Imprime en consola Hola bro
};

console.log(x) // Imprime en consola Hola extraño

for (let i = 0; i < 5; i++) {
    console.log(i) // Imprime del 0 al 4
};

console.log(i); //Imprime Uncaught ReferenceError: i is not defined

