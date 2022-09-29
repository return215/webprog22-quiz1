let slideId = 0;

const slideData = [
    {
        src: "https://www.swiss-belhotel.com/id-id/swiss-belhotel-borneo-banjarmasin/experiences/lok-baintan",
        caption: `<em>Pasar Terapung</em> (Floating Market)`
    },
    {
        src: "https://www.celebes.co/borneo/menara-pandang-banjarmasin",
        caption: `<em>Menara Pandang</em> (Watch Tower)`
    },
    {
        src: "https://wisato.id/wisata-alam/hutan-wisata-pulau-kembang-di-kalimantan-selatan/",
        caption: `<em>Pulau Kembang</em> (Kembang Island)`
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