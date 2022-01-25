class Personne {
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
    };
    seDeplacer(depart,arrivee){

        this.lieu = depart.nom;
        arrivee.personnes.push(this);
        depart.personnes.pop();
        console.log(`${this.nom} quitte le lieu : ${this.lieu}`);
        this.lieu = arrivee.nom;
        console.log(`${this.nom} arrive au lieu : ${this.lieu}`);
    };
    payerArticle(){
        for(let i = 0; i< this.mainDroite[0].contenu.length; i++){
            this.argent -= (this.mainDroite[0].contenu[i].prix)
            console.log(`${this.nom} a payé : ${this.mainDroite[0].contenu[i].prix} euros pour ${this.mainDroite[0].contenu[i].nom}`);
        };

    };
    couper(contenant,outil){
        for(let i = 0; i < contenant.contenu.length; i++){
            if(contenant.contenu[i].etat === "entier"){
                contenant.contenu[i].etat = outil.action;
                console.log(`${contenant.contenu[i].nom} est maintenant coupé et prêt à être cuit`);
            }
        }

    };
    prendrePanier(lieu){
        this.mainDroite.push(lieu.paniers[0]);
        lieu.paniers.splice(lieu.paniers[0],1);
        console.log(`${this.nom} a pris le ${this.mainDroite[0].nom}`);
    }
    remettrePanier(lieu){   
        lieu.paniers.unshift(this.mainDroite[0]);
        this.mainDroite.pop();
        console.log(`${this.nom} a remis le ${lieu.paniers[0].nom} à l'Épicerie`);
    }
};

class Lieu {
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    };
};

class Epicerie extends Lieu{
    constructor(nom,personnes,paniers,ingredients){
        super(nom,personnes,paniers,ingredients);
        this.paniers = paniers;
        this.ingredients = ingredients;
    }
}

class Outil {
    constructor(nom){
        this.nom = nom;
    };
    
};

class Couteau extends Outil{
    constructor(nom,action){
        super(nom,action);
        this.action = action;
    }
}

class Poele extends Outil{
    constructor(nom,contenu){
        super(nom,contenu);
        this.contenu = contenu;
    }
    cuire(){
            this.contenu = "omelette cuite";
            console.log(`Notre omelette est cuite ! La voici : l'${this.contenu} (qui a l'air délicieuse...). Bon appétit !`); 
    };
}

class Bol extends Outil{
    constructor(nom,contenu){
        super(nom,contenu);
        this.contenu = contenu;
    }
    melanger(contenant,nomMelange){
        for(let i = 0; i < contenant.contenu.length; i++){
            nomMelange.push(contenant.contenu[i]);
            nomMelange[i].etat = "mélangé";
            console.log(`${nomMelange[i].nom} est maintenant mélangé dans le bol`) 
        };

        console.log(`Mélange de : ${nomMelange[0].nom} ${nomMelange[1].nom} ${nomMelange[2].nom} ${nomMelange[3].nom} ${nomMelange[4].nom}, terminé !`);
        

    };
}

class Produit {
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    };
};

export {Personne,Lieu,Epicerie,Outil,Couteau,Poele,Bol,Produit}

