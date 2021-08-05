// Ejemplo de console.clear()
console.error("Esto se borrara de la consola");
console.warn("Esto se borrara de la consola");
console.info("Esto se borrara de la consola");

console.clear();

/* ~Objeto console~ */
let objetoConsole = "~Objeto console~"
console.log(objetoConsole);

console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Esto es un registro de lo que ha pasado en nuestra aplicación");

let nombre = "Dhanys",
    apellido = "López",
    edad = 22;

console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y 
tengo ${edad}`);

// Ejemplo con comodin %s
console.log(`Hola mi nombre es %s %s y 
tengo %s`, nombre, apellido, edad);

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);

console.group("Notas del curso");
console.log("Tipos de Datos");
console.log("Estructura de Control");
console.log("Programación orientada a Objetos");
console.groupEnd();

console.log(console);
console.table(Object.entries(console));

// .table
const numeros = [1,2,3,4,5],
    vocales = ["a","e","i","o","u"];
console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Cronos",
    edad: 2,
    color: "Blanco"
}
console.table(perro);

// .time
console.time("Cuanto tarda mi codigo");
const arreglo = Array(10000);

for (let i=0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd("Cuanto tarda mi codigo");

// .count
for (let i = 0; i <= 10; i++) {
    console.count("Codigo for");
    console.log();
}

// .assert - pueba de errores
let x = 4,
    y = 2,
    pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, (x,y, pruebaXY));

/* ~Objeto - Date~ */
let objetoDate = "~Objeto - Date~";
console.log(objetoDate);

console.log(Date);

let fecha = new Date();
console.log(fecha); 
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getYear());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleDateString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());

let cumpledhan = new Date(1999,2,10);
console.log(cumpledhan);

/* ~Objeto - Math~ */
let objetoMath = "~Objeto - Math~";
console.log(objetoMath);

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-8.7));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.8));
console.log(Math.round(7.2));
console.log(Math.sqrt(81));
console.log(Math.pow(2,5));
console.log(Math.sign(6.9));
console.log(Math.random());
console.log(Math.random() * 100);
console.log(Math.round(Math.random() * 100));

/* ~Operador de Cortocircuito~ */
let operadorDeCorticircuito = "~Operadores de Cortocircuito~"
console.log(operadorDeCorticircuito);

/*
Cortocircuito - OR - cuando el valor de la izquierda
en la expresión siempre pueda validae a true, es el 
valor que se cargara por defecto
*/

/*
Cortocircuito - AND - cuando el valor de la izquierda
en la expresión siempre pueda validar a false, es el
valor que se cargará por defecto
*/

function saludar(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`)
}

saludar("Dhanys");
saludar();


/* ~alert, confirm y prompt~ */
let alertConfimYPrompt = "~alert, confirm y prompt~"

//let alerta = alert("Hola esto es una alerta"),
    //confirmacion = confirm("Hola esto es una confirmación"),
    //aviso = prompt("Hola esto es un aviso");
//console.log(alerta);
//console.log(confirmacion);
//console.log(aviso);

/* ~Expresiones Regulares~ */
let expresionesRegulares = "~Expresiones Regulares~";
console.log(expresionesRegulares);

let cadena = `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Donec 20 congue risus eu vestibulum tempor. 
Praesent elementum faucibus sagittis. Maecenas pellentesque 
leo nunc, a consequat sem pulvinar in. Maecenas et tempor 
lacus. Pellentesque tempus est at sapien molestie, aliquet 
tempus nisi tincidunt. Integer placerat turpis erat, quis 
ornare urna pulvinar vel. Curabitur vel purus quis felis 
euismod laoreet at non massa lorem.`;

// Ejemploc con constructor
let expReg = new RegExp("Lorem", "i");

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

// Ejemplo con expresion regular
let expReg2 = /Lorem/ig;

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

/* ~Funciones Anónimas Autoejecutables~ */
let funcionesAnónimasAutoejecutables = "~Funciones Anónimas Autoejecutables~";
console.log(funcionesAnónimasAutoejecutables);

// Ejemplo - Clásica
(function(){
    console.log("Esto es una IIFE");
})();

(function(d,w,c){
    console.log("Esto es otra IIFE");
    console.log(d);
    console.log(w);
    c.log(c);
})(document, window, console);

// Ejemplo - FACEBOOK
!function () {
    console.log("Versión de FB")
}();


/* ~Módulos (import/export)~ */
import despedida, {modulos, sumar, restar, calculo, Saludar} from "./modulos.js";
console.log(modulos, calculo);

console.log(sumar(5,5));
console.log(restar(10,5));

// Se menciona el objeto primero para acceder a su contenido
console.log(calculo.multiplicar(3,10));
console.log(calculo.dividir(30,3));

// Class
let saludo = new Saludar();
saludo;
despedida();