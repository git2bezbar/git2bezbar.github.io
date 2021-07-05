console.log(document.querySelectorAll("input"));

document.querySelectorAll("input").forEach(element => {

    window.addEventListener("focus", element, () => {

        console.log("on clique");
        this.style.backgroundColor = "transparent";
    });

    window.addEventListener("blur", element, () => {

        console.log("on perd le focus");
        this.style.backgroundColor = "#01194a";
    });
});