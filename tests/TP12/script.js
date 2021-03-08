/* document.querySelector("button").addEventListener("click", () => {
    if (!('Notification' in window)) {
        alert('Ce navigateur ne prend pas en charge la notification de bureau')
    }

    else if (Notification.permission === 'granted') {
        const notification = new Notification('Voici les informations : lorem ipsum.');
    }

    else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                const notification = new Notification('Merci d\'avoir accepté ! Voici les informations : lorem ipsum.');
            }
        })
    }
});

setInterval(() => {
    fetch("fetch.php")
        .then(function (texte) {
            return texte.json();
        })
        .then(function (texte) {
            if (Notification.permission === 'granted') {
                const notification = new Notification(texte);
            }
        });
}, 10000); */

const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");

window.addEventListener('deviceorientation', function (e) {
    green.style.transform = "translateX(" + (e.alpha % 180) / 4 + "px) translateY(" + (e.beta % 180) / 4 + "px)";
    blue.style.transform = "translateX(" + (e.alpha % 180) / 8 + "px) translateY(" + (e.beta % 180) / 8 + "px)";
    red.style.transform = "translateX(" + (e.alpha % 180) / 16 + "px) translateY(" + (e.beta % 180) / 16 + "px)";
});
