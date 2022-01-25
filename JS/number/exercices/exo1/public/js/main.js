//  1. let nombre = 8.56

let nombre = 8.56;

//  2.  Arrondir au nombre à l'entier le plus proche

nombre = Math.round(nombre);
console.log(nombre);

//  3.  Arrondir à l'entier vers le haut

nombre = Math.ceil(nombre);
console.log(nombre);

//  4.  Arrondir à l'entier vers le bas

nombre = Math.floor(nombre);
console.log(nombre);

//  5.  Enlever toute la partie décimale

nombre = 8.56;
nombre = Math.trunc(nombre);
console.log(nombre);

//  6.  Afficher un nombre aléatoire entre 0-1

console.log(Math.random());

//  7.  Afficher un nombre aléatoire entre 0-100

console.log(Math.random() * 100);

//  8.  Afficher un nombre entier aléatoire entre 0-100

console.log(Math.floor(Math.random() * 100));

//  9.  Afficher 8 puissance 2

console.log(Math.pow(8, 2));

//  10.  Afficher racine carré de 9

console.log(Math.sqrt(9));

//  11. Afficher la valeur absolue de -1

console.log(Math.abs(-1));

//  12. Afficher la valeur la plus grande parmi -2, 1000, 8, 57

console.log(Math.max(-2, 1000, 8, 57));

//  13.  Afficher la valeur la plus petite parmi -2, 1000, 8, 57

console.log(Math.min(-2, 8, 1000, 57));