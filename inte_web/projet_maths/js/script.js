//---PARTIE 1---//

//***récupération du innerHTML des div où seront les réponses***//
var reppgcd = document.querySelector('.reppgcd');
var repbezout = document.querySelector('.repbezout');
var repppcm = document.querySelector('.repppcm');
var reppremier = document.querySelector('.reppremier');
var a = document.querySelector('.a');
var b = document.querySelector('.b');

//***Fonction pour effacer les réponses de la partie I***//

function Effacer() {

    reppgcd.innerHTML = '';
    repbezout.innerHTML = '';
    repppcm.innerHTML = '';
    reppremier.innerHTML = '';
}

//***Fonction qui calcule et affiche les étapes du PGCD***//

function Pgcd() {

    //***récupération de a et b***//
    var a = parseFloat(document.querySelector('.a').value);
    var b = parseFloat(document.querySelector('.b').value);

    //***copie pour l'affichage final***//
    var a_bis = parseFloat(document.querySelector('.a').value);
    var b_bis = parseFloat(document.querySelector('.b').value);

    //***remise à zéro du contenu de la div qui accueillera le texte***//
    reppgcd.innerHTML = "";

    if (isNaN(a) || isNaN(b)) {
        reppgcd.innerHTML += "Veuillez remplir les deux champs.<br>";
        return;
    }

    if (b > a) // si b est plus grand que a, on inverse les valeurs des deux variables
    {
        c = b;
        b = a;
        a = c;
    }

    var r = a % b;
    var q = (a - r) / b;

    while (r !== 0) {
        reppgcd.innerHTML += a + "=" + b + "*" + q + "+" + r + "<br>";  // on affiche a=bq+r
        a = b;                                            // la nouvelle valeur de a est b
        b = r;                                            // la nouvelle valeur de b est le reste
        r = a % b;                                        // le reste est le modulo des nouveaux a et b

        // Explication de la prochaine ligne : a=bq+r <=> a-r=bq <=> q=(a-r)/b

        q = (a - r) / b;                                    // on calcule q avec les nouvelles variables
    }
    reppgcd.innerHTML += a + "=" + b + "*" + q + "+" + r + "<br>";
    reppgcd.innerHTML += "Le PGCD de <b>" + a_bis + "</b> et <b>" + b_bis + "</b> est <b>" + Math.abs(b) + "</b>.";
    // Math.abs(b) parce que le PGCD est strictement positif
}

//***Fonction qui calcule le PPCM***//

function Ppcm() {

    //***récupération de a et b***//
    var a = parseFloat(document.querySelector('.a').value);
    var b = parseFloat(document.querySelector('.b').value);

    //***copie pour l'affichage final***//
    var a_bis = parseFloat(document.querySelector('.a').value);
    var b_bis = parseFloat(document.querySelector('.b').value);

    //***remise à zéro du contenu de la div qui accueillera le texte***//
    repppcm.innerHTML = "";

    if (isNaN(a) || isNaN(b)) {
        reppgcd.innerHTML += "Veuillez remplir les deux champs.<br>";
        return;
    }

    //***calcul de la valeur absolue***//
    var ab = Math.abs(a * b);

    //**calcul du PGCD**//
    if (b > a) // si b est plus grand que a, on inverse les valeurs des deux variables
    {
        c = b;
        b = a;
        a = c;
    }

    var r = a % b;
    var q = (a - r) / b;

    while (r !== 0) {
        a = b;
        b = r;
        r = a % b;
        q = (a - r) / b;
    }
    b = Math.abs(b);

    //**calcul du PPCM**//

    // Explication : |ab| = pgcd(a,b) * ppcm(a,b) <=> ppcm(a,b) = |ab| / pgcd(a,b)

    var ppcm = ab / b;

    repppcm.innerHTML += "Le PPCM de <b>" + a_bis + "</b> et <b>" + b_bis + "</b> est <b>" + ppcm + "</b>."

}

//***Fonction pour qui calcule les coefficients de Bézout***//

