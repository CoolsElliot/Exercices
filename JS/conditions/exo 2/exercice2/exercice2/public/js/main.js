/* 1. Les réponses boléenes part 1
A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables
Vérifiez si les valeures sont égales et renvoyez la réponse dans une alerte
L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : Le nombre x et le nombre y sont-ils égaux ? : réponse
2. Les réponses boléenes part 2
A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables
Vérifiez si la première valeures est plus petite que la seconde renvoyez la réponse dans une alerte
L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : Le nombre x et-il plus petit que le nombre y ? : réponse
3. Les réponses boléenes part 3
A l'aide de trois promptes récupérez 3 nombres et stockez les dans des variables
Additionner les deux premières valeures et comparer les avec la troiseme à l'aide de l'opérateur de comparaison ">"
L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? : reponse booléenne

4.Créer un programme qui récupère la phrase de l'utilisateur,l'utilisateur doit également pouvoir estimer le nombre de caractères compris dans la phrase, ensuit retourne a l'utilisateur si oui ou non son estimation était correct si ce n'était pas correct annonce lui que sa réponse est fausse et à combien d'unitéx il était éloignée de la vrai réponse, exemple si la chaine de caractères fait 100 caractères et que l'utilisateur répond 85 alors renvoyez lui "Incorrect tu étais à 15 unités de la bonne réponse !"
5. Créer un programme ou tu vérifies que l'utilisateur à bien rentrer son prénom dans le prompt
Si l'utilisateur ne rentre rien alors renvoyez un prompt avec comme texte "Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?
Sinon, Bonjour, prénom
A savoir ! Il est normal que la question n'est reposé qu'une seule fois
6.Trouver une méthode qui permet de répondre par l'affirmative et la negative
Lancer cette méthode en proposant à l'utilisateur de s'abonner
Si l'utilisateur confirme alors renvoyez lui un prompt pour lui demander quelle formule elle veut prendre Luxe ou Normal, selon ce qu'elle répond renvoyer une alert pour la féliciter de s'etre abonné
Si c'est Luxe renvoyez lui : Félicitation vous avez choisis la formule Luxe !
Si c'est normal renvoyez lui : Merci pour votre abonnement.
Si l'utilisateur ne répond rien demandez lui si elle est certaine avec la meme methode que vous avez trouvé par l'affirmative ou la negative
Si Elle répond par l'affirmation alors dite lui que c'est dommage et souhaiter lui une bonne journée
Si elle répond par la négative reproposez lui de choisir entre les formules Luxe ou Normal
7.Dans cet exercice il faudra préparer un mini quizz
Créer 2 variables contenant chacun un prompt posant une questions
Créer 2 variables contenant la réponses a chacune de ces questions
Si l'utilisateur ne répond a aucune réponse de manière correct alors affichez une alert pour lui dire qu'il à échoué
Si l'utilisateur répond correctement à une des deux questions alors dit lui qu'il y est presque et renvoyez lui comme information a quel question il a eu tord
Si l'utilisateur répond correctement à toutes les questions, félicitez le
8. Conditions sur les nombres
Lancez un prompt pour qu'un utilisateur entre son age (pour une réservation au cinéma). Suivant l'age entré, vous devez afficher une alerte (une seule) avec un des messages suivant :

Si la personne est majeur (18 ou plus) => affiche "vous êtes majeur, vous pouvez réserver"
Si la personne est mineur (moins que 18) => "vous êtes mineur, l’accès est réservé aux grands"
Ajoutons quelques conditions supplémentaires :

Si la personne n'est pas née (moins de 0) => "vous n’êtes même pas nés, n’essayez pas de tricher"
Si la personne est trop vieille (plus de 100) => "vous êtes encore vivant ? Évitez de voir ce film pour le rester."
Si la personne passe tout juste (pile 18) => "pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant."
L'ordre de ces conditions a de l'importance, il faut mettre les plus sensées d'abord. (si on vérifie < 18 puis < 0, on ne rentrera jamais dans la deuxième condition avec un else if ...)
Avancé :

Même chose sauf que l'utilisateur entre son année de naissance. Votre calcul pour obtenir l'age doit être fait en fonction de l'année actuelle (qui change chaque année).
9. Opérateurs Logique
Vous allez lancer plusieurs prompt et les stocker dans différentes variables. Puis faire des vérifications plus poussées et afficher une alerte avec les phrases mentionnées plus loin.

Lancer 3 prompts pour demander:
"est-ce que vous êtes riche ?"
"voulez-vous partir en vacance ?"
"est-ce que vous avez un chat ?"
Les 3 valeurs doivent être stockées dans 3 variables sachant que si on répond "oui" c'est considéré comme positif. (Stocker true/false dans les variables est une bonne façon de réaliser cet exercice.)
!!Attention!! les points suivant ne doivent pas être fait en même temps.

si la personne ne veut pas partir en vacance => affichez "pas de problème, ne partez pas en vacance" (utilisez l'opérateur "!")
Si la personne n'est pas riche ou qu'elle a un chat => "Même si vous le voulez, vous ne pouvez pas partir." (utiliser l'opérateur "!" ainsi que l'opérateur "||")
Si la personne est riche et n'a pas de chat => "Vous pourriez partir en vacance si vous le voulez" (utiliser "&&" et "!")
Si la personne est riche et n'a pas de chat et veut partir en vacance => "Tout est parfait, partez en vacance !" (utilisez "&&" et "!")
Même chose que le point précédent, mais seulement avec "||" et "!"
Si la personne n'est pas riche ou qu'elle a un chat ou qu'elle ne veut pas partir, et que tout ce qu'elle dit est faux... (n'oubliez pas d'utiliser des parenthèses) */


