/* ==========================================
   BOOK ENGINE
   Lumaca's Refugium
========================================== */

const book = document.querySelector(".book");
const cover = document.querySelector(".book-cover");

let opened = false;

cover.addEventListener("click", openBook);

function openBook(){

    if(opened) return;

    opened = true;

    book.classList.add("opened");

}