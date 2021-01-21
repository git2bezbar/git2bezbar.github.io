// Fonction de génération de matrice

function Generer() {

    var ligne1 = document.querySelector(".ligne1").value;
    var ligne2 = document.querySelector(".ligne2").value;
    var colonne1 = document.querySelector(".colonne1").value;
    var colonne2 = document.querySelector(".colonne2").value;
    var matricea = document.querySelector(".matricea");
    var matriceb = document.querySelector(".matriceb");
    var matricec = document.querySelector(".matricec");
    var message = document.querySelector(".message");




    if (colonne1 != ligne2)
    {
        console.log("Calcul impossible");
        message.innerHTML= "<h3> Veuillez vérifier que le nombre de colonne(s) de la matrice A soit égal au nombre de ligne(s) de la matrice B </h3>";
    }
    else
    {
        if ((ligne1 || ligne2 || colonne1 || colonne2) < 1 || (ligne1 || ligne2 || colonne1 || colonne2) > 10 )
        {
            message.innerHTML = "<h3> Veuillez entrer des valeurs comprises entre 1 et 10 </h3>";
        }
        else {
            console.log("Calcul possible");
            message.innerHTML = "";
            matricea.innerHTML = "<legend><b>Matrice A</b></legend>";
            matriceb.innerHTML = "<legend><b>Matrice B</b></legend>";
            matricec.innerHTML = "<legend><b>Matrice C</b></legend>";
            
            // Matrice A

            // Génération des colonnes
            for (var i=1; i<= ligne1; i++)
            {
                var  colonne = document.createElement("div");
                var classe = "row" + i;
                colonne.className = classe;
                matricea.appendChild(colonne);

                // Génération des input type=number servant de coefficient
                for (var j=1; j<= colonne1; j++)
                {
                    var coefficient = document.createElement("input");
                    coefficient.setAttribute("type", "number");
                    var classe2 = "column" + j;
                    coefficient.className =  "coefficient "+ classe2;
                    document.querySelector(".matricea > ."+classe).appendChild(coefficient);
                }
                
            }

            // Matrice B

            // Génération des colonnes
            for (var i=1; i<= ligne2; i++)
            {
                var  colonne = document.createElement("div");
                var classe = "row" + i;
                colonne.className = classe;
                matriceb.appendChild(colonne);

                // Génération des input type=number servant de coefficient
                for (var j=1; j<= colonne2; j++)
                {
                    var coefficient = document.createElement("input");
                    coefficient.setAttribute("type", "number");
                    var classe2 = "column" + j;
                    coefficient.className =  "coefficient "+ classe2;
                    document.querySelector(".matriceb > ."+classe).appendChild(coefficient);
                }
                
            } 

            // Matrice C

            for (var i=1; i<= ligne1; i++)
            {
                var  colonne = document.createElement("div");
                var classe = "row" + i;
                colonne.className = classe;
                matricec.appendChild(colonne);

                // Génération des input type=number servant de coefficient
                for (var j=1; j<= colonne2; j++)
                {
                    var coefficient = document.createElement("input");
                    coefficient.setAttribute("type", "number");
                    coefficient.setAttribute("disabled", "disabled");
                    var classe2 = "column" + j;
                    coefficient.className =  "coefficient "+ classe2;
                    document.querySelector(".matricec > ."+classe).appendChild(coefficient);
                }
                
            } 


        }
        
    }
}

// Fonction d'effacement des matrices
function Effacer() {
    document.querySelector(".matricea").innerHTML = "<legend><b>Matrice A</b></legend>";
    document.querySelector(".matriceb").innerHTML = "<legend><b>Matrice B</b></legend>";
    document.querySelector(".matricec").innerHTML = "<legend><b>Matrice C</b></legend>";
    document.querySelector(".message").innerHTML = "";
}

// Fonction de remplissage avec des 0
function Remplir() {
    var coefficients = document.querySelectorAll(".matricea .coefficient, .matriceb .coefficient");
    console.log(coefficients);

    coefficients.forEach(element => {
        if (element.value == "")
        {
            element.value="0";
        }
    });
    
}

// Calcul de la matrice C
function Calculer() {
    var ligne1 = document.querySelector(".ligne1").value;
    var ligne2 = document.querySelector(".ligne2").value;
    var colonne1 = document.querySelector(".colonne1").value;
    var colonne2 = document.querySelector(".colonne2").value;
    var matricea = document.querySelector(".matricea");
    var matriceb = document.querySelector(".matriceb");
    var matricec = document.querySelector(".matricec");
    var coeffa = [];
    var coeffb = [];
    var coeffc = [];              

    // Récupération des coefficients de la matrice A dans un tableau constitué de tableaux

    for (var i=1; i<= ligne1; i++)
    {
        var tab_ligne = [];
        for (var j=1; j<= colonne1; j++)
        {

            /* console.log("A : ligne "+i+", colonne "+j); */
            var valeur_coeff = document.querySelector(".matricea > .row"+i+" > .column"+j).value;
            tab_ligne.push(valeur_coeff);
        }
        coeffa.push(tab_ligne);
    }
    console.log(coeffa);

    // Récupération des coefficients de la matrice B dans un tableau constitué de tableaux

    for (var k=1; k<= colonne2; k++)
        {
            var tab_colonne = [];
            for (var l=1; l<= ligne2; l++)
            {
                var valeur_coeff = document.querySelector(".matriceb > .row"+l+" > .column"+k).value;
                tab_colonne.push(valeur_coeff);
            }
            coeffb.push(tab_colonne);
        }
        console.log(coeffb);

    for (var o=0; o< coeffa.length; o++)
        {
            
            for (var p=0; p< coeffb.length; p++)
            {
                var val = 0;
                for (var q=0;q<ligne2;q++)
                {
                    val += (coeffa[o][q]*coeffb[p][q]);
                }
                coeffc.push(val);
            }

        }

    console.log(coeffc);

    // enlever premier element tableau = fruits.splice(0, 1);

    for (var r=1; r<= ligne1; r++)
    {
        var row = document.querySelectorAll(".matricec > .row"+r+" > .coefficient");
        console.log(row);
        row.forEach(element => {
            element.value = coeffc[0];
            console.log(element.value)
            coeffc.splice(0, 1);
        });
            

    }


}

function Menu() {
    document.querySelector(".sous_menu").classList.toggle("menu_baisser");

}
