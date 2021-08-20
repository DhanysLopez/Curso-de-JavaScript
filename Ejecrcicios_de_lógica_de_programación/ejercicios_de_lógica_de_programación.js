// EJERCICIOS DE LÓGICA DE PROGRAMACIÓN (1/10)
console.log("~Ejercicios de Lógica de Programación (1/10)~");
const a = "Hola Mundo";/** Se utilizara repetidas veces */

/* 
    1) Programa una función que cuente el número de caracteres 
        de una cadena de texto, pe. miFuncion("Hola Mundo") 
        devolverá 10.
*/
const miFuncion = (a) => {
    return console.log(`La cadena "${a}" tiene ${a.length} caracteres.`);
};
miFuncion(a);
console.log(`-----------------------------

`)

// Ejemplos de la clase (1/2)
function contarCaracteres(a = "") {
    if (!a) {
        console.warn("No existen datos")
    } else {
        console.info(`La cadena "${a}" tiene ${a.length} caracteres.`);
    }
};
contarCaracteres();
contarCaracteres(a);

// Ejemplos de la clase (2/2)
const contarCaracteres2 = (a = "") =>/**
Esto es una funcion expresada que recibe un string que sera
igual a un string vacio si no recibe algun valor.
*/
    (!a)/**
    Esto es un operador ternario que indica "Que si no existe
    la cadena" sera verdadero
    */
        ?console.warn("No existen datos")/**
        Caso verdadero
        */
        :console.info(`La cadena "${a}" tiene ${a.length} caracteres.`);/**
        Caso falso
        */
contarCaracteres2();/** No recibe ningun valor */
contarCaracteres2(a);/** Recibe un valor */
console.log(`-----------------------------

`)





/* 
    2) Programa una función que te devuelva el texto recortado
     según el número de caracteres indicados, 
     pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 
*/
const miFuncion2 = (a) => {
    return console.log(a.substr(0, 4));
};
miFuncion2(a);
console.log(`-----------------------------

`)

// Ejemplo de la clase
const recortarTexto = (a = "", longitud  = undefined) =>
    (!a)
        ?console.warn("Aun no se ingresa un texto")
        :(longitud === undefined)
            ?console.warn("La longitud a recortar no ha sido ingresada")
            :console.info(a.slice(0, longitud));
recortarTexto();
recortarTexto(a);
recortarTexto("", 5);
recortarTexto(a, 4);
console.log(`-----------------------------

`)





/* 
    3) Programa una función que dada una String te devuelva 
    un Array de textos separados por cierto caracter, 
    pe. miFuncion('hola que tal', ' ') 
    devolverá ['hola', 'que', 'tal'].
*/
const q = "Hola que tal"
const miFuncion3 = (q) => {
    return console.log(q.split(","))
}
miFuncion3(q);
console.log(`-----------------------------

`)

// Ejemplo de la clase
const cadenaAArreglo = (q = "", separador = undefined) =>
    (!q)
        ?console.warn("Aun no se ingresa un valor")
        :(separador === undefined)
            ?console.warn("No se a ingresado el caracter separador")
            :console.info(q.split(separador));
cadenaAArreglo();
cadenaAArreglo(q);
cadenaAArreglo("", ",");
cadenaAArreglo(q, ",");
console.log(`-----------------------------

`)





/* 
    4) Programa una función que repita un texto X veces, 
    pe. miFuncion('Hola Mundo', 3) devolverá 
    Hola Mundo Hola Mundo Hola Mundo. 
*/
b = 3;
const miFuncion4 = (a, b) => {
    return console.log(a.repeat(b));
}
miFuncion4(a, b);
console.log(`-----------------------------

`)


// Ejemplo de la clase
const repetirTexto = (a = "", b = undefined) => {
    if(!a) return console.warn("Texto sin ingresar");

    if (b === undefined) return console.warn("Valor de repetición no fué ingresado");

    if (b === 0) return console.error("El numero de veces no puede ser 0");

    if(Math.sign(b) === -1) return console.error("El numero de veces no puede ser negativo");

    for (let i= 1; i<=b; i++) {
        console.info(`${a}, ${i}`);
    };
};
repetirTexto(a,0);
repetirTexto(a,"-2");
repetirTexto("",b);
repetirTexto(a,b);
console.log(`-----------------------------

`)




