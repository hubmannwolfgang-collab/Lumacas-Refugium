/* =====================================================
   DIE CHRONIKEN
   Lumaca's Refugium
===================================================== */

const pages = [

/* =====================================================
   DOPPELSEITE 1
===================================================== */

{

left:`

`,

right:`

<div class="title-page">

    <img
        src="assets/story/Ornament.png"
        class="ornament"
        alt="Ornament">

    <p class="quote">

        Jede Geschichte beginnt<br>
        mit einer Entscheidung.

    </p>

</div>

`

},

/* =====================================================
   DOPPELSEITE 2
===================================================== */

{

left:`

<div class="page-content">

    <h1 class="chapter-title">
        Vorwort
    </h1>

    <div class="chapter-line"></div>

    <p><em>Manche Geschichten werden geplant.</em></p>

    <p><em>Andere entstehen aus einem einzigen Gedanken.</em></p>

    <p>
        Die Geschichte von
        <strong>Lumaca's Refugium</strong>
        gehört zur zweiten Sorte.
    </p>

    <p>
        Denn manchmal genügt eine einzige Entscheidung,
        um etwas Großes in Bewegung zu setzen.
    </p>

    <p>
        Diese Chronik erzählt nicht nur von Ereignissen,
        Wettbewerben oder besonderen Momenten.
        Sie erzählt von Menschen,
        die ihre Zeit,
        ihre Ideen
        und ihre Leidenschaft eingebracht haben.
        Von Erfolgen und Rückschlägen.
        Von großen Geschichten
        und den kleinen Augenblicken,
        die oft länger in Erinnerung bleiben
        als jeder Sieg.
    </p>

    <p>
        Jede Seite dieses Buches
        ist ein Teil dieser gemeinsamen Reise.
    </p>

    <p>
        Sie erinnert an Orte,
        Begegnungen
        und Abenteuer,
        die
        <strong>Lumaca's Refugium</strong>
        zu dem gemacht haben,
        was es heute ist.
    </p>

    <p>

        <em>

        Möge diese Chronik
        all jene Momente bewahren,
        die sonst irgendwann
        in Vergessenheit geraten würden.

        </em>

    </p>

    <div class="dedication">

        <strong>

            Dieses Buch gehört allen,
            die Lumaca's Refugium
            zu dem gemacht haben,
            was es heute ist.

        </strong>

        <br><br>

        <em>

            Denn ohne euch
            wären diese Seiten leer.

        </em>

    </div>

</div>

`,

right:`

<div class="page-content">

    <div class="chapter-number">

        Kapitel I

    </div>

    <h1 class="chapter-title">

        Die Geburt eines Refugiums

    </h1>

    <div class="chapter-line"></div>

    <blockquote>

        „Jede große Geschichte beginnt
        mit einem einzigen Schritt.
        Oft ist dieser Schritt
        so unscheinbar,
        dass niemand ahnt,
        wohin er führen wird.“

    </blockquote>

</div>

`

}

];

/* =====================================================
   BUCHSTEUERUNG
===================================================== */

let currentSpread = 0;

const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");

const previousButton = document.getElementById("previousPage");
const nextButton = document.getElementById("nextPage");

/* =====================================================
   BUCH ZEICHNEN
===================================================== */

function renderBook(){

    leftPage.innerHTML = pages[currentSpread].left;

    rightPage.innerHTML = pages[currentSpread].right;

    previousButton.disabled = currentSpread === 0;

    nextButton.disabled = currentSpread === pages.length-1;

}

/* =====================================================
   NÄCHSTE SEITE
===================================================== */

nextButton.addEventListener("click",()=>{

    if(currentSpread < pages.length-1){

        currentSpread++;

        renderBook();

    }

});

/* =====================================================
   VORHERIGE SEITE
===================================================== */

previousButton.addEventListener("click",()=>{

    if(currentSpread > 0){

        currentSpread--;

        renderBook();

    }

});

/* =====================================================
   START
===================================================== */

renderBook();