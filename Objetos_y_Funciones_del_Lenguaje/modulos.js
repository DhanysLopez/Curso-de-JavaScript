// Ejemplo - const/let
export const modulos = "~Módulos (import/export)~";

// Ejemplo - Funciones
export function sumar(a,b) {
    return a + b;
};

export function restar (a,b) {
    return a - b;
};

// Ejemplo - objeto
function dividir (a,b) {
    return a / b;
};

function multiplicar (a,b) {
    return a * b;
};

export const calculo = {
    dividir,
    multiplicar
};

// Ejemplo - Class
export class Saludar{
    constructor() {
        console.log("Hola Class +ES6");
    }
};

// Ejemplo - export default
export default function despedida() {
    console.log("Aqui terminar la sección de <<Objetos y Funciones del Lenguaje>>")
}