// EJERCICIOS DE LÓGICA DE PROGRAMACIÓN (2/10)
console.log("~Ejercicios de Lógica de Programación (2/10)~");
/**
    5) Programa una función que invierta las palabras de una cadena 
    de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
const miFuncion5 = (a) => {
    return console.info(a.split("").reverse().join(""));
}
miFuncion5(a);
console.log(`-----------------------------

`)

// Ejemplo de la clase
const invertirCadena = (a = "") =>
    (!a)
    ?console.warn("No ingresaste una cadena de txt")
    :console.info(a.split("").reverse().join(""));
invertirCadena();
invertirCadena(a);
console.log(`-----------------------------

`)




/**
    6) Programa una función para contar el número de veces que se repite 
    una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo",
    "mundo") devolverá 2.
*/
const txtEnCadena = (cadena = "", txt = "") => {
    if(!cadena) return console.warn ("No ingresaste el txt largo");

    if(!txt) return console.warn("No ingresaste la palabra a evaluar");

    let i = 0,
    contador = 0;

    while (i !== -1) {
        i = cadena.indexOf(txt, i);
        if(i !== -1) {
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${txt} se repite ${contador} veces`);
}
txtEnCadena()
txtEnCadena("","mundo");
txtEnCadena("Hola mundo adios mundo", "");
txtEnCadena("Hola mundo adios mundo", "mundo");
console.log(`-----------------------------

`)




/**
    7) Programa una función que valide si una palabra o frase dada, 
    es un palíndromo (que se lee igual en un sentido que en otro), 
    pe. mifuncion("Salas") devolverá true.
*/
const palindromo = (palabra = "") => {
    if(!palabra) return console.warn("No ingreso una palabra o frase");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return(palabra === alReves)
    ?console.info(`${palabra} si es palindromo, el resultado al reves es ${alReves}`)
    :console.info(`${palabra} no es palindomo, el resultado al reves es ${alReves}`);
}
palindromo("");
palindromo("Hola Mundo");
palindromo("Salas");
console.log(`-----------------------------

`)




/**
    8) Programa una función que elimine cierto patrón de caracteres de 
    un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
    devolverá  "1, 2, 3, 4 y 5.
*/
const eliminarCaracteres = (txt = "", patron = "") =>
    (!txt)
    ?console.warn("No ingresaste un texto")
    :(!patron)
        ?console.warn("No ingresaste un patron")
        :console.info(txt.replace(new RegExp(patron, "ig"), ""));
eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "");
eliminarCaracteres("", "xyz");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
console.log(`-----------------------------

`)




// EJERCICIOS DE LÓGICA DE PROGRAMACIÓN (3/10)
/**
    9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
const aleatorio = () => console.info(Math.round(Math.random() *100) + 500);
aleatorio()
console.log(`-----------------------------

`)




/**
    10) Programa una función que reciba un número y evalúe si es capicúa 
    o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) 
    devolverá true.
*/
const capicua = (numero = 0) => {
    if (!numero) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);
    
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
    ?console.info(`Si es capícua, Numero original ${numero}, Numero Al revés ${alReves}`)
    :console.info(`No es capícua, Numero original ${numero}, Numero Al revés ${alReves}`);
}
capicua();
capicua("20");
capicua([]);
capicua(2000);
capicua(2002);
console.log(`-----------------------------

`)




/**
    11) Programa una función que calcule el factorial de un número 
    (El factorial de un entero positivo n, se define como el producto 
    de todos los números enteros positivos desde 1 hasta n), 
    pe. miFuncion(5) devolverá 120.
*/
const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un numero");

    if (typeof numero !== "number") return console.error(`El valor "${numero}"
    ingresado no es un número`);

    if (numero === 0) return console.error("El número no puede ser 0");

    if (Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}
factorial();
factorial("5");
factorial([1,2,3]);
factorial(0);
factorial(-5);
factorial(5);
console.log(`-----------------------------

`)




// EJERCICIOS DE LÓGICA DE PROGRAMACIÓN (4/10)
/**
    12) Programa una función que determine si un número es primo 
    (aquel que solo es divisible por sí mismo y 1) 
    o no, pe. miFuncion(7) devolverá true.
*/
const numeroPrimo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un nuemro");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado,
    No es un numero`);

    if (numero === 0) return console.error("El número no puede ser 0");

    if (numero === 1) return console.error("El número no puede ser 1");

    if(Math.sign(numero) === -1) return console.error("El número no puede ser negativo");

    let divisible = false;

    for (let i = 2; i < numero; i++) {
        if((numero % i)===0) {
            divisible = true
            break;
        }
    }
    return (divisible)
    ?console.log(`El número ${numero}, No es primo`)
    :console.log(`El número ${numero}, Si es primo`);
}
numeroPrimo();
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(true);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200);
console.log(`-----------------------------

`)





