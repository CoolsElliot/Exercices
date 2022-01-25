// 1. EXO1
//   - Traduire le code suivant en class et en instances

// // lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };

class Lieu{
    constructor(nom,contenu){
        this.nom = nom;
        this.contenu = contenu;
    }
}

let maison = new Lieu("maison",[]);

console.log(maison);

class Lieu2 extends Lieu{
    constructor(nom,contenu,ingredients){
        super(nom,contenu)
        this.ingredients = ingredients;
    }
}

let epicerie = new Lieu2("epicerie",[],[]);
let cuisine = new Lieu2("cuisine",[],[]);

console.log(epicerie);
console.log(cuisine);

// // ingredients
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };


class Ingredient{
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let poivron = new Ingredient("poivron","entier",1);
let oignon = new Ingredient("oignon","entier",2);
let oeuf = new Ingredient("oeuf","entier",4);
let epice = new Ingredient("epice","entier",3.25);
let paprika = new Ingredient("paprika","entier",1);
let fromage = new Ingredient("fromage","entier",1);



// // Personne
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }





class Personne {
    constructor(nom,lieu,argent,panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = [panier];
    }

    se_deplacer(x){

    }

    payer(x){

    }
    couper(x,y){

    }
}

let personnage = new Personne("Maxime","néant",100)

console.log(personnage)