// 1. Les réponses boléenes part 1

// A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables

let nombre1 = +prompt("Saisir un nombre");
let nombre2 = +prompt("Saisir un nombre");

// Vérifiez si les valeures sont égales et renvoyez la réponse dans une alerte

if(nombre1 === nombre2){
    alert("Les nombres sont égaux");
}else{
    alert("Les nombres sont différents");
}

// L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : Le nombre x et le nombre y sont-ils égaux ? : réponse




// 2. Les réponses boléenes part 2

// A l'aide de deux promptes récupérez 2 nombres et stockez les dans des variables

let nombre3 = +prompt("Saisir le nombre x");
let nombre4 = +prompt("Saisir le nombre y");

// Vérifiez si la première valeur est plus petite que la seconde renvoyez la réponse dans une alerte
// L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : Le nombre x et-il plus petit que le nombre y ? : réponse

if(nombre3 < nombre4){
    alert("Le nombre x est plus petit que le nombre y")
}

if(nombre3 > nombre4){
    alert("Le nombre x est plus grand que le nombre y")
}




// 3. Les réponses boléenes part 3

// A l'aide de trois prompts récupérez 3 nombres et stockez les dans des variables

let nombre5 = +prompt("Saisir un nombre");
let nombre6 = +prompt("Saisir un nombre");
let nombre7 = +prompt("Saisir un nombre");

// Additionner les deux premières valeures et comparer les avec la troiseme à l'aide de l'opérateur de comparaison ">"

let somme = nombre5 + nombre6;

if(somme > nombre7){
    alert("La somme du premier nombre et du 2ème nombre est-elle plus grande que le troisième nombre ? Oui");
}else{
    alert("La somme du premier nombre et du 2ème nombre est-elle plus grande que le troisième nombre ? Non")
}

// L'alert doit renvoyer une phrase contenant les variables et se présentant comme ceci : La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? : reponse booléenne



// 4.Créer un programme qui récupère la phrase de l'utilisateur, l'utilisateur doit également pouvoir estimer le nombre de caractères compris dans la phrase, ensuit retourne a l'utilisateur si oui ou non son estimation était correct si ce n'était pas correct annonce lui que sa réponse est fausse et à combien d'unitéx il était éloignée de la vrai réponse, exemple si la chaine de caractères fait 100 caractères et que l'utilisateur répond 85 alors renvoyez lui "Incorrect tu étais à 15 unités de la bonne réponse !"

let phrase = prompt("Veuillez écrire une phrase");
let estimation = +prompt("À combien estimez-vous le nombre de caractères dans votre phrase ?");

if(phrase.length === estimation){
    alert("Bravo! Vous avez raison!")
}else{
    alert("Faux, tu étais à " + Math.abs(estimation - phrase.length) + " unités de la bonne réponse!");
}

alert("Il y avait " + phrase.length + " caractères dans la phrase");


// 5. Créer un programme ou tu vérifies que l'utilisateur à bien rentrer son prénom dans le prompt
// Si l'utilisateur ne rentre rien alors renvoyez un prompt avec comme texte "Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?
// Sinon, Bonjour, prénom
// A savoir ! Il est normal que la question n'est reposé qu'une seule fois

