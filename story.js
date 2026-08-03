// Buch öffnen

const openBook = document.getElementById("openBook");

openBook.addEventListener("click", () => {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "chronik.html";

    }, 600);

});

// Vollbild

document
.getElementById("fullscreenButton")
.addEventListener("click",()=>{

    if(!document.fullscreenElement){

        document.documentElement.requestFullscreen();

    }else{

        document.exitFullscreen();

    }

});

// Musik

document
.getElementById("musicButton")
.addEventListener("click",()=>{

    alert("Musik folgt in Version 1.1");

});