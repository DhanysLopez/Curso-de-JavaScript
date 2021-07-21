/* ~Variables de bloque~ */
let topic_0001 = "~Variables de bloque~";
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

// console.log(i); //Imprime Uncaught ReferenceError: i is not defined


/* Constantes (conts) */
let topic_0002 = "~Constantes (conts)~";
console.log(topic_0002);

const DIEZ = 10;
// DIEZ = 5; //Imprime Uncaught TypeError: Assignment to constant variable
console.log(DIEZ); 

const PI = 3.1416;
// PI = 3.15 //Imprime Uncaught TypeError: Assignment to constant variable
console.log(PI) 