```javascript
/* =========================================
   PARAGON STRIKE DIVISION
   SISTEMA DE INICIO
========================================= */


/* =========================================
   ELEMENTOS
========================================= */

const progress =
    document.getElementById("progress");

const percentage =
    document.getElementById("percentage");

const bootStatus =
    document.getElementById("bootStatus");

const boot =
    document.getElementById("boot");

const enterSection =
    document.getElementById("enterSection");


/* =========================================
   MENSAJES DEL SISTEMA
========================================= */

const messages = [

    "INITIALIZING SYSTEM",

    "LOADING SECURITY PROTOCOLS",

    "VERIFYING PARAGON DATABASE",

    "ESTABLISHING SECURE CONNECTION",

    "LOADING INTERFACE",

    "SYSTEM READY"

];


/* =========================================
   VARIABLES
========================================= */

let value = 0;


/* =========================================
   CARGA DEL SISTEMA
========================================= */

const loading = setInterval(() => {

    value++;


    /* Barra */

    progress.style.width =
        value + "%";


    /* Porcentaje */

    percentage.textContent =
        value + "%";


    /* Mensajes */

    if (value < 20) {

        bootStatus.textContent =
            messages[0];

    }

    else if (value < 40) {

        bootStatus.textContent =
            messages[1];

    }

    else if (value < 60) {

        bootStatus.textContent =
            messages[2];

    }

    else if (value < 80) {

        bootStatus.textContent =
            messages[3];

    }

    else if (value < 100) {

        bootStatus.textContent =
            messages[4];

    }

    else {

        bootStatus.textContent =
            messages[5];

    }


    /* =====================================
       SISTEMA COMPLETADO
    ===================================== */

    if (value >= 100) {

        clearInterval(loading);


        setTimeout(() => {

            /* Ocultar pantalla de boot */

            boot.classList.add("hidden");


            /* Mostrar botón */

            setTimeout(() => {

                enterSection.classList.add("show");

            }, 500);


        }, 700);

    }


}, 35);


/* =========================================
   ENTRAR
========================================= */

function enterSystem() {

    /* Efecto de transición */

    document.body.style.transition =
        "opacity 0.7s ease";


    document.body.style.opacity =
        "0";


    /* Ir a main.html */

    setTimeout(() => {

        window.location.href =
            "main.html";

    }, 700);

}
```
