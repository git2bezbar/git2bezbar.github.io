let tl = gsap.timeline();

tl.from(".load span", { duration: 0.25, opacity: 0, transform: "translateY(100%)", stagger: 0.0625, ease: "expo" }, "+=1");
tl.to(".load span", { duration: 1, opacity: 0, ease: "expo" }, "+=1");
tl.from("svg", { duration: 1.5, scale: 0.005, opacity: 0, ease: "expo" });
tl.from(".trait", { duration: 1, scaleY: 0, ease: "power4" }, "-=0.5");
tl.from(".left", { duration: 2, opacity: 0, ease: "expo" }, "+=0.25");
tl.from(".text > h1 > span", { duration: 1, opacity: 0, transform: "translateY(100%)", stagger: 0.125, ease: "expo" }, "-=1.5");
tl.from(".text p", { duration: .75, opacity: 0, transform: "translateY(50%)", ease: "expo" }, "-=0.5");
tl.from(".right", { duration: 2, opacity: 0, ease: "expo" });
tl.from("section *", { duration: 1, opacity: 0, transform: "translateX(100%)", stagger: 0.5, ease: "expo" }, "-=1");