let prenom = prompt("Veuillez saisir votre prénom");
if(prenom == null || prenom == ""){
    prenom = prompt("Attention, vous devez remplir le champ ci-dessous, quel est votre prénom ?");
    alert("Bonjour, " + prenom);
}else{
    alert("Bonjour, " + prenom);
}



// 6.Trouver une méthode qui permet de répondre par l'affirmative et la negative
// Lancer cette méthode en proposant à l'utilisateur de s'abonner
// Si l'utilisateur confirme alors renvoyez lui un prompt pour lui demander quelle formule elle veut prendre Luxe ou Normal, selon ce qu'elle répond renvoyer une alert pour la féliciter de s'etre abonné
// Si c'est Luxe renvoyez lui : Félicitation vous avez choisis la formule Luxe !
// Si c'est normal renvoyez lui : Merci pour votre abonnement.
// Si l'utilisateur ne répond rien demandez lui si elle est certaine avec la meme methode que vous avez trouvé par l'affirmative ou la negative
// Si Elle répond par l'affirmation alors dite lui que c'est dommage et souhaiter lui une bonne journée
// Si elle répond par la négative reproposez lui de choisir entre les formules Luxe ou Normal

let reponse = window.confirm("Voulez-vous vous abonner ?");
if(reponse === true){
    let abonnement = prompt("Quelle formule désirez-vous ? Luxe ou Normal ? Veuillez écrire votre choix identiquement ci-dessous");
    if(abonnement === "Luxe"){
        alert("Félicitations, vous avez choisi la formule Luxe!");
    }
    if(abonnement === "Normal"){
        alert("Merci pour votre abonnement.");
    }
}else{
    let reponse2 = window.confirm("Êtes-vous certain(e) de ne pas vouloir vous abonner ? Cliquer sur OK pour confirmer");
    if(reponse2 === true){
        alert("Nous sommes désolés d'apprendre que vous n'êtes pas intêressé(e). Passez une excellent journée.")
    }else{
        let abonnement = prompt("Quelle formule désirez-vous ? Luxe ou Normal ? Veuillez écrire votre choix identiquement ci-dessous");
        if(abonnement === "Luxe"){
        alert("Félicitations, vous avez choisi la formule Luxe!");
        }
        if(abonnement === "Normal"){
            alert("Merci pour votre abonnement.");
        }
        
    }

}

// 7.Dans cet exercice il faudra préparer un mini quizz
// Créer 2 variables contenant chacun un prompt posant une questions
// Créer 2 variables contenant la réponses a chacune de ces questions
// Si l'utilisateur ne répond a aucune réponse de manière correct alors affichez une alert pour lui dire qu'il à échoué
// Si l'utilisateur répond correctement à une des deux questions alors dit lui qu'il y est presque et renvoyez lui comme information a quel question il a eu tord
// Si l'utilisateur répond correctement à toutes les questions, félicitez le

let questOne = prompt("Quelle est la méthode utilisée pour ajouter un élément à la fin d'un tableau ? (avec les parenthèses)");
let questTwo = prompt("Quelle est la méthode utilisée pour ajouter un élément au début d'un tableau ? (avec les parenthèses)");
if(questOne === "push()" && questTwo === "unshift()"){
    alert("Félicitations, vous avez trouvé les bonnes réponses!");
}else if(questOne === "push()" || questTwo === "unshift()"){
    if(questOne === "push()"){
        alert("Vous y étiez presque! La réponse à la question une était correcte, la seconde était : unshift()");
    }else{
        alert("Vous y étiez presque! La réponse à la question deux était correcte, la première était : push()");
    }
}else{
    alert("Vous avez échoué.");
}

/*8. Conditions sur les nombres
Lancez un prompt pour qu'un utilisateur entre son age (pour une réservation au cinéma). Suivant l'age entré, vous devez afficher une alerte (une seule) avec un des messages suivant :

Si la personne est majeur (18 ou plus) => affiche "vous êtes majeur, vous pouvez réserver"
Si la personne est mineur (moins que 18) => "vous êtes mineur, l’accès est réservé aux grands"
Ajoutons quelques conditions supplémentaires :

Si la personne n'est pas née (moins de 0) => "vous n’êtes même pas nés, n’essayez pas de tricher"
Si la personne est trop vieille (plus de 100) => "vous êtes encore vivant ? Évitez de voir ce film pour le rester."
Si la personne passe tout juste (pile 18) => "pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant."
L'ordre de ces conditions a de l'importance, il faut mettre les plus sensées d'abord. (si on vérifie < 18 puis < 0, on ne rentrera jamais dans la deuxième condition avec un else if ...)
Avancé :

Même chose sauf que l'utilisateur entre son année de naissance. Votre calcul pour obtenir l'age doit être fait en fonction de l'année actuelle (qui change chaque année).*/

