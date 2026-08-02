/*
===========================================
LUMACA'S REFUGIUM
Alpha 0.2
===========================================
*/

// -----------------------------
// Seite sanft einblenden
// -----------------------------

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// -----------------------------
// TERMINAL BUTTON
// -----------------------------

const terminalButton = document.querySelector(".terminal-btn");

if (terminalButton) {

    terminalButton.addEventListener("click", () => {

        terminalButton.innerHTML = "VERBINDUNG WIRD HERGESTELLT...";

        terminalButton.disabled = true;

        setTimeout(() => {

            alert(
`TEC1 TERMINAL

Verbindung erfolgreich.

Das Terminal wird in Alpha 0.3 aktiviert.

Willkommen in Lumaca's Refugium.`
            );

            terminalButton.innerHTML = "► TERMINAL BETRETEN";
            terminalButton.disabled = false;

        }, 1800);

    });

}


// -----------------------------
// Navigation beim Scrollen
// -----------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.80)";
        header.style.backdropFilter = "blur(12px)";

    } else {

        header.style.background = "rgba(0,0,0,.25)";
        header.style.backdropFilter = "blur(8px)";

    }

});


// -----------------------------
// Fade-In der Inhalte
// -----------------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".content").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s ease";

    observer.observe(el);

});


// -----------------------------
// Alpha-Version in Konsole
// -----------------------------

console.log(`
======================================
LUMACA'S REFUGIUM
Website Alpha 0.2
======================================

Willkommen Entwickler :)

Nächste Version:

✓ Nebel
✓ Regen
✓ TEC1 Terminal
✓ Story-System
✓ MORPHEUS
`);