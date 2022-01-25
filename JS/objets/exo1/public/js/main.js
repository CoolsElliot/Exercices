// 1. Exo 1 
//   - Créez un objet avec vos valeurs
//   - 'Nom', 'prenom', 'age', 'taille'
//   - Affichez votre age via un console.log()

let elliot = {
    age: 26,
    nom: "Cools",
    prenom: "Elliot",
    taille: 178
}

console.log(elliot.age);


// 2. Exo 2 
//   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

let jean = {
    age: 27,
    nom: "Dushit",
    prenom: "Yvan",
    taille: 178
};

let inconnu = {};

// 3. Exo 3
//   - Remplir les propriétées du 3eme personnage
//   - Son nom doit valoir le nom du personnage1
//   - Son age doit valoir celui du personnage2
//   - Et sa taille doit être rempli avec la valeur que vous souhaitez

inconnu.nom = elliot.nom;

inconnu.age = jean.age;

inconnu.taille = 200;

console.log(inconnu);

// 3. Exo 3
//   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

let personnage = {
    nom: "Elliot",
    prenom: "Cools",
    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}

personnage.sePresenter();

// 4. Exo 4
//   - Créer un objet avec un nom et une méthode
//   - La méthode de votre objet lance un prompt permetant de changer son age
//   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"

let obj = {
    nom: "Elliot",
    changeAge(){
        obj.age = +prompt("Changer l'âge de obj : (chiffre)");
        alert(`${this.nom} a ${this.age} ans`);
    }
}

obj.changeAge();