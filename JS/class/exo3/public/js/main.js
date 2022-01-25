import {Personne,Produit,Appartement} from "./_class.js"

// // - Vous allez créer une class Personne qui aura besoin d'un nom, prenom, age, argent, panier et d'une methode prendre
// // - Vous allez créer une class Produit dans laquelle il y a un nom, un prix et une taille
// // - Vous allez créer 3 instances de Personne et 5 instance de Produit

// let elliot = new Personne("Cools","Elliot",26,200,[]);
// let samy = new Personne("Pulat","Samy",27,200,[]);
// let jade = new Personne("Richard","Jade",22,200,[]);

// let veste = new Produit("veste",80,"XL",false);
// let pull = new Produit("pull",50,"XL",false);
// let tee_shirt = new Produit("tee-shirt",20,"L",false);
// let jean = new Produit("jean",80,"L",false);
// let casquette = new Produit("casquette",20,"M",false);

// let chambre = new Appartement("Chambre",[],[]);

// // - Avez la méthode prendre, vous allez mettre les produits dans votre sac

// elliot.prendre(veste);
// samy.prendre(pull);
// jade.prendre(tee_shirt);
// elliot.prendre(jean);
// jade.prendre(casquette);

// console.log(elliot.panier);
// console.log(samy.panier);
// console.log(jade.panier);

// elliot.acheter();
// samy.acheter();
// jade.acheter();

// console.log(elliot.argent);
// console.log(samy.argent);
// console.log(jade.argent);

// chambre.personnes.push(elliot);

// console.log(chambre);

// elliot.deposer(chambre);

// console.log(elliot.panier);
// console.log(chambre.armoire);



// # Exercice bonus: Combat Pokemon

// ## mise en place:

// ### Dans ce exo, tu vas devoir mettre en place une Class Pokemon dans laquelle on retrouvera un nom sous forme de String, un niveau allant de 1 à 99 sous forme d'un Integer, des points de vie sous forme d'un Integer, une vitesse aussi sous forme d'un Integer ainsi qu'un tableau de type avec un maximum de 2 types par Pokemon

class Pokemon {
    constructor(nom,niveau,pointsDeVie,vitesse,defense,typesMax2){
        this.nom = nom;
        this.niveau = niveau;
        this.pointsDeVie = pointsDeVie;
        this.vitesse = vitesse;
        this.defense = defense;
        this.typesMax2 = typesMax2;
    }
}
// #### (Pour voir les différents types de Pokemon, tu peux consulter cette page : https://boutique-pokemon.com/blogs/blog-pokemon/table-types-pokemon )

// ## Combat:

// ### Tu devras ensuite extends cette Class afin de créer une Class par Pokemon. Cette Class devra contenir des méthodes pour permettre au Pokemon d'effectuer différentes actions ex: une Class Pikachu avec les méthodes fatal_foudre, queue_de_fer, charge et quick_attack

class Pikachu extends Pokemon{
    
    fatal_foudre(cible){
        cible.pointsDeVie = 0;
       alert(`${this.nom} lance fatal foudre sur ${cible.nom}, ${cible.nom} est mort !`);
        
    }

    queue_de_fer(cible){
        cible.pointsDeVie -= (30 - cible.defense);
        alert(`${this.nom} lance queue de fer sur ${cible.nom}, les pv restants de ${cible.nom} sont de : ${cible.pointsDeVie} pv`);
    }

    charge(cible){
        cible.pointsDeVie -= (45 - cible.defense);
        alert(`${this.nom} lance charge sur ${cible.nom}, les pv restants de ${cible.nom} sont de : ${cible.pointsDeVie} pv`);
    }

    quick_attack(cible){
        cible.pointsDeVie -= (15 - cible.defense);
        alert(`${this.nom} lance quick attack sur ${cible.nom}, les pv restants de ${cible.nom} sont de : ${cible.pointsDeVie} pv`);
    }

}

class Ronflex extends Pokemon{

