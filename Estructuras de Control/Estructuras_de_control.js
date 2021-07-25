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