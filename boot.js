/* ===================================================
   TEC1 BOOTSCREEN
   Alpha 0.7
=================================================== */

const output = document.getElementById("output");
const comingSoon = document.getElementById("comingSoon");

const lines = [

"TEC1 Secure Operating System",
"Version 4.72",
"",
"Initializing Kernel.......................OK",
"Loading Security Modules..................OK",
"Checking Island Network...................OK",
"Decrypting Archive........................OK",
"",
"Authenticating User.......................ADMIN",
"",
"Access Level..............................UNKNOWN",
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

let line = 0;

function typeLine(){

    if(line >= lines.length){

        setTimeout(showComingSoon,2000);

        return;

    }

    const text = document.createElement("div");

    output.appendChild(text);

    let char = 0;

    const current = lines[line];

    const typing = setInterval(()=>{

        text.textContent += current.charAt(char);

        char++;

        if(char >= current.length){

            clearInterval(typing);

            line++;

            output.scrollTop = output.scrollHeight;

            setTimeout(typeLine,350);

        }

    },30);

}

function showComingSoon(){

    document.getElementById("terminal").style.opacity="0";

    setTimeout(()=>{

        comingSoon.classList.add("show");

    },900);

}

window.onload=()=>{

    setTimeout(typeLine,800);

};