function toggleColor() {
    const colored = document.querySelector("#logo-color");
    const whited = document.querySelector("#logo-white");
    const bgRect = document.querySelector("#logo-bg");
    const bgCirc = document.querySelector("#logo-bg-circle");

    if (colored.style.display == "inline") {
        colored.style.display = "none";
        whited.style.display = "inline";
        if (Math.round(Math.random()) === 1) {
            bgRect.style.display = "inline";
        } else {
            bgCirc.style.display = "inline";
        }
    } else {
        colored.style.display = "inline";
        whited.style.display = "none";
        bgRect.style.display = "none";
        bgCirc.style.display = "none";
    }
}