function Bezout() {

    //***récupération de a et b.***//
    var a = parseInt(document.querySelector('.a').value);
    var b = parseInt(document.querySelector('.b').value);

    //***copie pour l'affichage final***//
    var a_bis = parseInt(document.querySelector('.a').value);
    var b_bis = parseInt(document.querySelector('.b').value);

    //***remise à zéro du contenu de la div qui accueillera le texte***//
    repbezout.innerHTML = "";

    if (isNaN(a) || isNaN(b)) {
        reppgcd.innerHTML += "Veuillez remplir les deux champs.<br>";
        return;
    }

    var u = 1;
    var v = 0;
    var x = 0;
    var y = 1;

    while (b > 0) {
        var r = a % b;
        var q = (a - r) / b;
        var c = u;
        var d = v;
        u = x;
        v = y;
        x = c - q * x;
        y = d - q * y;
        if (r !== 0) {
            if (x < 0) {
                x = "(" + x + ")";
            }
            if (y < 0){
                y = "(" + y + ")";
            }
            repbezout.innerHTML += r + " = " + a_bis + "*" + x + "+" + b_bis + "*" + y + "<br>";
            x = eval(x);
            y = eval(y);
        }
        a = b;
        b = r;

    }

    repbezout.innerHTML += "Les coefficients de Bezout de " + a_bis + " et " + b_bis + " sont : u = " + u + " et v = " + v;
}

//***Fonction pour qui calcule la décomposition en facteurs premiers d'un chiffre/nombre***//

function Fac(obj) {

    var diviseur = 2;
    var nombre = obj;
    var message = nombre + " = ";
    var texte = "";

    if (nombre <= 1) {
        reppremier.innerHTML += "Veuillez entrer un nombre strictement supérieur à 1. <br>";
        return;
    }
    if (isNaN(nombre)) {
        reppremier.innerHTML += "Veuillez remplir les deux champs. <br>"; return;
    }

    while (nombre >= Math.pow(diviseur, 2)) {
        var i = 0;
        while (nombre % diviseur == 0) {
            nombre /= diviseur;
            ++i;
        }
        if (i == 1) {
            message += (texte + diviseur);
            texte = "<sup>1</sup>";
        }
        if (i > 1) {
            message += (texte + diviseur);
            message += "<sup>" + i + "</sup>";
        }
        if (diviseur < 3) {
            diviseur = 3;
        }
        else {
            diviseur += 2;
        }
    }
    if (nombre > 1) {
        message += texte + nombre + "<sup>1</sup>";
    }
    reppremier.innerHTML += message + "<br>";


}

//---PARTIE 2---//

var tableau_majuscule = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var tableau_minuscule = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//**récupération du innerHTML du texte où est le texte écrit**//
var texte = document.querySelector('.texte');
var resultat = document.querySelector('.resultat');
var decalage = document.querySelector('.decalage');

//***Fonction pour effacer les réponses de la partie II***//

function Effacer2() {

    texte.value = '';
    resultat.value = '';

}

function Codage(m) {

    //**création d'un variable qui accueillera le texte chiffré et remise à zéro du textarea qui aura le résultat**//
    var nv_texte = '';
    resultat.value = '';

    for (var i = 0; i < texte.value.length; i++) {

        var lettre = texte.value[i];                            // récupération du caractère à coder

        var rang = tableau_majuscule.indexOf(lettre);           // récupération du rang par rapport au tableau des lettres majuscules

        if (rang !== -1) {                                      // rang retourne -1 si le caractère n'est pas dans le tableau
            rang = (rang + m) % 26;                             // calcul du nouveau rang, avec l'ajout (ou la soustraction) de M et la congruence modulo 26
            while (rang < 0) {
                rang += 26;                                     // on rajoute 26 si le rang est négatif (pour le décodage)
            }

            lettre = tableau_majuscule[rang];                   // recherche de la nouvelle lettre dans le tableau
        }
        else {
            var rang = tableau_minuscule.indexOf(lettre);       // mêmes tests avec une lettre minuscule
            if (rang !== -1) {
                rang = (rang + m) % 26;
                while (rang < 0) {
                    rang += 26;
                }
                lettre = tableau_minuscule[rang];
            }

        }
        nv_texte += lettre;                                     // on ajoute les caractères pour avoir la nouvelle chaîne de caractère
    }
    resultat.value = nv_texte;                                  // affectation de la chaîne dans le textarea class="resultat"
}


