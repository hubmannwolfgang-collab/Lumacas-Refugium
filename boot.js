/* =====================================================
   LUMACA'S REFUGIUM
   TEC1 BOOT SYSTEM
   Alpha 0.8
===================================================== */

const output = document.getElementById("output");
const terminal = document.getElementById("terminal");
const comingSoon = document.getElementById("comingSoon");

/* =====================================
   SOUND ENGINE
===================================== */

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

if(audioContext.state === "suspended"){
    audioContext.resume();
}

function keyClick(){

    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = "square";

    osc.frequency.value = 450 + Math.random()*120;

    gain.gain.value = 0.008;

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.start();

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.03
    );

    osc.stop(audioContext.currentTime + 0.03);

}

/* =====================================
   BOOT MESSAGES
===================================== */

const bootLines = [

"TEC1 Secure Operating System",
"Version 4.72",
"",
"Initializing Kernel.......................OK",
"Loading Security Modules..................OK",
"Checking Island Network...................OK",
"Decrypting Archive........................OK",
"",
"Authenticating User.......................",
"",
"Connecting to MORPHEUS...",
"",
"WARNING",
"Transmission interrupted.",
"",
"PROJECT MORPHEUS",
"",
"STATUS",
"COMING SOON"

];

/* =====================================
   VARIABLES
===================================== */

let currentLine = 0;

let cursor;

let currentDiv;

/* =====================================
   CURSOR
===================================== */

function createCursor(){

    cursor = document.createElement("span");

    cursor.textContent = "█";

    cursor.style.animation = "blink .8s infinite";

    cursor.style.color = "#ff9800";

}

/* =====================================
   CREATE NEW LINE
===================================== */

function createLine(){

    currentDiv = document.createElement("div");

    output.appendChild(currentDiv);

}

/* =====================================
   TYPE CURRENT LINE
===================================== */

function typeCurrentLine(){

    if(currentLine >= bootLines.length){

        setTimeout(showComingSoon,2000);

        return;

    }

    createLine();

    createCursor();

    currentDiv.appendChild(cursor);

    const text = bootLines[currentLine];

    let char = 0;

    const speed = text.includes("...") ? 12 : 28;

    const typing = setInterval(()=>{

        if(char < text.length){

            const letter = text.charAt(char);

            cursor.before(letter);

            if(letter !== " "){

                keyClick();

            }

            char++;

        }

        else{

            clearInterval(typing);
                        if(text === "Authenticating User......................."){

                setTimeout(()=>{

                    currentDiv.innerHTML =
                    "Authenticating User.......................ADMIN";

                    keyClick();

                    setTimeout(()=>{

                        currentDiv.innerHTML =
                        "Authenticating User.......................UNKNOWN";

                    },220);

                },250);

            }

            currentLine++;

            output.scrollTop = output.scrollHeight;

            setTimeout(typeCurrentLine,450);

        }

    },speed);

}

/* =====================================
   GLITCH EFFECT
===================================== */

function glitch(){

    document.body.style.filter="brightness(2)";

    setTimeout(()=>{

        document.body.style.filter="invert(1)";

    },60);

    setTimeout(()=>{

        document.body.style.filter="none";

    },120);

}

/* =====================================
   SHOW COMING SOON
===================================== */

function showComingSoon(){

    glitch();

    setTimeout(()=>{

        terminal.style.opacity="0";

        terminal.style.transition="1.5s";

    },250);

    setTimeout(()=>{

        comingSoon.classList.add("show");

    },1700);

}

/* =====================================
   START SYSTEM
===================================== */

window.onload=()=>{

    setTimeout(()=>{

        typeCurrentLine();

    },900);

};
