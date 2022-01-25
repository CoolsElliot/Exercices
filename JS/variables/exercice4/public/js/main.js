// EXERCICE 4 JS

//DEMANDER LE NOM DE L'UTILISATEUR ET LUI DIRE BONJOUR

var reponse = prompt("Veuillez entrer votre pseudo");

if(reponse == null){
    alert("Vous avez cliqué sur annuler");
}

else{
    alert("Bonjour" + " " + reponse);
}

//DEMANDER L'AGE DE L'UTILISATEUR ET LUI DIRE SON AGE

var reponse2 = prompt("Veuillez entrer votre âge");

if(reponse2 == null){
    alert("Vous avez cliqué sur annuler");
}

else{
    alert("Tu as" + " " + reponse2 + "ans");
}

//DEMANDER LE PRENOM ET NOM DE L'UTILISATEUR ET LUI REDIRE 

var reponse3 = prompt("Veuillez entrer votre nom")

if(reponse3 == null){
    alert("Vous avez cliqué sur annuler");
}

else{
    var reponse4 = prompt("Veuillez entrer votre prénom");

    if(reponse4 == null){
        alert("Vous avez cliqué sur annuler");
    }
    
    else{
        var reponse5 = reponse4 + " " + reponse3;
        alert("Tu es" + " " + reponse5);
    }

}

//DEMANDER LE PRENOM ET LE NOM DE L'UTILISATEUR ET UTILISER UNE METHODE SUR SON NOM POUR LE METTRE EN MAJUSCULE, STOCKER LES 2 DANS UNE VARIABLE, PUIS LUI REDIRE SON NOM ET PRENOM

var reponse6 = prompt("Veuillez entrer votre nom");

if(reponse6 == null){
    alert("Vous avez cliqué sur annuler");
}

else{
    var reponse7 = prompt("Veuillez entrer votre prénom");

    if(reponse7 == null){
        alert("Vous avez cliqué sur annuler");
    }
    
    else{
        var reponse8 = reponse6.toUpperCase();
        var reponse9 = reponse8 + " " + reponse7

        alert("Tu es" + " " + reponse9);
    }

}













