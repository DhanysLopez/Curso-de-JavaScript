/* ~Tipos de Operadores~ */
let tiposDeOperadores = "~Tipos de Operadores~";
console.log(tiposDeOperadores);

// Operadores Aritmeticos
let ñ = 5 + 5 - 10 * 3;
console.log(ñ);

let modulo = 5 % 2;
console.log(modulo)

// Operadores Relacionales
console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);
console.log(7 == 7);
console.log("7" === 7);
console.log(0 === false);
console.log(7 === 7);

//Incremento
let s = 1;
s = s + 2;
console.log(s);

// Opereadores Logicos

// ! - Not
console.log(!true);
console.log(!false);

// || - Or
console.log(9 === 9) || ("9" === 9);

// && - And
console.log(9 === 9) && ("9" === 9);

/* ~Condicionales~ */
let condicionales = "~Condicionales~"
console.log(condicionales);

// if - else
let edad = 22;
if (edad > 17) {
    console.log("Eres mayor de Edad");
} else {
    console.log("Eres menor de Edad");
}

if (edad >= 18) {
    console.log("Eres mayor de Edad");
} else {
    console.log("Eres menor de Edad");
};

// if - else if - else
let hora = 5;
if (hora >= 0 && hora <= 5) {
    console.log("Mimiendo")
} else if (hora >= 6 && hora <= 11) {
    console.log("Buenos dias")
} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tarde")
} else {
    console.log("Buenas noches")
};

//Operador Ternario - (condicion) ? verdadero: falsa
console.log("Operador Ternario")
let eresMayor = (edad >= 18) ?
    "Eres mayor de Edad" :
    "Eres menor de Edad";
console.log(eresMayor);

// switch - case
let dia = 2
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("Ingrese un dia valido")
        break;
};

/* Cilcos (Loops) */
let ciclos = "~Ciclos (Loops)~"
console.log(ciclos);

let contador = 0;

// while
while (contador < 10){
    console.log("while" + contador);
    contador++;
}


// do while
do {
    console.log("do while" + contador);
    contador++;
} while (contador < 10)


// for
for (let i = 0; i < 10; i++) {
    console.log("for" + i);
    
}

let box = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let i = 0; i < box.length; i++) {
    console.log(box[i]);
}

for (let i = 0; i < 1; i++) {
    console.log(box[i]);
}

// for in
const Dhanys = {
    nombre: "Dhanys",
    apellido: "López",
    edad: 35
};

for(const propiedad in Dhanys) {
    console.log(propiedad);
};

// for of
for (const elemento of box) {
    console.log(elemento);
};

let cadena = "Hola Mundo";
for (const caracter of cadena) {
    console.log(caracter);
};

/* ~Manejo de Errores~ */
let manejoDeErrores = "~Manejo de Errores~"
console.log(manejoDeErrores);

try {
    console.log("En el try se agrega el codigo a evaluar");
    letNoExistente;
    console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("catch captura cualquier error surguido o lanzado en el try")
} finally {
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch")
};

// Ejemplo
try {
    let numero = "diez";
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es valido")
    }


    console.log(numero * numero)
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}


/* ~break & continue~ */
const participantes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ejemplo
for (let i=0; i < participantes.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(participantes[i]);
}

// Ejemplo
for (let i=0; i < participantes.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(participantes[i]);
}


/* ~Destructuración~ */
let destructuracion = "~Destructuración~"
console.log(destructuracion);

// Ejemplo sin destructuración
const grupos = [1, 2, 3];
let uno = grupos[0],
    dos = grupos[1],
    tres = grupos[2];
console.log(uno, dos, tres);

// Ejemplo con destructuración
const [one, two, three] = grupos;
console.log(one, two, three);

const yo = {
    nombre: "Dhanys",
    apellido: "López",
    ocupacion: "Estudiante",
}

let {nombre, apellido, ocupacion} = yo;
console.log(nombre, apellido, ocupacion);


/* Objetos literales */
let objetosLiterales = "~Objetos Literales~"
console.log(objetosLiterales);

// Ejemplo
let nombreDog = "Cronos",
    edadDog = 7;

const dog = {
    nombreDog,
    edadDog,
    raza: "Dalmatas",
    ladrar() {
        console.log("guauuu guauuu!")
    } // Es una función
}

console.log(dog);
dog.ladrar();

/* Parámetros REST & Operadores Spread */
let ParámetrosREST_OperadoresSpread = "~Parámetros REST & Operadores Spread~";
console.log(ParámetrosREST_OperadoresSpread);

// Ejemplo de Parámetros REST
function sumar (a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n
    });

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));

// Ejemplo de Eperador Spread
const grupo1 = [1,2,3,4,5],
    grupo2 = [5,6,7,8,0];
console.log(grupo1, grupo2);

const grupo3 = [...grupo1, ...grupo2];
console.log(grupo3);

/* ~Arrow Functions~ */
let arrowFuntions = "~Arrow Funtions~"
console.log(arrowFuntions);

// Ejemplo
const hi = (nombre) => console.log(`Hola ${nombre}`);
hi("Dhanys");


// Ejemplo
const resta = (a,b) => a-b;
console.log(resta(10,5));

const multiplicar = (a,b) => a*b;
console.log(multiplicar(2,4));

// Ejemplo
const fnDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
};
fnDeVariasLineas();

// Ejemplo
const paises = ["China", "Canadá", "Alemania", "México"];
paises.forEach((el, index) => console.log(`El representande de ${el} 
quedó en la posicion ${index} 
en la tabla de clavados Olimpicos 2020`));

// Ejemplo
const mascota = {
    nombre: "Cronos",
    ladra() {
        console.log(this)
    }
}
mascota.ladra();