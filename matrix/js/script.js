// ---------- Background animation ---------- //

class MatrixAnimation {

    /**
     * 
     * @param {object} element Element qui va contenir l'animation
     * @param {string} lettersColor Couleur des lettres
     * @param {string} shadowColor Ombre des lettres
     * @param {number} letterSize Taille des lettres
     * @param {*} font Police
     * @param {*} speed Vitesse d'animation
     */

    constructor(element, lettersColor, letterSize, font, speed) {
        this.element = element;
        this.width = element.offsetWidth;
        this.height = element.offsetHeight;
        this.lettersColor = lettersColor;
        this.letterSize = letterSize;
        this.font = font;
        this.speed = speed > 48 ? 48 : speed;
        this.status = true;
        this.ctx = undefined;
        this.letters = undefined;
    }

    drawAnimation() {

        if (this.status) {

            this.ctx.fillStyle = this.lettersColor;
            this.ctx.font = `${this.letterSize}pt ${this.font}`;

            this.letters.forEach((y, index) => {
                const randomSymbol = String.fromCharCode(12448 + Math.random() * 100);
                const x = index * this.letterSize;

                this.ctx.fillText(randomSymbol, x, y);

                if (y > 250 + Math.random() * 15000) this.letters[index] = 0;
                else this.letters[index] = y + this.letterSize;
            });

            this.ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
            this.ctx.fillRect(0, 0, this.width, this.height);
        }
    }

    createCanvas(element) {
        this.element.innerHTML = "";

        this.width = element ? this.element.offsetWidth : this.width;
        this.height = element ? this.element.offsetHeight : this.height;

        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'canvas');
        canvas.setAttribute('width', this.width);
        canvas.setAttribute('height', this.height);

        this.ctx = canvas.getContext('2d');

        const col = Math.floor(this.width / this.letterSize);
        this.letters = Array(col).fill(0);

        this.element.append(canvas);
    }

    init() {
        this.createCanvas();

        setInterval(() => {
            this.drawAnimation();
        }, this.speed);
    }

    pausePlay() {
        this.status = this.status ? false : true;
    }
}
const matrix = new MatrixAnimation(document.querySelector('#matrix'), '#00ff6a', 10, 'Noto Sans JP', 48);

matrix.init();

window.addEventListener('resize', () => {
    matrix.createCanvas(document.querySelector("#matrix"));
});

window.addEventListener('click', () => {
    matrix.pausePlay();
});

// ---------- SVG morphing ---------- //

const openedEyePath = "M2.32999 35.42C2.32999  35.42  18.99   2.09   48.16  2.09   C 77.33  2.09   93.99   35.42  93.99   35.42  C 93.99   35.42  77.33   68.75  48.16  68.75  C 18.99   68.75  2.32999 35.42  2.32999 35.42Z";
const closedEyePath = "M4.04584 35.415C4.04584 35.415 20.1329 35.415 48.165 35.415 C 76.197 35.415 92.2841 35.415 92.2841 35.415 C 92.2841 35.415 76.2933 35.415 48.165 35.415 C 20.0366 35.415 4.04584 35.415 4.04584 35.415Z";

let toggle = false;

const timeline = anime.timeline({
    duration: 300,
    easing: "easeInOutSine"
});

window.addEventListener('click', () => {

    timeline.add({
        targets: ".eye-first",
        d: { value: toggle ? openedEyePath : closedEyePath }
    }).add({
        targets: ".eye-last",
        scale: { value: toggle ? 1 : 0 }
    });

    console.log();

    toggle = toggle ? false : true;
});