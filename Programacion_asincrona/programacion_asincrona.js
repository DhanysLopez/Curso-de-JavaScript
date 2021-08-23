/**
console.log("Inicio")
setTimeout (() => {
    console.log(`Ejecuntando un setTimeous,
    esto se ejecuta una sóla vez`);
}, 2000);

setInterval(() => {
    console.log(`Ejecuntando un setInterval,
    esto se ejecuta indefinidamente cada cierto intervalo de tiempo`);
}, 2000);
*/

let tempo = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(tempo);
console.log("Después del clear setTimeout");

let hora = setInterval(() => {
    console.log(new Date().toLocaleDateString());
}, 1000);

clearInterval(hora);
console.log("Después del clear setInterval");
console.log(`-----------------------------

`);

// Código Síncrono Bloqueante
(() => {
    console.log("~Código Síncrono~");
    console.log("Inicio");

    function dos() {
        console.log("Dos");
    }

    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin")
})();
console.log(`-----------------------------

`);

// Código Asincrono No Bloqueante
(() => {
    console.log("Código Asincrono");
    console.log("Inicio");

    function dos() {
        setTimeout(function() {
            console.log("Dos")
        }, 1000);
    }

    function uno() {
        setTimeout(function() {
            console.log("Uno")
        }, 0);

        dos();

        console.log("Tres");
    }

    //uno();
    console.log("Fin");
})();
console.log(`-----------------------------

`);




// Callbacks
/** 
function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}

cuadradoCallback(0, (value, result) =>{
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);

    // CallbackHell 
    cuadradoCallback(1, (value, result) =>{
        console.log(`Callback: ${value}, ${result}`);

        cuadradoCallback(2, (value, result) =>{
            console.log(`Callback: ${value}, ${result}`);

            cuadradoCallback(3, (value, result) =>{
                console.log(`Callback: ${value}, ${result}`);

                cuadradoCallback(4, (value, result) =>{
                    console.log(`Callback: ${value}, ${result}`);

                    cuadradoCallback(5, (value, result) =>{
                        console.log(`Callback: ${value}, ${result}`);

                        console.log("Fin del Callback")
                    });
                });
            });
        });
    });
});
*/

console.log(`-----------------------------

`);




// Promesas
function cuadradoPromesa(value) {
    if (typeof value !== "number") return Promise.reject(`Error, el valor "${value}
    ingresado, NO es un número`);

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 100);
    })
}

/*
cuadradoPromesa(0)
    .then((obj) => {
        console.log("Inicia Promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);

        return cuadradoPromesa(1)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);

        return cuadradoPromesa(2)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);

        return cuadradoPromesa(3)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);

        return cuadradoPromesa(4)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);

        return cuadradoPromesa(5)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);

        return cuadradoPromesa("6")
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);

        console.log("Fin de la promesa")
    })
    .catch(err => console.error(err));
    console.log(`-----------------------------

    `);
*/
async function funcionAsincronaDeclarada () {
    try {
        console.log("Inicio Async Function");

        let = obj = await cuadradoPromesa(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(1)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(2)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(3)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(4)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

    } catch (err) {
        console.error(err)
    }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
    try {
        console.log("Inicio Async Function");

        let = obj = await cuadradoPromesa(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(6)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(7)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(8)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa("9")
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

    } catch (err) {
        console.error(err)
    }
}

funcionAsincronaExpresada();