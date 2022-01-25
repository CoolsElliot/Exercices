// 1. Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.


// let francois = {
//     prenom : "François",
//     nom : "Bazar",
//     panier : ["Huile", "Tomate", "Pain","Vin","Beurre"],
//     derober(){
//         this.panier.push(sergio.panier.pop());
//         this.panier.push(sergio.panier.pop());
//     }
// };

// let sergio = {
//     prenom : "Sergio",
//     nom : "Truc",
//     panier : ["Huile", "Tomate", "Pain","Papier Toilette", "Céréales"],
// };

// francois.derober();

// console.log(francois.panier);
// console.log(sergio.panier);


// 2. Exo 02 

//    - Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne

//    - une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

//    - Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

//    - Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.

// let vieille_dame = {
//     age: 102,
//     nom: {
//         prenom: "Serana",
//         nom: "Kordua"
//     },
//     moral: "mal",
//     objet: "canne",
//     parler(){
//         if(this.moral === "mal"){
//             alert(`Vous me dérangez ! "Le frappe avec sa ${this.objet}"`);
//         }else if(this.moral === "bien"){
//             alert(`Bonjour ${vieil_homme.nom}`)
//         }
//     }
// };

// let vieil_homme = {
//     nom: "Georges",
//     adoucir(){
//         vieille_dame.moral = "bien";
//     }
// }

// vieille_dame.parler();
// vieil_homme.adoucir();
// vieille_dame.parler();


