//mini projet

/** Créer une class personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))


* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/

/**
* Créer un lieu (class) "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
*/

/**
* Créer un outil (couteau) (class)pour découper les ingrédients achetés
* propriétés : nom et action. 
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/

/**
 * Créer des produits (class)(ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */

// Créer un lieu "epicerie" (class == class maison) qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
// Les "ingrédients" créés juste au dessus contenus dans un tableau.
/**
 * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
 */
// Créer un bol avec un tableau comme contenu

// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

/**** DEBUT DE L'OMELETTE ****/

// Pour dire que le personnage est à la maison :

// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :

// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie

// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)

// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 

// console.log(`${personnage.nom} a pris un ${type du panier}`);

// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage

// Afficher un message à chaque ingrédient pris

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()

// Afficher un message de ce qu'il reste d'argent sur le personnage.

// rentrer à la maison (comme ça on pourra cuisiner)

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

// Afficher un petit message de chaque ingrédient qu'on met dans le bol.

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)

// Afficher un petit message

// Retourner à la maison pour continuer l'omelette

// Afficher un petit message

//  Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

// Afficher un message avec le nouveau mélange

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

// Cuire l'omelette avec la méthode de la poele 

// Afficher un message final, notre omelette est cuite :)

import {Personne,Lieu,Epicerie,Outil,Couteau,Poele,Bol,Produit} from "./_class.js"



let couteau = new Couteau("Couteau","coupé");
let poele = new Poele("Poele",[]);
let bol = new Bol("Bol",[]);
let oignon = new Produit("Oignon","entier",1.5);
let oeuf = new Produit("Oeuf","entier",1.5);
let poivre = new Produit("Poivre","moulu",1.5);
let sel = new Produit("Sel","fin",1.5);
let fromage = new Produit("Fromage","rapé",3);

let lieuInconnu = new Lieu("Inconnu",[]);
let maison = new Lieu("Maison",[]);
let epicerie = new Epicerie("Épicerie",[],[{nom: "Panier 1",contenu: []},{nom: "Panier 2",contenu: []},{nom: "Panier 3",contenu: []}],[oignon,oeuf,poivre,sel,fromage]);



let elliot = new Personne("Elliot",lieuInconnu,200,[],[]);

lieuInconnu.personnes.push(elliot);

elliot.seDeplacer(lieuInconnu,maison);
elliot.seDeplacer(maison,epicerie);


elliot.prendrePanier(epicerie);

console.log(elliot.mainDroite);
console.log(epicerie.paniers);

for(let i = 0; i< epicerie.ingredients.length; i++){
    elliot.mainDroite[0].contenu.push(epicerie.ingredients[i]);
    console.log(`${elliot.nom} a mis : ${epicerie.ingredients[i].nom} dans son panier`);
};

elliot.payerArticle();

console.log(`${elliot.nom} a encore ${elliot.argent} euros`);

elliot.seDeplacer(epicerie,maison);

for(let i = 0; i < elliot.mainDroite[0].contenu.length; i++){
    bol.contenu.push(elliot.mainDroite[0].contenu[i]);
    console.log(`${elliot.nom} a mis ${elliot.mainDroite[0].contenu[i].nom} dans le bol`);
    elliot.mainDroite[0].contenu.shift();
    i--;
}

console.log(elliot.mainDroite[0].contenu);

elliot.seDeplacer(maison,epicerie);

elliot.remettrePanier(epicerie);

elliot.seDeplacer(epicerie,maison);

elliot.couper(bol,couteau);

console.log(`${bol.contenu[0].nom} est dans l'état : ${bol.contenu[0].etat}, ${bol.contenu[1].nom} est dans l'état : ${bol.contenu[1].etat}, ${bol.contenu[2].nom} est dans l'état : ${bol.contenu[2].etat}, ${bol.contenu[3].nom} est dans l'état : ${bol.contenu[3].etat}, ${bol.contenu[4].nom} est dans l'état : ${bol.contenu[4].etat}`);

let omelette = [];

bol.melanger(bol,omelette);

for(let i = 0; i < omelette.length; i++){
    poele.contenu.push(omelette[i]);
    omelette.shift();
    bol.contenu.shift();
    i--;
};

console.log(`La poele contient maintenant les élements suivants mélangés : ${poele.contenu[0].nom} ${poele.contenu[1].nom} ${poele.contenu[2].nom} ${poele.contenu[3].nom} ${poele.contenu[4].nom}`);

console.log(bol.contenu);
console.log(omelette);

setTimeout(poele.cuire, 4000);













