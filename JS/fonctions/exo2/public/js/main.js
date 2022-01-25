// // EXO1
// // Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

const reverseNumber = (nb1) => {
    nb1 = nb1.toString();
    nb1 = nb1.split("");
    nb1 = nb1.reverse().join("");
    nb1 = parseInt(nb1);
    return nb1;
}

console.log(reverseNumber(851));

// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

const divPar2 = (nb1) => {
    switch(nb1 % 2){
        case (0):
            return console.log(`Le numéro ${nb1} est divisible par 2, ${nb1}:2 = ${nb1 / 2}`);
        default:
            return console.log(`Ce nombre n'est pas divisible par 2`);
    }
}

divPar2(81);

// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

let logIn = () => {

    let motDePasse = prompt("Entrez: mdp");

    if(motDePasse === "mdp"){
        alert("Vous êtes connecté");
    }else{
        for(let i = 2; motDePasse != "mdp"; i++){
            motDePasse = prompt(`Ceci est votre tentative numéro${i} . Entrez: mdp`);
        }
    }

    
}

logIn();