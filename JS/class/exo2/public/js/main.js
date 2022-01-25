// // 2. EXO02
// //   - Créer une class Personnage avec comme propriétés : 
// //   - age , nom , ville

// class Personnage1{
//     constructor(nom,age,ville){
//         this.nom = nom;
//         this.age = age;
//         this.ville = ville;
//     }
//     sepresenter(){
//         console.log(`Bonjour je m'appelle ${this.nom}`);
//     }
// }

// //   - Faire 2 instances de cette class.

// let elliot = new Personnage1("Elliot",26,"Bruxelles");
// let aleksic = new Personnage1("Aleksic",29,"Bruxelles");




// // 3. EXO03
// //   - Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// //   - Lancer cette méthode sur les deux instances de l'exo1

// elliot.sepresenter();
// aleksic.sepresenter();


// // 4. Exo04
// //    - Créer une class Objet
// //      - _Propriétés : nom, prix

// class Objet{
//     constructor(nom,prix){
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// //    - Créer deux instances d'objets avec un nom et un prix
// //    - Créer une boite (tableau) et mettre les deux objets dedans.

// let batteDeBaseball = new Objet("Batte de Baseball",150);
// let balleDeBaseball = new Objet("Balle de Baseball",25);

// let boite = [];

// boite.push(batteDeBaseball,balleDeBaseball);

// //    - Créer une class Personnage
// //     - _Propriétés : nom(string), sac(tableau), argent(number)
// //     - _Méthode : prendre(objet)
// //     - _Méthode : acheter(vendeur, objet)

// class Personnage2{
//     constructor(nom,sac,argent){
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//     }
//     prendre(objet){
//         this.sac.push(boite.splice(boite.indexOf(objet),1)); 
//     };

//     acheter(vendeur,objet){
//         this.sac.push(vendeur.sac.splice(vendeur.sac.indexOf(objet),1));
//         this.argent -= objet.prix;
//         vendeur.argent += objet.prix;
//     };
// }

// // - Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// // - Ensuite faites acheter à l'un des deux, l'objet de l'autre.

// let mohamed = new Personnage2("Momo",[],200);
// let samy = new Personnage2("Samy",[],100);

// mohamed.prendre(batteDeBaseball);
// samy.prendre(balleDeBaseball);

// mohamed.acheter(samy,balleDeBaseball);

// console.log(boite,mohamed,samy);

// ## EXO5

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).

class Lieu {
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    };
}

// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison

let molengeek = new Lieu("Molengeek",[]);
let snack = new Lieu("Snack",[]);
let maison = new Lieu("Maison",[]);

// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.

class Personne {
    constructor(nom,prenom,argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
    };
    sedeplacer(personne,depart,arrivee){
        bus.embarquer(personne);
        for(let i = 0; i < bus.personnes.length; i++){
            if(personne === bus.personnes[i]){
                depart.personnes.splice(depart.personnes.indexOf(personne),1);
                bus.personnes.splice(bus.personnes.indexOf(personne),1);
                arrivee.personnes.push(personne);
            }
        }
    };
}


// ### Puis créez une instance de votre personnage.

let elliot = new Personne("Cools","Elliot",200);

// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

class Bus {
    constructor(personnes,caisse){
        this.personnes = personnes;
        this.caisse = caisse;
    }
    embarquer(personne){
        if(personne.argent >= 2.80){
            personne.argent -= 2.80;
            this.caisse += 2.80;
            this.personnes.push(personne)
        }else{
            console.log(`${personne.nom} n'a pas assez d'argent pour prendre le bus...`)
        }
           
    }
}

// ### Créez une instance de Bus. 

let bus = new Bus([],0);

// ### 8h00 Vous êtes à la maison.
maison.personnes.push(elliot);
console.log(maison);
// ### 8h30 Vous prennez le bus vers MolenGeek.
elliot.sedeplacer(elliot,maison,molengeek);
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
elliot.sedeplacer(elliot,molengeek,snack);
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
snack.personnes.splice(snack.personnes.indexOf(elliot),1);
molengeek.personnes.push(elliot);
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.
elliot.sedeplacer(elliot,molengeek,maison);
// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus

console.log(elliot.argent);
console.log(bus.caisse);

console.log(maison.personnes,snack.personnes,molengeek.personnes);














