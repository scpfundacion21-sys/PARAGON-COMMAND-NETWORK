/* =========================================
   PARAGON-STRIKE-DIVISION
   SYSTEM BOOT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const percentage = document.getElementById("percentage");
    const progress = document.getElementById("progress");
    const message = document.getElementById("message");
    const enterButton = document.getElementById("enterButton");

    let value = 0;

    const bootMessages = [
        "INITIALIZING COMMAND NETWORK...",
        "LOADING PARAGON SYSTEMS...",
        "VERIFYING SECURE CONNECTION...",
        "LOADING COMMAND DATABASE...",
        "ESTABLISHING SECURE CHANNEL...",
        "SYSTEM CHECK COMPLETE...",
        "COMMAND NETWORK ONLINE."
    ];

    const boot = setInterval(() => {

        value++;

        percentage.textContent = `${value}%`;
        progress.style.width = `${value}%`;

        if (value < 20) {
            message.textContent = bootMessages[0];
        }
        else if (value < 40) {
            message.textContent = bootMessages[1];
        }
        else if (value < 55) {
            message.textContent = bootMessages[2];
        }
        else if (value < 70) {
            message.textContent = bootMessages[3];
        }
        else if (value < 85) {
            message.textContent = bootMessages[4];
        }
        else if (value < 100) {
            message.textContent = bootMessages[5];
        }
        else {

            clearInterval(boot);

            message.textContent = bootMessages[6];

            setTimeout(() => {
                enterButton.classList.add("visible");
            }, 600);
        }

    }, 35);


    /* =========================================
       ENTRAR
    ========================================== */

    enterButton.addEventListener("click", () => {

        enterButton.disabled = true;

        message.textContent =
            "ACCESS GRANTED // ENTERING COMMAND NETWORK...";

        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "main.html";

        }, 800);

    });

});
