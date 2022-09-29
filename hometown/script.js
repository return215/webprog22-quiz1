function showBorder() {
    const hideClass = "hide";
    const s = document.querySelector("#map");
    const s2 = document.querySelector("#map-border");
    s.classList.toggle(hideClass);
    s2.classList.toggle(hideClass);
}

const hideClass = "hide";
const s = document.querySelector("#map");
const s2 = document.querySelector("#map-border");

// initial hide

s.classList.remove(hideClass);
s2.classList.add(hideClass);