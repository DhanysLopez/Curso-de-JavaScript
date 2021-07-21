/* ~Cadena de texto aka Strings~ */
let topic_0003 = "~Cadena de tecto aka Strings~";
console.log(topic_0003)

let nombre = "Dhanys";
let apellido = "López";
let saludo = new String("Hola Mundo");
let js = "js es una plataforma de bajo nivel, y para hacer las cosas más fáciles e interesantes para los desarrolladores, existen miles de bibliotecas, que fueron construidas sobre Node.";

console.log(nombre, apellido, saludo);
console.log(nombre.length); //Propiedad "length"
console.log(apellido.toUpperCase()); // Metodo "toUpperCase"
console.log(apellido.toLowerCase()); // Metodo "toLowerCase"
console.log(js.includes("bajo nivel")); // Metodo includes
console.log(js.includes("alto nivel"));