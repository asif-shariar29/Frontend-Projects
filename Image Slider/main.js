const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imageEl = document.querySelectorAll("img");

let currentImage = 1;
let timeout;

nextEl.addEventListener("click", () => {
    currentImage++;
    clearTimeout(timeout);
    updateImage();
});

prevEl.addEventListener("click", () => {
    currentImage--;
    clearTimeout(timeout);
    updateImage();
});

updateImage();

function updateImage () { 

    if (currentImage > imageEl.length) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = imageEl.length;
    }

    imageContainerEl.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;

    timeout = setTimeout (() => {
            currentImage++;
            updateImage();
    },2000);
}