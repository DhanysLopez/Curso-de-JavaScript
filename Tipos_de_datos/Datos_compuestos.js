/* ~Funciones~ */
let funciones = "~Funciones~";
console.log(funciones);

//Función declarada
function estoEsUnaFuncion() {
    console.log(1);
    console.log(2);
    console.log(3);
}

//Invocación de función
estoEsUnaFuncion();
estoEsUnaFuncion();

function unaFuncionQueDevuelveValor() {
    console.log(1);
    console.log(2);
    console.log(3);
    return "La función puede devolver cualquier tipo de dato";
}
let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);

function saludar(nombre = "Desconosido", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}
saludar("Dhanys", 22);
saludar();


//Función aninima
const funcionExpresada = function () {
    console.log("Esto es una función expresada, es decir una función que se le a asignado un valor a un avariable, si invocamos esta función antes de su definición JS nos dira `Cannot access <<funciónExpresada>> before initialization`");
}

funcionExpresada();


/* ~Arrays~ */
let arreglos = "~Arrays~";
console.log(arreglos);

const r = [];
const k = [1, "dos", true, [1,2,3]];
console.log(r);
console.log(k);
console.log(k.length);
console.log(k[2]);
console.log(k[3][2]);

const l = Array.of("x", "c", "v", 2, 3);
console.log(l);

const g = Array(10).fill(false);
console.log(g);

const colores = ["rojo", "verde", "azul"];
console.log(colores);
colores.push("negro");
console.log(colores);
colores.pop();
console.log(colores);

colores.forEach(function (el, index) {
    console.log(`<li id='${index}'>${el}</li>`);
});


/* ~objetos~ */
let objetos = "~objetos~";
console.log(objetos);

const o = {}
console.log(o);

const p = new Object();
console.log(p);

const rakan = {
    nombre: "Rakan",
    vida: 1985,
    mana: 1165,
    daño: 70,
    linea: "Support",

    items: {
        1: "Botas Jonias",
        2: "Shurelya",
        3: "Pebetero",
        4: "Filo del Robahechizos",
    },

    saludar: function () {
        console.log("¡Yo soy Rakan!")
    },

    presentar: function () {
        console.log(`Hola mi nombre es ${this.nombre} y soy ${this.linea}`)
    }
};

console.log(rakan);
console.log(rakan["nombre"]);
console.log(rakan.vida);
console.log(rakan.items);
console.log(rakan.items[2]);
console.log(rakan.items[4]);

rakan.saludar();
rakan.presentar();

console.log(Object.keys(rakan));
console.log(Object.values(rakan));