/**
    13) Programa una función que determine si un número es par o impar, 
    pe. miFuncion(29) devolverá Impar.
*/
const numeroParImpar = ( numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado,
    NO es un número`);

    return((numero % 2) === 0)
    ?console.info(`El número ${numero} es Par`)
    :console.info(`El número ${numero} es Impar`);
}
numeroParImpar();
numeroParImpar("23");
numeroParImpar(-400);
numeroParImpar(19);
console.log(`-----------------------------

`)





/**
    14) Programa una función para convertir grados Celsius a Fahrenheit y 
    viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/
const convertirGrados = (grados = undefined, unidad = undefined) => {
    if (grados === undefined) return console.warn("No ingresaste grados a convertir");

    if(typeof grados !== "number") return console.error(`El valor "${grados}" ingresado,
    No es un número`);

    if (typeof unidad !== "string") return console.error(`El valor de "${unidad},
    No es una cadena de texto"`);

    if(unidad.length !== 1 ||!/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconicido");

   if (unidad === "C") {
       return console.info(`${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`);
   } else if (unidad === "F") {
       return console.info(`${grados}°F = ${Math.round((grados - 32) * (5/9))}°C`);
   }
}
convertirGrados();
convertirGrados("2");
convertirGrados(2, true);
convertirGrados(2, "E");
convertirGrados(100, "C");
convertirGrados(100, "F");
console.log(`-----------------------------

`);




// EJERCICIOS DE LÓGICA DE PROGRAMACIÓN (5/10)
/** 
    15) Programa una función para convertir números de base binaria 
    a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 
*/
const convertirBinarioDecinal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste el número a convertir");
    
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado,
    NO es un número`);

    if (base === undefined) return console.warn("No ingresste la base a convertir");

    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado,
    NO es un número`);

    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`)
    } else {
        return console.error("El tipo de base a convertir, No es valido")
    }
}
convertirBinarioDecinal();
convertirBinarioDecinal("2");
convertirBinarioDecinal(100, "");
convertirBinarioDecinal(100,2);
convertirBinarioDecinal(4, 10);
convertirBinarioDecinal(100, 4);
console.log(`-----------------------------

`);




/**
    16) Programa una función que devuelva el monto final después de aplicar 
    un descuento a una cantidad dada, pe. miFuncion(1000, 20) 
    devolverá 800 
*/
const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn("No ingresaste un monto");

    if (typeof monto !== "number") return console.error(`El valor ${monto} ingresado,
    NO es un número`);

    if (monto === 0) return console.error("El monto no puede ser 0");

    if(Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");

    if (typeof descuento !== "number") return console.error(`El valor ${descuento} ingresaod,
    No es un número`);

    if (Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");

    return console.info(`$${monto} - ${descuento}% = $${monto - ((monto * descuento) / 100)}`);
}
aplicarDescuento();
aplicarDescuento("1000");
aplicarDescuento(0);
aplicarDescuento(-500);
aplicarDescuento(1000, -20);
aplicarDescuento(1000,);
aplicarDescuento(1000, 20);
console.log(`-----------------------------

`);




/**
    17) Programa una función que dada una fecha válida determine 
    cuantos años han pasado hasta el día de hoy, 
    pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) 
*/
const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste una fecha");

    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return(Math.sign(aniosHumanos) === -1)
    ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(aniosHumanos) === 1)
        ?console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
        :console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
}
calcularAnios();
calcularAnios(true);
calcularAnios(new Date());
calcularAnios(new Date(1999, 3, 10));
calcularAnios(new Date(2030, 3, 10));
console.log(`-----------------------------

`);