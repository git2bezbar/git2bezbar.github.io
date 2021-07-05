const cursor = document.querySelector(".cursor");
const a = document.querySelector("a");

window.addEventListener("mousemove", e => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});

a.addEventListener("mouseenter", () => {
    cursor.classList.toggle("cursor_animation");
});
a.addEventListener("mouseleave", () => {
    cursor.classList.toggle("cursor_animation");
});