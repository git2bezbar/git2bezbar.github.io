// Infos modèles 

// Modèle S

let modelS = [
    {
        name: "Model S",
        paragraphe: "Plaid"
    },
    {
        infos: [
            {
                autonomie: "637km",
                zero: "2.1",
                vitessemax: "322km/h",
                puissance: "1020ch"
            }
        ]
    }
];

let model3 = [
    {
        name: "Model 3",
        paragraphe: "Standard Plus"
    },
    {
        infos: [
            {
                autonomie: "448km",
                zero: "5.6",
                vitessemax: "225km/h",
                puissance: "302ch"
            }
        ]
    }
];

let modelX = [
    {
        name: "Model X",
        paragraphe: "Plaid"
    },
    {
        infos: [
            {
                autonomie: "547km",
                zero: "2.6",
                vitessemax: "262km/h",
                puissance: "1020ch"
            }
        ]
    }
];
let modelY = [
    {
        name: "Model Y",
        paragraphe: "Grand Autonomie AWD"
    },
    {
        infos: [
            {
                autonomie: "505km",
                zero: "5.0",
                vitessemax: "217km/h",
                puissance: "470ch"
            }
        ]
    }
];

console.log(modelS[1].infos[0].autonomie);

// Animation caractéristiques

var tl = gsap.timeline();
tl.from("#logo", { duration: 1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
tl.from("#hamburger", { duration: 1, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1");
tl.from(".trait", { duration: 1, scaleY: 0, ease: "power2" });
tl.from(".cercles", { duration: 1, opacity: 0, transform: "translateX(100px)", stagger: 0.1, ease: "power2" });
tl.from("li > span", { duration: 1, opacity: 0, transform: "translateX(100px)", stagger: 0.1, ease: "power2" });
tl.from(".infos > *", { duration: 1, opacity: 0, transform: "translateY(100px)", stagger: 0.5, ease: "power2" }, "-=0.5");
tl.from("section > img", { duration: 1, opacity: 0, transform: "translateY(100px)", stagger: 0.5, ease: "power2" }, "-=1.2")
tl.from("aside > div", { duration: 1, opacity: 0, transform: "translateX(100px)", stagger: 0.1, ease: "power2" }, "-=0.5");

tl.delay(0.5);

document.querySelectorAll("li").forEach(element => {

    /* element.addEventListener("mouseenter", function () {
        document.querySelectorAll("li span").forEach(ele => {
            ele.classList.add("erase");
        });
        this.querySelector("span").classList.remove("erase");
        this.querySelector("span").classList.add("emphasis");
    });

    element.addEventListener("mouseleave", function () {
        this.querySelector("span").classList.remove("emphasis");
        document.querySelectorAll("li span").forEach(ele => {
            ele.classList.remove("erase");
        });
    }); */

    element.addEventListener("click", function () {
        document.querySelectorAll("li span").forEach(ele => {
            ele.classList.add("erase");
        });
        this.querySelector("span").classList.remove("erase");
        this.querySelector("span").classList.add("emphasis");
        document.querySelectorAll(".cercles").forEach(skusku => {
            skusku.classList.remove("active_circle");
        });
        this.querySelector(".cercles").classList.add("active_circle");

        console.log(this.id);

        let tl2 = gsap.timeline();

        switch (this.id) {

            case "modelS":

                tl2.to(".infos > h1", { duration: 0.3, opacity: 0, transform: "translateY(100px)", ease: "power2" });
                tl2.to(".infos > h1", { duration: 0.1, text: modelS[0].name });
                tl2.to(".infos > h1", { duration: 0.1, opacity: 0, transform: "translateY(-100px)", ease: "power2" });
                tl2.to(".infos > h1", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".infos > h2", { duration: 0.3, opacity: 0, transform: "translateY(100px)", ease: "power2" }, "-=0.6");
                tl2.to(".infos > h2", { duration: 0.1, text: modelS[0].paragraphe });
                tl2.to(".infos > h2", { duration: 0.1, opacity: 0, transform: "translateY(-100px)", ease: "power2" });
                tl2.to(".infos > h2", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".auto", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.2");
                tl2.to(".auto", { duration: 0.1, text: modelS[1].infos[0].autonomie });
                tl2.to(".auto", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".auto", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".zero", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.4");
                tl2.to(".zero", { duration: 0.1, text: modelS[1].infos[0].zero });
                tl2.to(".zero", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".zero", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".vitessemax", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.6");
                tl2.to(".vitessemax", { duration: 0.1, text: modelS[1].infos[0].vitessemax });
                tl2.to(".vitessemax", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".vitessemax", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".puissance", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.8");
                tl2.to(".puissance", { duration: 0.1, text: modelS[1].infos[0].puissance });
                tl2.to(".puissance", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".puissance", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to("section > img", { duration: 1, opacity: 0, ease: "power2" }, "-=4.5");
                tl2.set("section > img", { attr: { src: "img/model_s.jpg" } });
                tl2.to("section > img", { duration: 1, opacity: 1, ease: "power2" });

                break;

            case "model3":

                tl2.to(".infos > h1", { duration: 0.3, opacity: 0, transform: "translateY(100px)", ease: "power2" });
                tl2.to(".infos > h1", { duration: 0.1, text: model3[0].name });
                tl2.to(".infos > h1", { duration: 0.1, opacity: 0, transform: "translateY(-100px)", ease: "power2" });
                tl2.to(".infos > h1", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".infos > h2", { duration: 0.3, opacity: 0, transform: "translateY(100px)", ease: "power2" }, "-=0.6");
                tl2.to(".infos > h2", { duration: 0.1, text: model3[0].paragraphe });
                tl2.to(".infos > h2", { duration: 0.1, opacity: 0, transform: "translateY(-100px)", ease: "power2" });
                tl2.to(".infos > h2", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".auto", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.2");
                tl2.to(".auto", { duration: 0.1, text: model3[1].infos[0].autonomie });
                tl2.to(".auto", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".auto", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".zero", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.4");
                tl2.to(".zero", { duration: 0.1, text: model3[1].infos[0].zero });
                tl2.to(".zero", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".zero", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".vitessemax", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.6");
                tl2.to(".vitessemax", { duration: 0.1, text: model3[1].infos[0].vitessemax });
                tl2.to(".vitessemax", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".vitessemax", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".puissance", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.8");
                tl2.to(".puissance", { duration: 0.1, text: model3[1].infos[0].puissance });
                tl2.to(".puissance", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".puissance", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to("section > img", { duration: 1, opacity: 0, ease: "power2" }, "-=4.5");
                tl2.set("section > img", { attr: { src: "img/model_3.jpg" } });
                tl2.to("section > img", { duration: 1, opacity: 1, ease: "power2" });

                break;

            case "modelX":

                tl2.to(".infos > h1", { duration: 0.3, opacity: 0, transform: "translateY(100px)", ease: "power2" });
                tl2.to(".infos > h1", { duration: 0.1, text: modelX[0].name });
                tl2.to(".infos > h1", { duration: 0.1, opacity: 0, transform: "translateY(-100px)", ease: "power2" });
                tl2.to(".infos > h1", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".infos > h2", { duration: 0.3, opacity: 0, transform: "translateY(100px)", ease: "power2" }, "-=0.6");
                tl2.to(".infos > h2", { duration: 0.1, text: modelX[0].paragraphe });
                tl2.to(".infos > h2", { duration: 0.1, opacity: 0, transform: "translateY(-100px)", ease: "power2" });
                tl2.to(".infos > h2", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".auto", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.2");
                tl2.to(".auto", { duration: 0.1, text: modelX[1].infos[0].autonomie });
                tl2.to(".auto", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".auto", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".zero", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.4");
                tl2.to(".zero", { duration: 0.1, text: modelX[1].infos[0].zero });
                tl2.to(".zero", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".zero", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".vitessemax", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.6");
                tl2.to(".vitessemax", { duration: 0.1, text: modelX[1].infos[0].vitessemax });
                tl2.to(".vitessemax", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".vitessemax", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".puissance", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.8");
                tl2.to(".puissance", { duration: 0.1, text: modelX[1].infos[0].puissance });
                tl2.to(".puissance", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".puissance", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to("section > img", { duration: 1, opacity: 0, ease: "power2" }, "-=4.5");
                tl2.set("section > img", { attr: { src: "img/model_x.jpg" } });
                tl2.to("section > img", { duration: 1, opacity: 1, ease: "power2" });

                break;

            case "modelY":

                tl2.to(".infos > h1", { duration: 0.3, opacity: 0, transform: "translateY(100px)", ease: "power2" });
                tl2.to(".infos > h1", { duration: 0.1, text: modelY[0].name });
                tl2.to(".infos > h1", { duration: 0.1, opacity: 0, transform: "translateY(-100px)", ease: "power2" });
                tl2.to(".infos > h1", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".infos > h2", { duration: 0.3, opacity: 0, transform: "translateY(100px)", ease: "power2" }, "-=0.6");
                tl2.to(".infos > h2", { duration: 0.1, text: modelY[0].paragraphe });
                tl2.to(".infos > h2", { duration: 0.1, opacity: 0, transform: "translateY(-100px)", ease: "power2" });
                tl2.to(".infos > h2", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".auto", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.2");
                tl2.to(".auto", { duration: 0.1, text: modelY[1].infos[0].autonomie });
                tl2.to(".auto", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".auto", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".zero", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.4");
                tl2.to(".zero", { duration: 0.1, text: modelY[1].infos[0].zero });
                tl2.to(".zero", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".zero", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".vitessemax", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.6");
                tl2.to(".vitessemax", { duration: 0.1, text: modelY[1].infos[0].vitessemax });
                tl2.to(".vitessemax", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".vitessemax", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to(".puissance", { duration: 0.3, opacity: 0, transform: "translateX(100px)", ease: "power2" }, "-=1.8");
                tl2.to(".puissance", { duration: 0.1, text: modelY[1].infos[0].puissance });
                tl2.to(".puissance", { duration: 0.1, opacity: 0, transform: "translateX(-100px)", ease: "power2" });
                tl2.to(".puissance", { duration: 0.3, opacity: 1, transform: "translateY(0px)", ease: "power2" });

                tl2.to("section > img", { duration: 1, opacity: 0, ease: "power2" }, "-=4.5");
                tl2.set("section > img", { attr: { src: "img/model_y.png" } });
                tl2.to("section > img", { duration: 1, opacity: 1, ease: "power2" });

                break;
        }



    });
});

let i = 0;
document.querySelector("#hamburger").addEventListener("click", function () {
    i++;
    if (i % 2 == 0) {
        this.style.transform = "rotate(0deg)";
    }
    if (i % 2 == 1) {
        this.style.transform = "rotate(-90deg)";
    }
});

