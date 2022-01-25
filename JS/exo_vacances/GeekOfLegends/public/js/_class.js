class Boss {
    constructor(nom,pointsDeVie,pointsDattaque){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsDattaque = pointsDattaque;
    }
    enigma(){
        let enigme1 = ["Comment appelle-t-on le petit du lapin ? Répondre en minuscule et sans espaces :","lapereau"];
        let enigme2 = ["Si je suis muet, aveugle et sourd, combien de sens me reste-t-il ?",3];
        let enigme3 = ["On retrouve un homme mort dans un champ, il n'y a personne dans le champ, et pas non plus de traces de pas. L'homme a un sac sur le dos. Qu'est ce qu'il y a dans ce sac ?","parachute"];

        if(this.pointsDeVie <= (this.pointsDeVie/5)){
            alert(`${this.nom} vous donne une chance de gagner si vous répondez à cette énigme, vous avez 3 essais... Appuyez sur OK pour continuer`);

            let randomNumber = Math.ceil(Math.random() * 3);
            let reponse = "";

            switch(randomNumber){
                case 1 : reponse = prompt(enigme1[0]);
                break;

                case 2 : reponse = prompt(enigme2[0]);
                break;

                case 3 : reponse = prompt(enigme3[0]);
                break;
            };
            
            if(reponse === enigme1[1] || reponse === enigme2[1] || reponse === enigme3[1]){
                console.log(`Vous avez bien répondu à l'énigme de ${this.nom}, vous avez gagné !`);
            }else{
                for(i = 0; i < 2; i++){

                    randomNumber = Math.ceil(Math.random() * 3);

                    switch(randomNumber){
                        case 1 : reponse = prompt(enigme1[0]);
                        break;

                        case 2 : reponse = prompt(enigme2[0]);
                        break;

                        case 3 : reponse = prompt(enigme3[0]);
                        break;
                    };
                    if(reponse === enigme1[1] || reponse === enigme2[1] || reponse === enigme3[1]){
                        i = 2;
                    }
                };
            };
        };
        
    };
}

class Heros {
    constructor(){

    }
}