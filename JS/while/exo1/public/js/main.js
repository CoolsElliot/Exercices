// 1. Exo 1 Boucles WHILE


//                       - Créez une variable classe avec un array

// let classe = [];


// //                   - A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe

// let tailleMaxClasse = +prompt("Définir la taille maximale de la classe ( nombre )");


// //                    - A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie

// while(classe.length != tailleMaxClasse){
// classe.push(prompt("Insérer un étudiant"));
// }


// //                   - Après avoir rempli la classe, affichez tous les etudiants

// alert(`Les membres de la classe sont :  ${classe} `);





// // 2. Exo 02


// //                        - Créer un tableau de 9 prénoms 
// //                        - Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
// //                        - Astuce : let i = 0;
// //                        - Astuce 2 : (i < 9)


// let tableau = ["Elliot", "Samy", "Calvin", "Jade", "Kevin", "Mohamed", "Gursel", "Isma", "Nicola"];
// let i = 0;

// while(i < 9){
//     alert(`Bonjour ${tableau[i]}`);
//     i++;
// }



// // 3. Exo 03


// //                          - Créer un tableau de 6 fruits

// let fruits = ["Pomme", "Fraise", "Ananas", "Orange", "Pastèque", "Banane"];

// //                          - Avec l'aide d'une boucle while vider le tableau.
// //                          - Utilisez fruits.length

// while(fruits.length > 0){
//     fruits.pop();
// }


// alert(fruits);

// 4. Exo 04

//                         - Créer un tableau de 4 légumes du nom de 'panierLegumes'

// let panierLegumes = ["Brocoli", "Tomates", "Épinards", "Salade"];


// //                      - Stocker la longueur du tableau dans une variable du nom de 'longeur'

// let longueur = panierLegumes.length;


// //                      - Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'

// let caisseLegumes = [];

// caisseLegumes = panierLegumes;

//panierLegumes = [];

// alert(caisseLegumes);




// 5. Exo 05
//                      - Préparez une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite

// let enigme = +prompt("Si j'ai 28 bonbons, que j'en donne la moité à mon ami, qu'il donne ensuite la moitié à son papa, combien de bonbons à son papa ?");

// while(enigme != 7){
//     enigme = +prompt("Si j'ai 28 bonbons, que j'en donne la moité à mon ami, qu'il donne ensuite la moitié à son papa, combien de bonbons à son papa ?");
// }

// if(enigme === 7){
//     alert("Félicitations ! 7 est la bonne réponse")
// }




// 6. Exo 06
//                                          - Re faire l'exo 4 avec DO WHILE

// let panierLegumes = ["Brocoli", "Tomates", "Épinards", "Salade"];
// let longueur = panierLegumes.length
// let caisseLegumes = [];
// let i = longueur - 1;

// while(i >= 0){
//     caisseLegumes.push(panierLegumes[i]);
//     panierLegumes.pop();
//     i--;
// }

// console.log(panierLegumes);
// console.log(caisseLegumes);





// 7. Exo 07
//                           - Créer une variable avec l'année actuelle
//                           - Créer un programme qui génère une année de façon aléatoire entre 1970 et 2018. L’utilisateur doit donner le bon age en répondant à la question suivante
//                           - : “Si je suis née en 1988(année généré aléatoirement), quel age ai-je aujourd’hui ? ”
//                           - L’utilisateur a trois essais. S’il donne la bonne réponse, on sort et s’il arrive à trois essaies on sort également.
//                           - Finir avec un affichage.

//ESSAI 1

// let annee = 2021;

// let anneeAleatoire = 1970 + Math.floor(Math.random() *48);

// let reponse = +prompt(`Si je suis né en ${anneeAleatoire}, quel-est mon âge ?`);

// if(annee - anneeAleatoire === reponse){
//     alert("C'est la bonne réponse !");
// }else{
//     reponse = (+prompt("2ème essai :"));
//     if(annee - anneeAleatoire === reponse){
//         alert("C'est la bonne réponse !");
//     }else{
//        reponse = (+prompt("Dernier essai :"));
//     if(annee - anneeAleatoire === reponse){
//         alert("C'est la bonne réponse !");
//     }

//     }
// }


//SOLUTION 1 (avec while)

//  let annee = 2021;

//  let anneeAleatoire = 1970 + Math.floor(Math.random() *48);

//  let reponse = +prompt(`Si je suis né en ${anneeAleatoire}, quel-est mon âge ?`);

// let i = 2;

// while(reponse != (annee - anneeAleatoire) && i > 0){
//     alert("Vous avez encore " + (i) + " chances");
//     reponse = +prompt(`Si je suis né en ${anneeAleatoire}, quel-est mon âge ?`);
//     i--;
// }

// if(reponse === (annee - anneeAleatoire)){
//     alert("Vous avez réussi !");
// }else{
//     alert("Vous avez échoué.");
// }


//SOLUTION 2 (sans while)

//  let annee = 2021;

//  let anneeAleatoire = 1970 + Math.floor(Math.random() *48);

//  let reponse = +prompt(`Si je suis né en ${anneeAleatoire}, quel-est mon âge ?`);

//  if(reponse === annee - anneeAleatoire){
//      alert("Bonne réponse !");
//  }else{
//     let i = 0;
//     while(i < 2){
//         reponse = +prompt(`Si je suis né en ${anneeAleatoire}, quel-est mon âge ?`);
//         i++;
//         if(reponse === annee - anneeAleatoire){
//             alert("Bonne réponse !");
//             break;
//         }else if(i === 2){
//             alert("Vous avez échoué");
//         }
//      }

//  }

 


// 8. Exo 08
//                              - Demandez a l'utlisateur de remplir un panier de fruit jusqu'a en obtenir 8
//                              - Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit

let demande;
let panier = [];
while (panier.length < 8) {
    demande = prompt("Balance un fruit");
    panier.push(demande);
};

alert(panier);

let question = window.confirm("Retirer un fruit?");

//                              - Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"

if (question ===  true) {

    let question2 = prompt("Quel fruit voulez-vous retirer?");

    for(let i = 0; i < 8; i++){
        for(let y = 0; y < panier.length; y++){
            if(question2 === panier[y]){
                panier.splice(y, 1);
                alert(panier);
                question2 = prompt("Retirer un nouveau fruit ?");
            }
        }
    }

    alert("Merci, bon appétit !");
    
} else {
    alert("Merci, bon appétit !")
}

//                                      - Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
//                                      - Lui montrer son panier avec la première lettre en majuscule


for(let z = 0; z < panier.length; z++){
    panier[z] = panier[z].substring(0,1).toUpperCase() + panier[z].substring(1, panier[z].length).toLowerCase();
    
}


//SOLUTION GURSEL

// alert(panier);


// var panier = [];
// while (panier.length < 5){
//     var fruit = prompt("Quels fruit voules-vous ajouter?")
//         panier.push(fruit);
//     }

// console.log(panier);

// var aRetirer = prompt(Panier rempli avec ${panier}. Souhaitez-vous retirer un fruit?);

// while(panier.indexOf(aRetirer) != -1){
//     panier.splice(panier.indexOf(aRetirer), 1);
//     aRetirer = prompt(Panier rempli avec ${panier}. Souhaitez-vous retirer un fruit?);
// }
// alert("Bon appetit");

// for (let i=0; i < panier.length; i++){
//     // panier[i] = panier[i].toLowerCase();
//     panier[i] = panier[i].charAt(0).toUpperCase() + panier[i].substring(1).toLowerCase();
// }
// alert(panier);













