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