let age = +prompt("Veuillez entrer votre âge pour voir ce film.");
if(age < 0){
    alert("Vous n'êtes même pas né! N'essayez pas de tricher!");
}else if(age < 18){
    alert("Vous êtes mineur, l'accès est réservé aux adultes.");
}else if(age === 18){
    alert("Vous pouvez rentrer, mais n'oubliez pas que ce film peut être choquant!");
}else if(age > 100){
    alert("Vous êtes encore vivant(e) ? Evitez de voir ce film si vous voulez le rester!");
}else if(age > 18){
    alert("Vous êtes majeur, vous pouvez réserver.");
}else if(age === NaN || age === "" || age == null){
    alert("Veuillez entrer un nombre!")
}else{
    alert("Erreur");
}



let dateDeNaissance = +prompt("Veuillez entrer votre année de naissance pour voir ce film (ex: 1986)");
if((2021 - dateDeNaissance) >= 18){
    alert("Vous êtes majeur, vous pouvez réserver");
}else{
    alert("Vous êtes mineur, l'accès est réservé aux adultes.");
}


/*9. Opérateurs Logique
Vous allez lancer plusieurs prompt et les stocker dans différentes variables. Puis faire des vérifications plus poussées et afficher une alerte avec les phrases mentionnées plus loin.

Lancer 3 prompts pour demander:
"est-ce que vous êtes riche ?"
"voulez-vous partir en vacance ?"
"est-ce que vous avez un chat ?"
Les 3 valeurs doivent être stockées dans 3 variables sachant que si on répond "oui" c'est considéré comme positif. (Stocker true/false dans les variables est une bonne façon de réaliser cet exercice.)
!!Attention!! les points suivant ne doivent pas être fait en même temps.

si la personne ne veut pas partir en vacance => affichez "pas de problème, ne partez pas en vacance" (utilisez l'opérateur "!")
Si la personne n'est pas riche ou qu'elle a un chat => "Même si vous le voulez, vous ne pouvez pas partir." (utiliser l'opérateur "!" ainsi que l'opérateur "||")
Si la personne est riche et n'a pas de chat => "Vous pourriez partir en vacance si vous le voulez" (utiliser "&&" et "!")
Si la personne est riche et n'a pas de chat et veut partir en vacance => "Tout est parfait, partez en vacance !" (utilisez "&&" et "!")
Même chose que le point précédent, mais seulement avec "||" et "!"
Si la personne n'est pas riche ou qu'elle a un chat ou qu'elle ne veut pas partir, et que tout ce qu'elle dit est faux... (n'oubliez pas d'utiliser des parenthèses)*/

let riche = prompt("Est-ce que vous êtes riche ? Répondez par oui ou par non");
if(riche === "oui"){
    riche = true;
}else if(riche === "non"){
    riche = false;
}else{
    alert("Vous n'avez pas répondu à la question, recommencez!");
}

let vacances = prompt("Voulez-vous partir en vacances ? Répondez par oui ou par non");
if(vacances === "oui"){
    vacances = true;
}else if(vacances === "non"){
    vacances = false;
}else{
    alert("Vous n'avez pas répondu à la question, recommencez!");
}

let chat = prompt("Avez-vous un chat ? Répondez par oui ou par non");
if(chat === "oui"){
    chat = true;
}else if(chat === "non"){
    chat = false;
}else{
    alert("Vous n'avez pas répondu à la question, recommencez!");
}

if(vacances != true){
    alert("Pas de problème, ne partez pas en vacances!");
}else if(riche != true || chat != false){
    alert("Même si vous le voulez, vous ne pouvez pas partir!");
}else if(riche != false && chat != true && vacances != false){
    alert("Tout est parfait, partez en vacances !")
}else if(riche != false && chat != true){
    alert("Vous pourriez partir en vacances si vous le vouliez");
}else if(riche != false || chat != true || vacances != false){
    alert("Vous pourriez partir en vacances si vous le vouliez");
}

