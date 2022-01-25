// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

const addition = (nb1,nb2) => {
    let result = nb1 + nb2;
    return result;
}

console.log(addition(10,5));

// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

const soustraction = (nb1,nb2) => {
    let result = nb1 - nb2;
    return result;
}

console.log(soustraction(10,5));

// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

const multiplication = (nb1,nb2) => {
    let result = nb1 * nb2;
    return result;
}

console.log(multiplication(10,5));

// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

const division = (nb1,nb2) => {
    let result = nb1 / nb2;
    return result;
}

console.log(division(10,5));

// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

const modulo = (nb1,nb2) => {
    let result = nb1 % nb2;
    return result;
}

console.log(modulo(10,5));

// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

const carre = (nb1) => {
    let result = Math.sqrt(nb1);
    return result;
}

console.log(carre(10));

// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

const puissance = (base,exposant) => {
    let result = Math.pow(base,exposant);
    return result;
}

console.log(carre(10));

// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

const capitalize = (texte) => {
    let result = texte.substring(0,1).toUpperCase() + texte.substring(1, texte.length).toLowerCase();
    return result;
}

console.log(capitalize("elliot"));

// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

const calcul = (nb1,operator,nb2) => {

    switch(operator){
        case "+" :
            let result1 = addition(nb1,nb2);
            return result1;
        case "-" :
            let result2 = soustraction(nb1,nb2);
            return result2;
        case "*" :
            let result3 = multiplication(nb1,nb2);
            return result3;
        case "/" :
            let result4 = division(nb1,nb2);
            return result4;
    }
}

console.log(calcul(42,"/",7));
