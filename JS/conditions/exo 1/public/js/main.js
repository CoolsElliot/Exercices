//- Les conditions - Exercice 1


    //1. Via un console.log() vérifie l'egalité entre 1 et "1"

    console.log(1 == "1");

    //2. Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"

    console.log(1 === "1");

    //3. Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "

    let nom = prompt("Veuillez saisir votre pseudo ( Minimum 5 lettres!)");

    if(nom.length < 5){
        alert("Votre nom est trop court!");
    }

    //4. Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.

    let reponse = +prompt("Combien font 2 + 8 ?");

    if(reponse === 10){
        alert("Bravo!");
    }
    
    else{
        alert("Vous ne savez pas compter!");
    }

    //5. Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"

    let reponse2 = +prompt("Combien font 6 x 8 ?");

    if(reponse2 === 42){
        alert("Bravo! La réponse était bien 42");
    }

    else if(reponse2 > 42){
        alert("Dommage! tu n'étais qu'a " + (reponse2 - 42) + " unités de la bonne réponse!");
    }

    else{
        alert("Dommage! tu n'étais qu'a " + (42 - reponse2) + " unités de la bonne réponse!");
    }

    //6. Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau

    let tableau = [];

    let val1 = prompt("Veuillez écrire ce que vous souhaitez stocker");
    tableau.push(val1);
    let val2= prompt("Veuillez écrire ce que vous souhaitez stocker");
    tableau.push(val2);
    let val3 = prompt("Veuillez écrire ce que vous souhaitez stocker");
    tableau.push(val3);

    if(tableau.length > 2){
        alert(tableau);
    }

    //7. Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

    let grandsNombres = [];

    let petitsNombres = [];

    let reponse3 = +prompt("Veuillez entrer un nombre plus grand que 12");

    if(reponse3 >= 12){
        grandsNombres.push(reponse3);
    }

    else{
        petitsNombres.push(reponse3);
    }

    let reponse4 = +prompt("Veuillez entrer un nombre plus petit que 12");

    if(reponse4 >= 12){
        grandsNombres.push(reponse4);
    }

    else{
        petitsNombres.push(reponse4);
    }

    alert("Le grand bac contient " + grandsNombres + " , Le petit bac contient " + petitsNombres);


    //8. Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions

    alert("Bonjour!");

    let = informations = [];

    let prenom = prompt("Veuillez entrer votre prénom");
    informations.push(prenom);

    let nomDeFamille = prompt("Veuillez entrer votre nom de famille");
    informations.push(nomDeFamille);

    let age2 = +prompt("Veuillez entrer votre âge");
    informations.push(age2);

    alert("Tu es " + prenom + " " + nomDeFamille + " , tu as " + age2 + " ans! " + "Réponds à une dernière question");

    let reponse5 = prompt("Aimes-tu Elias ? Répond par oui ou par non !");

    if(reponse5 === "oui")
    {
        alert("Cher " + prenom + " " + nomDeFamille + " , tu as bien raison!");
    }

    else if(reponse5 === "non"){
        alert("Cher " + informations + " , tu es viré de la coding school 22!");
    }

    else{
        alert("Écris bien !");
    }



