function showBorder() {
    const hideClass = "hide";
    const s = document.querySelector("#map");
    const s2 = document.querySelector("#map-border");
    s.classList.toggle(hideClass);
    s2.classList.toggle(hideClass);
}

const s = document.querySelector("#map");
const s2 = document.querySelector("#map-border");

// ensure only one is hidden
if (s.classList.contains(hideClass)) {
    s.classList.remove(hideClass);
    s2.classList.add(hideClass);
} else {
    s2.classList.remove(hideClass);
    s.classList.add(hideClass);
}