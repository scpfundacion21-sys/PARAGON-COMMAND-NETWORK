/* =========================================
   PARAGON COMMAND NETWORK
   SYSTEM BOOT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const percentage = document.getElementById("percentage");
    const progress = document.getElementById("progress");
    const bootMessage = document.getElementById("boot-message");
    const enterButton = document.getElementById("enterButton");

    let value = 0;

    const messages = [
        "INITIALIZING COMMAND NETWORK...",
        "LOADING PARAGON SYSTEMS...",
        "VERIFYING SECURE CONNECTION...",
        "LOADING COMMAND DATABASE...",
        "ESTABLISHING SECURE CHANNEL...",
        "SYSTEM CHECK COMPLETE...",
        "COMMAND NETWORK ONLINE."
    ];

    const bootInterval = setInterval(() => {

        value++;

        percentage.textContent = `${value}%`;
        progress.style.width = `${value}%`;

        /* Cambiar mensajes durante la carga */

        if (value < 20) {
            bootMessage.textContent = messages[0];
        }
        else if (value < 40) {
            bootMessage.textContent = messages[1];
        }
        else if (value < 55) {
            bootMessage.textContent = messages[2];
        }
        else if (value < 70) {
            bootMessage.textContent = messages[3];
        }
        else if (value < 85) {
            bootMessage.textContent = messages[4];
        }
        else if (value < 100) {
            bootMessage.textContent = messages[5];
        }
        else {

            bootMessage.textContent = messages[6];

            clearInterval(bootInterval);

            /* Mostrar ENTRAR solamente al terminar */

            setTimeout(() => {

                enterButton.classList.add("visible");

            }, 700);
        }

    }, 35);


    /* =========================================
       ENTRAR
       ACCESO OBLIGATORIO A LA PÁGINA 2
    ========================================== */

    enterButton.addEventListener("click", () => {

        enterButton.disabled = true;

        bootMessage.textContent = "ACCESS GRANTED // ENTERING COMMAND NETWORK...";

        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "main.html";

        }, 800);

    });

});