    plaquage(cible){
        if(cible.typesMax2[1] === "faiblesse sol"){
            cible.pointsDeVie -= (60 - cible.defense);
            alert(`${this.nom} lance plaquage sur ${cible.nom}, c'est super efficace ! Les pv restants de ${cible.nom} sont de : ${cible.pointsDeVie} pv`);
        }else{
            cible.pointsDeVie -= (30 - cible.defense);
            alert(`${this.nom} lance plaquage sur ${cible.nom}, les pv restants de ${cible.nom} sont de : ${cible.pointsDeVie} pv`);
        }  
          
    }

    eclate_roc(cible){
        cible.pointsDeVie -= (45 - cible.defense);
        alert(`${this.nom} lance eclate roc sur ${cible.nom}, les pv restants de ${cible.nom} sont de : ${cible.pointsDeVie} pv`);
        
    }

    roulade(cible){
        if(cible.typesMax2[1] === "faiblesse sol"){
            cible.pointsDeVie -= (30 - cible.defense);
            alert(`${this.nom} lance roulade sur ${cible.nom}, c'est super efficace ! Les pv restants de ${cible.nom} sont de : ${cible.pointsDeVie} pv`);
        }else{
            cible.pointsDeVie -= (15 - cible.defense);
            alert(`${this.nom} lance roulade sur ${cible.nom}, les pv restants de ${cible.nom} sont de : ${cible.pointsDeVie} pv`);
        }  
             
    }

    etouffement(cible){
        cible.pointsDeVie = 0;
        alert(`${this.nom} lance etouffement sur ${cible.nom}, ${cible.nom} est mort !`);
        
    }
}

let ronflex = new Ronflex("Ronflex",5,150,60,10,["type sol","faiblesse plante"]);
let pikachu = new Pikachu("Pikachu",5,150,80,10,["type electrik","faiblesse sol"]);

// ### Pour cette partie , tu vas devoir mettre en place une fonction qui va gérer le combat. Cette fonction prendra en charge deux paramètres: Le Pokemon que tu contrôleras et le Pokemon ennemi. Il faudra à l'aide de prompt demander à l'utilisateur quelle action il voudra exécuter. Ensuite, il faudra laisser l'ennemi exécuter une action et ce ainsi de suite jusqu'à ce que l'un des deux Pokemons tombe KO. N'oublie pas qu'une propriété de vitesse a été mise en place, cela determinera quel Pokemon attaquera en premier.

