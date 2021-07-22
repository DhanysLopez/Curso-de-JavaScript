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

/* Template Strings */
let topic_0004 = "~Template Strings~";
console.log(topic_0004);

let user = "Synahd";
let id = "D-5258799";

//Concatenación
let identificate = "Hola mi usuario es" + " " + user + " " + "y mi id es" + " " + id;
console.log(identificate);

//Template String
let identificate2 = `Hola mi usuario es ${user} y mi id es ${id}`;
console.log(identificate2);

let ul = `
    <ul>
        <li>user 1</li>
        <li>user 2</li>
        <li>user 3</li>
    </ul>
`;
console.log(ul)

/* ~Numbers~ */
let topic_0005 = "~Numbers~";
console.log(topic_0005);

let a = 1;
let b = new Number(2);
let c = 2.26;
let d = "3";

console.log(a,b);
console.log(c.toFixed(1));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);


/* ~Booleans~ */
let topic_0006 = "~Boleans~"
console.log(topic_0006);

let verdadero = true;
let falso = false;
let z = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, z, f);
console.log(typeof verdadero, typeof falso);


/* ~undefined, null, & NaN~ */
let topic_0007 = "~undefined, null, & NaN~";
console.log(topic_0007);

let indefinida;
console.log(indefinida);

let nulo= null;
console.log(nulo);

let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);