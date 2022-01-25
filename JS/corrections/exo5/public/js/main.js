//1

let maVariable = "Bonjour"

let tabExo = ["Elliot", maVariable, 44, 28, true]

console.log(tabExo);

//2

console.log(tabExo.length);

//3

tabExo.pop();

console.log(tabExo);


// 4

tabExo.shift();

console.log(tabExo);

//5

tabExo.splice(3, 0, "ajout1", "ajout2");

console.log(tabExo);

/* 6. Trouvez une méthode qui rajoute un ou des éléménts au début du tableau tabExo, ajoutez y 3 éléménts et afficher le tableau apres modification avec l'aide d'un console.log(), il devrait vous montrez 8 éléments */

tabExo.unshift("ajout1", "ajout2", "ajout3");
console.log(tabExo);

/* 7. Trouvez une méthode qui permet de retourner le tableau et affichez le via un console.log() */

tabExo.reverse();
console.log(tabExo);

/* 8 Elias est très méticuleux et à besoin de ranger quelques vieilles affaires à lui d'une manière assez particulière et évidemment il à horreur qu'on le fasse à sa place. Aidez Elias à pouvoir ranger ses affaires dans un ordre très précis.
Créer lui une boite ou il pourra y stocker des choses de différens type */

// 1- Elias mettra son premier objet normalement dans la boite

let boiteElias = ["objet1"];

// 1- Il veut pouvoir repeter cette action une seconde fois.

boiteElias.push("objet2");

// 1-Elias observe sa boite avec une alert

alert(boiteElias);

// 1-Pour son troisieme objet il aimerait le mettre avant les autres

boiteElias.unshift("objet3");

// 1-Elias observe sa boite avec une alert

alert(boiteElias);

// 1-Il attrape 3 objets et décidera de les mettre tout au fond de la boite

boiteElias.push("objet4", "objet5", "objet6");

// 1-Je pense qu'une alert serait la bienvenue pour aider Elias à savoir ce que contient sa boite car il est un peu perdu entre toutes ces choses.

alert(boiteElias);

// 1-N'étant pas satisfait de son rangement il décide de retirer les trois premiers objets

boiteElias.splice(0, 3);

// 1-D'en rajouter un

boiteElias.push("objet7");

// 1-Elias à un petit problème il ne sait pas compter je me demande comment on pourrait afficher le nombre d'objet contenu par sa boite dans une alert...

alert(boiteElias.length);

// 1-Trouvant que c'est un peu trop chargé il décide de retirer les 2 derniers objets de sa boîte

boiteElias.splice(2, 2);

// 1-Et pourquoi pas retirer les 2 premier...

boiteElias.splice(0, 2);

// 1-Elias observe sa boite via une alert

alert(boiteElias);

// 1-Desespéré de voir qu'il à fini par tout y retirer Elias range sa boite et s'en va. 