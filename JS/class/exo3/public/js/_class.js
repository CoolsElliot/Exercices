class Personne {
    constructor(nom,prenom,age,argent,panier){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.argent = argent;
        this.panier = panier;
    };
    prendre(produit){
        this.panier.push(produit);
    };
    acheter(){
        for(let i = 0; i < this.panier.length; i++){
            this.argent -= this.panier[i].prix;
            this.panier[i].achete = true;
        }   
    };
    deposer(lieu){
        for(let i = 0; i < this.panier.length; i++){
            lieu.armoire.push(this.panier.shift());
            i--
        }
    };
}

class Produit {
    constructor(nom,prix,taille,achete){
        this.nom = nom;
        this.prix = prix;
        this.taille = taille;
        this.achete = achete;
    }
}

class Appartement {
    constructor(nom,armoire,personnes){
        this.nom = nom;
        this.armoire = armoire;
        this.personnes = personnes;
    }
}

export {Personne,Produit,Appartement}