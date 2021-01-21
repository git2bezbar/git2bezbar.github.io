function Afficher(a)
{
    var valeur = a.getAttribute('value');
    var input = document.getElementById('resultat');
    if (input.value == 0)
    {
      input.value = valeur;  
    }
    else
    {
    input.value += valeur;
    }
    
}

function Operation(a)
{
    input = document.querySelector('input');
    input.value+="a";
}

function Opposer()
{
    input = document.querySelector('input');
    input.value*=-1;
}

function Virgule()
{
    input = document.querySelector('input');
    input.value+=".";
}

function Carre()
{
    input = document.querySelector('input');
    input.value *= input.value ;
}

function Factoriel()
{
    input = document.querySelector('input');
    var ini = 1;
    for (var i=1;i<=input.value;i++)
    {
        ini *= i;
    }
    input.value = ini;
}

function Egal()
{
    input = document.querySelector('input');
    input.value= eval(input.value);    
}

function Reset()
{
    input = document.querySelector('input');
    input.value = "";
}

function Supprimer()
{
    var input = document.querySelector('input');
    var value = input.value;
    value = value.substring(0,value.length-1);
    input.value = value;
}

function Nbr()
{

    var input = document.getElementById('resultat');
    var nombre = input.value;
    const array = [nombre];
    
    do
    {
        if (nombre%2==0)
        {
            nombre = nombre/2;
            array.push(nombre);
        }
        else
        {
            nombre = 3*nombre + 1;
            array.push(nombre);
        }
    } while (nombre!==1);

    var nbrtab = array.length;
    input.value = nbrtab;
    //console.log(nbrtab);

}

function Max()
{
    
    var input = document.getElementById('resultat');
    var nombre = input.value;
    const array = [parseInt(nombre)];
    
    do
    {
        if (nombre%2==0)
        {
            nombre = nombre/2;
            array.push(nombre);
        }
        else
        {
            nombre = 3*nombre + 1;
            array.push(nombre);
        }
    } while (nombre!==1);

    input.value = Math.max(...array);
    //console.log(array);
    //console.log(Math.max(...array));

}

function Clavier()
{
   // var code = event.which;
    var input = document.getElementById('resultat');

}

document.addEventListener("keydown", function(event) { // RECONNAISSANCE DES TOUCHES DU CLAVIER
  //console.log(event.which);
  var input = document.getElementById('resultat');
  switch (event.which)
    {

        case 8 :                // EFFACER UN CARACTERE <=> C
            var value = input.value;
            value = value.substring(0,value.length-1);
            input.value = value;
            break;
        case 13 :               // ÉGAL
            if (eval(input.value)%1==0)
            input.value = eval(input.value);
            else
            input.value = eval(input.value).toFixed(5);
            break;
        case 96 :               // TOUCHE 0
            input.value += "0";
            break;
        case 97 :               // TOUCHE 1
            input.value += "1";
            break;
        case 98 :               // TOUCHE 2
            input.value += "2";
            break;
        case 99 :               // TOUCHE 3
            input.value += "3";
            break;
        case 100 :              // TOUCHE 4
            input.value += "4";
            break;
        case 101 :              // TOUCHE 5
            input.value += "5";
            break;
        case 102 :              // TOUCHE 6
            input.value += "6";
            break;
        case 103 :              // TOUCHE 7
            input.value += "7";
            break;
        case 104 :              // TOUCHE 8
            input.value += "8";
            break;
        case 105 :              // TOUCHE 9
            input.value += "9";
            break;
        case 106 :              // MULTIPLIER     
            input.value += "*";
            break;
        case 107 :             // ADDITIONNER  
            input.value += "+";
            break;
        case 109 :             // SOUSTRAIRE  
            input.value += "-";
            break;
        case 110 :             // AJOUT DE VIRGULE GRACE À LA TOUCHE "." 
            input.value += ".";
            break;
        case 111 :             // DIVISER  
            input.value += "/";
            break;
        case 188 :             // AJOUT DE VIRGULE GRACE À LA TOUCHE ","  
            input.value += ".";
            break;
        case 192 :             // MODULO  
            input.value += "%";
            break;

    }
    event.preventDefault();
});