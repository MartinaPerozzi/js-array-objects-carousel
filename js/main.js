// Creo l'Array di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// MILESTONE 0- MILESTONE 1
// prendo gli elementi dal DOM
const itemsContainer = document.querySelector(".items"); //per il carosello
const thumbnails = document.querySelector(".row-thumb"); //per le thumbnails
console.log(thumbnails, itemsContainer)
// prendo i Button
const buttonPrev = document.querySelector(".prev");
const buttonNext = document.querySelector(".next");
console.log(buttonNext)
// Variabile che rappresenta l'immagine visualizzata, posizione 0.
let activeImage = 0;

// Per ogni imagine del carosello, prendi l'indice (INDEX)
images.forEach((img, index) => {

    // Se l'indice è == 0 (è la prima immagine) allora metti active se no vuoto.
    const slide = `<div class="slide ${(index == activeImage) ? "active" : ""}">
    <img src="./${img.image}" alt=""> 
    <div class="title-text">
    <h2>${img.title}</h2>
    <p>${img.text}<p></div>
    </div>`;

    //prendo img, title e testo dall'Array di oggetti ad ogni imagine verrà assegnato il valore corretto.

    itemsContainer.innerHTML += slide;
    //inserisco tutto nel posto delegato del html

    // Faccio lo stesso con le THUMBNAILS- aggiungo il data-index per tenere a mente la loro posizione 
    const thumbImg = `
        <div class="col thumb" data-index="${index}">
            <img class="thumbnails-img" src="./${img.image}" alt="">
            </div>`;

    thumbnails.innerHTML += thumbImg;
});

/************************************************************** */
// FUNZIONE SWITCHER per togliere e aggiungere la classe active, il parametro è un nome x per poi essere sostituito dall'indice.
/******************************************************************** */
function switcher(activeIndexImg) {
    // prendi la slide con classe active (la prima del carosello)
    const activeSlide = document.querySelector(".slide.active");
    //e togli la classe active
    activeSlide.classList.remove("active");
    // Prendi tutte le slide
    const allSlides = document.querySelectorAll(".slide");
    //e all'immagine attiva in quel momento aggiungi la classe "active"
    allSlides[activeIndexImg].classList.add("active");
}


// BUTTON NEXT- prendo l'indice e lo aumento di uno ad ogni click (righe 103-104 )
function nextSlide() {
    // Incremento 
    activeImage++;

    // "loop infinito"
    if (activeImage >= images.length) {
        activeImage = 0;
    }
    // Chiamo la mia funzione che switcha l'immagine
    switcher(activeImage);
}

// BUTTON PREV
function prevSlide() {
    // Incremento 
    activeImage--;

    // "loop infinito"
    if (activeImage < 0) {
        activeImage = images.length - 1;
    }
    // Chiamo la mia funzione che switcha l'immagine
    switcher(activeImage);
}
// BUTTON
buttonNext.addEventListener("click", nextSlide);
buttonPrev.addEventListener("click", prevSlide);

// Prendo le thumb
const thumbsLink = document.querySelectorAll(".thumb");
thumbsLink.forEach((thumb, index) => { //Ad ognuna di loro assegno l'AddEvList.
    thumb.addEventListener("click", function () {
        const thisIndex = this.getAttribute("data-index");//Prendo il data-index
        switcher(thisIndex); //dico allo switcher di andare su data posizione
    })
})


