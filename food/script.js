let slideId = 0;

const slideData = [
    {
        src: "https://idntimes.com/food/dining-guide/fina-wahibatun-nisa-1/makanan-khas-banjarmasin-paling-enak?page=all",
        caption: `<em>Soto Banjar</em>`
    },
    {
        src: "https://idntimes.com/food/dining-guide/fina-wahibatun-nisa-1/makanan-khas-banjarmasin-paling-enak?page=all",
        caption: `<em>Nasi Kuning</em>`
    },
    {
        src: "https://idntimes.com/food/dining-guide/fina-wahibatun-nisa-1/makanan-khas-banjarmasin-paling-enak?page=all",
        caption: `<em>Ketupat Kandangan</em>`
    },
];

function shiftSlide(x) {
    slideId = (slideId + slideData.length + x) % slideData.length;
    showSlides(slideId);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const captionText = document.querySelector("#caption");
    slides.forEach((slide, i, _) => {
        slide.style.display = (i == n) ? "block" : "none";
    });

    const {caption, src} = slideData[n];
    captionText.innerHTML = `${caption}<br>(<a href="${src}" target="_blank">sumber</a>)`;
}

showSlides(slideId);