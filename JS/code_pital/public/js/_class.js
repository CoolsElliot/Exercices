let salledAttente = {
    nom : "la salle d'attente",
    personnes : []
};

let maison = {
    nom : "la maison",
    personnes : []
};

let cimetiere = {
    nom : "le cimetiere",
    personnes : []
};

let doctor = {
    nom : "Doc",
    argent : 0,
    cabinet : {
        nom : "le cabinet du docteur Doc",
        personnes : []
    },
    diagnostiques : [["mal indenté","ctrl+maj+f"],["unsave","saveOnFocusChange"],["404","checkLinkRelation"],["azmatique","ventoline"],["syntaxError","f12+doc"]],

    patientIn(patientEntrant){
        if(this.cabinet.personnes.length > 0){
            this.patientOut(this.cabinet.personnes[0]);
        };

        this.cabinet.personnes.push(patientEntrant);
        salledAttente.personnes.splice(salledAttente.personnes.indexOf(patientEntrant),1);
        console.log(`${patientEntrant.nom} entre dans ${this.cabinet.nom}`);

        for(let i = 0; i < this.diagnostiques.length; i++){
            if(this.diagnostiques[i][0] === patientEntrant.maladie){
                patientEntrant.traitement = this.diagnostiques[i][1];
                console.log(`Docteur ${this.nom} a trouvé la maladie ! ${patientEntrant.maladie} ! chez ${patientEntrant.nom}`);
            }
        };

        patientEntrant.payer(50,doctor);

        
    },

    patientOut(patientSortant){
        salledAttente.personnes.push(this.cabinet.personnes[0]);
        this.cabinet.personnes.splice(this.cabinet.personnes[0],1);
        console.log(`${patientSortant.nom} sort du cabinet et revient dans ${salledAttente.nom}`);
    }
};

let pharmacie = {
    nom : "la pharmacie",
    personnes : [],
    traitement : [["ctrl+maj+f",60],["saveOnFocusChange",100],["checkLinkRelation",35],["ventoline",40],["f12+doc",20]],
    argent : 0
};


class Personne {
    constructor(nom,maladie,argent,poche,etatSante,traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
    }

    goTo(depart,arrivee){
        console.log(`${this.nom} quitte ${depart.nom}`);
        arrivee.personnes.push(this);
        console.log(`${this.nom} entre dans ${arrivee.nom}`);
        depart.personnes.splice(depart.personnes.indexOf(this),1);

    };
    takeCare(){
        if(this.traitement === this.poche[0]){
            this.etatSante = "guéri";
            console.log(`${this.nom} prend ${this.traitement} et est ${this.etatSante} !`);
            this.goTo(pharmacie,maison);
        }else{
            this.etatSante = "mort";
            console.log(`${this.nom} n'a pas pu acheter le traitement, il est donc ${this.etatSante}`);
            this.goTo(pharmacie,cimetiere);
        }

    };
    payer(montant,beneficiaire){
        if(this.argent >= montant){
            beneficiaire.argent += montant;
            this.argent -= montant;
            console.log(`${this.nom} a payé ${montant}euros à ${beneficiaire.nom}`);
        }else{
            console.log(`${this.nom} n'a pas assez d'argent pour payer`);
        }
        
    };

    chercherMedoc(lieu){
        for(let i = 0; i < lieu.traitement.length; i ++){
            if(this.traitement === lieu.traitement[i][0]){
                if(this.argent >= lieu.traitement[i][1]){
                    this.poche.push(lieu.traitement[i][0]);
                };
                this.payer(lieu.traitement[i][1],lieu);
                
            }
        }
    }
};

let marcus = new Personne("Marcus","mal indenté",100,[],"malade","inconnu");
let optimus = new Personne("Optimus","unsave",200,[],"malade","inconnu");
let sangoku = new Personne("Sangoku","404",80,[],"malade","inconnu");
let darthVader = new Personne("DarthVader","azmatique",110,[],"malade","inconnu");
let semicolon = new Personne("Semicolon","mal indenté",100,[],"malade","inconnu");

let patients = [marcus,optimus,sangoku,darthVader,semicolon];



export {Personne,marcus,optimus,sangoku,darthVader,semicolon,patients,salledAttente,doctor,pharmacie,maison,cimetiere}