function combat(pokemon,ennemi){

    alert(`${pokemon.nom} attaque ${ennemi.nom} ! Le combat commence !`);

    while(pokemon.pointsDeVie > 0 && ennemi.pointsDeVie > 0){
        if(pokemon === ronflex && pokemon.vitesse >= ennemi.vitesse){

            let attaque = +prompt(`Quelle attaque voulez-vous utiliser ? 1:Plaquage (30 dégats) 2:Eclate Roc (45degats) 3:Roulade (15degats) 4:Etouffement (tue l'adversaire)`);

            switch(attaque){
                case 1 : pokemon.plaquage(ennemi);
                break;
    
                case 2 : pokemon.eclate_roc(ennemi);
                break;
    
                case 3 : pokemon.roulade(ennemi);
                break;
    
                case 4 : pokemon.etouffement(ennemi);
                break;
            }

            if(pokemon.pointsDeVie > 0 && ennemi.pointsDeVie > 0){
                let attaque2 = Math.floor(Math.random() * 4);
    
                switch(attaque2){
                    case 1 : ennemi.fatal_foudre(pokemon);
                    break;
    
                    case 2 : ennemi.queue_de_fer(pokemon);
                    break;
    
                    case 3 : ennemi.charge(pokemon);
                    break;
    
                    case 4 : ennemi.quick_attack(pokemon);
                    break;
                }

            }
            

        }else if(pokemon === pikachu && pokemon.vitesse >= ennemi.vitesse){

            let attaque = +prompt(`Quelle attaque voulez-vous utiliser ? 1:Fatal Foudre (tue l'adversaire) 2:Queue De Fer (30degats) 3:Charge (45degats) 4:Quick Attack (15degats)`);

            switch(attaque){
                case 1 : pokemon.fatal_foudre(ennemi);
                break;
    
                case 2 : pokemon.queue_de_fer(ennemi);
                break;
    
                case 3 : pokemon.charge(ennemi);
                break;
    
                case 4 : pokemon.quick_attack(ennemi);
                break;
            }

            if(pokemon.pointsDeVie > 0 && ennemi.pointsDeVie > 0){
                let attaque2 = Math.floor(Math.random() * 4);
    
                switch(attaque2){
                    case 1 : ennemi.plaquage(pokemon);
                    break;
    
                    case 2 : ennemi.eclate_roc(pokemon);
                    break;
    
                    case 3 : ennemi.roulade(pokemon);
                    break;
    
                    case 4 : ennemi.etouffement(pokemon);
                    break;
                }

            }
            
        }
        else if(pokemon === ronflex && pokemon.vitesse <= ennemi.vitesse){

            let attaque2 = Math.floor(Math.random() * 4);

            switch(attaque2){
                case 1 : ennemi.fatal_foudre(pokemon);
                break;
    
                case 2 : ennemi.queue_de_fer(pokemon);
                break;
    
                case 3 : ennemi.charge(pokemon);
                break;
    
                case 4 : ennemi.quick_attack(pokemon);
                break;
            }

            if(pokemon.pointsDeVie > 0 && ennemi.pointsDeVie > 0){
                let attaque = +prompt(`Quelle attaque voulez-vous utiliser ? 1:Plaquage (30 dégats) 2:Eclate Roc (45degats) 3:Roulade (15degats) 4:Etouffement (tue l'adversaire)`);
    
                switch(attaque){
                    case 1 : pokemon.plaquage(ennemi);
                    break;
    
                    case 2 : pokemon.eclate_roc(ennemi);
                    break;
    
                    case 3 : pokemon.roulade(ennemi);
                    break;
    
                    case 4 : pokemon.etouffement(ennemi);
                    break;
                }
            }
            

            console.log(pokemon,ennemi);
        }
        else if(pokemon === pikachu && pokemon.vitesse <= ennemi.vitesse){

            let attaque2 = Math.floor(Math.random() * 4);

            switch(attaque2){
                case 1 : ennemi.plaquage(pokemon);
                break;
    
                case 2 : ennemi.eclate_roc(pokemon);
                break;
    
                case 3 : ennemi.roulade(pokemon);
                break;
    
                case 4 : ennemi.etouffement(pokemon);
                break;
            }

            if(pokemon.pointsDeVie > 0 && ennemi.pointsDeVie > 0){
                let attaque = +prompt(`Quelle attaque voulez-vous utiliser ? 1:Fatal Foudre (tue l'adversaire) 2:Queue De Fer (30degats) 3:Charge (45degats) 4:Quick Attack (15degats)`);
    
                switch(attaque){
                    case 1 : pokemon.fatal_foudre(ennemi);
                    break;
    
                    case 2 : pokemon.queue_de_fer(ennemi);
                    break;
    
                    case 3 : pokemon.charge(ennemi);
                    break;
    
                    case 4 : pokemon.quick_attack(ennemi);
                    break;
                }

            }

        }

        if(pokemon.pointsDeVie <= 0){
            alert(`${ennemi.nom} a gagné le combat!`)
        }else if(ennemi.pointsDeVie <=0){
            alert(`${pokemon.nom} a gagné le combat!`)
        }
    }
}

combat(ronflex,pikachu);

// ## BONUS : 

// ### Si tu es assez chaud, grâce au tableau de faiblesses que je t'ai fourni ci-dessus tu peux gérer les faiblesses. Ainsi un Pokemon eau subissant une attaque de type éléctrique se verra ramasser le double de dégats,etc ...

// ## BONUS II: 

// ### Si tu es encore plus chaud, tu peux rajouter une propriété défense dans la Class Pokemon afin d'avoir un vrai calcul de dégats ...

// ## N'oublie pas tes IMPORTS/EXPORTS

// ## COURAGE ET SI TU AS DES QUESTIONS J'Y REPONDRAIS (PAS)