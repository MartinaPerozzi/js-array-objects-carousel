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
const itemsContainer = document.querySelector(".items");
const buttonPrev = document.querySelector(".prev");
const buttonNext = document.querySelector(".next");
// 
let activeImage = 0;

// For con index
for (let i = 0; i < images.length; i++) {
    const currentImage = images[i];

    let img = currentImage.image;
    let title = currentImage.title;
    let text = currentImage.text;
    console.log(img);
    let slideClass = "item";

    if (i == activeImage) {
        slideClass += " active";
    }

    const slide = `<div class="${slideClass}">
    <img src="./${img}" alt=""></div><div class="title-text"><h2>"${title}"</h2>
            <p> "${text}" <p></div>`;


    itemsContainer.innerHTML += slide;

}

// ADD EVENT LISTENER NEXT (l'ordine è importante)
buttonNext.addEventListener(
    "click",
    function () {

        // Prendo tutti gli item (oggetti html)

        const slides = document.querySelectorAll(".item");
        console.log(slides);

        // Rimuovo la classe active dall'elemento 0

        slides[activeImage].classList.remove("active");

        // Incremento 

        activeImage++;

        // MILESTONE 2
        if (activeImage >= slides.length) {
            activeImage = 0;
        }
        // Aggiungo all'immagine la classe active

        slides[activeImage].classList.add("active");


    }
)


// ADD EVENT LISTENER PREV (l'ordine è importante)
buttonPrev.addEventListener(
    "click",
    function () {

        // Prendo tutti gli item (oggetti html)

        const slides = document.querySelectorAll(".item");
        console.log(slides);

        // Rimuovo la classe active dall'elemento 0

        slides[activeImage].classList.remove("active");

        // Incremento 

        activeImage--;

        // MILESTONE 2
        if (activeImage < 0) {
            activeImage = slides.length - 1;
        }
        // Aggiungo all'immagine la classe active

        slides[activeImage].classList.add("active");

    }
)