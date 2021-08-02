/* ~Función Construtora~ */
let funcionesConstructoras = "~Funciones Constructoras~";
console.log(funcionesConstructoras);


// Ejemplo
function Animal (nombre, tipo, genero) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.genero = genero;

    this.presentar = function () {
        console.log(`Su nombre es ${this.nombre} es un ${this.tipo} y es ${this.genero}`);
    }

    this.truco = function () {
        console.log("Realiza un truco xd");
    }
}

// Ejemplo de Métodos agregados al prototipo de la función constructora
Animal.prototype.seva = function () {
    console.log("Se retira");
}

Animal.prototype.sonar = function () {
    console.log("Hace un sonido");
}

const snoopy = new Animal("Snoopy", "Perro", "Macho", "Ni idea");
const lechuga = new Animal("Lechuga", "Gato", "Hembra");

console.log(snoopy);
console.log(lechuga);

snoopy.presentar();
snoopy.truco();
snoopy.sonar();
snoopy.seva();

lechuga.presentar();
lechuga.truco();
lechuga.sonar();
lechuga.seva();

/* ~Clases y Herencia */
let clasesYHerencia = "~Clases y Herencia~";
console.log(clasesYHerencia);

// Ejemplo
class Avatar {
    constructor(nombre, genero, tipo) {
        this.nombre = nombre;
        this.genero = genero;
        this.tipo = tipo;
    }

    //Métodos
    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} soy ${this.genero} y soy tipo ${this.tipo}.`)
    }

    atacar() {
        console.log(`${this.nombre} esta atacando`)
    }

}

class Guerrero extends Avatar {
    constructor(nombre, genero, tipo, item) {
        super(nombre, genero, tipo);
        this.item = item;
        this.daño = null;
    }

    huir() {
        console.log(`${this.nombre} sale de la batalla`)
    }

    static queEres() {
        console.log(`Soy un Guerro y me gusta conbatir cuerpo a cuerpo`)
    }

    get getDaño() {
        return this.daño;
    }

    set setDaño(daño) {
        this.daño = daño;
    }
}

// Avatar
const Molly = new Avatar("Molly", "Mujer", "Mago");

// Avatar con herencia
const Synahd = new Guerrero("Synahd", "Hombre", "Guerrero", "Espada");

console.log(Molly);
Molly.saludar();

console.log(Synahd);
Synahd.saludar();
Guerrero.queEres();
Synahd.atacar();
Synahd.setDaño = "120 de daño";
console.log(Synahd.getDaño);
Synahd.huir();