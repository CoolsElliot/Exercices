// // # Conditions

// // 1. Verifie si "5" est strictement égale à 5

// let verif = ("5" === 5);

// alert(verif);

// // 2. Posez une question à l'utilisateur qui doit repondre avec un chiffre, et stockez un nombre aleatoire entre 1 et 20. Si la personne devine au premier coup, vous lui dites comme quoi elle a réussi, sinon vous lui dites qu'elle a raté

// let chiffre = +prompt("Donnez un chiffre entre 1 et 20");
// let chiffreQuestion = Math.floor(Math.random() * 20);

// if(chiffre === chiffreQuestion){
//     alert("Vous avez réussi !");
// }else{
//     alert(`Vous avez échoué. Le chiffre était ${chiffreQuestion}`);
// }

// // 3. Créez une devinette (Un tableau avec des fruits, et vous devez deviner un fruit qui se trouve dans le tableau, si vous le trouvez, vous avez reussi, sinon vous avez raté)

// let fruits = ["pomme", "banane","cerise","orange"];
// let fruitsQuestion = prompt("Devinez un fruit qui se trouve dans mon tableau");
// if(fruitsQuestion === ""){
//     alert("Veuillez entrer un fruit.")
// }else{
//     for(let i = 0; i < fruits.length; i++){
//         if(fruitsQuestion === fruits[i]){
//             alert(`Bravo ! ${fruitsQuestion} se trouve dans le tableau.`);
//             break;
//         }else if(i === 3){
//             alert(`Vous avez échoué. Les fruits à deviner étaient : ${fruits}`)
//         }
//     }
// }

// // 4. Posez une question à l'utilisateur sur le jour qu'on se trouve, si il reponde "lundi", "mardi", "mercredi" ou "jeudi" on lui dit "je suis fatigué", et le reste de la semaine "ouaaaaai c'est le weekend"

// let jour = prompt("Quel jour on est ?");
// if(jour === "lundi" || jour === "mardi" || jour === "mercredi" || jour === "jeudi"){
//     alert("Je suis fatigué");
// }else if(jour === "vendredi" || jour === "samedi" || jour === "dimanche"){
//     alert("Ouaiii c'est le week-end !");
// }else{
//     alert("Ce n'est pas un jour de la semaine.");
// }
// // 5. Créer une variable qui affiche quel âge avez vous ? si l'âge de la personne de la personne est égal à 18 ou plus et que la personne à 30 ou moins elle rejoint la section des 18-30 ans sinon si la personne à 50 ans ou moins et plus de 30 ans elle rejoint la section des 30-50ans sinon si la personne à plus de 50 ans elle rejoint la section des plus de 50 ans sinon la personne est trop jeune pour rejoindre le site.

// let questionAge = +prompt("Quel âge avez-vous ?");
// if(questionAge < 18 && questionAge > 0){
//     alert("Vous êtes trop jeûne")
// }else if(questionAge >= 18 && questionAge <= 30){
//     alert("Vous rejoignez la section 18-30ans");
// }else if(questionAge < 30 && questionAge <= 50){
//     alert("Vous rejoignez la section 30-50ans");
// }else if(questionAge >50){
//     alert("Vous rejoignez la section 50ans et +");
// }else{
//     alert("Veuillez entrer votre âge réel.")
// }
// // 6. Créez 3 questions, si la personne repond bien à une seule question, elle a un message comme quoi elle a réussi

// let question1 = prompt("Quel-est mon prénom ?");
// let question2 = prompt("Quel-est mon âge ?");
// let question3 = prompt("Quel-est ma ville d'origine ?");
// let prenom = "Elliot";
// let age = 26;
// let ville = "Bruxelles"

// if(question1 === prenom || question2 === age || question3 === ville){
//     alert("Vous avez réussi avec au moins une réponse correcte");
// }else{
//     alert("Vous avez échoué");
// }
// // 7. La même chose que le 6 mais la personne doit repondre bien aux trois questions

// question1 = prompt("Quel-est mon prénom ?");
// question2 = prompt("Quel-est mon âge ?");
// question3 = prompt("Quel-est ma ville d'origine ?");
// prenom = "Elliot";
// age = 26;
// ville = "Bruxelles"

// if(question1 === prenom && question2 === age && question3 === ville){
//     alert("Vous avez réussi toutes les questions");
// }else{
//     alert("Vous avez échoué");
// }


// // # Tableaux
// // 1. Créez un tableau avec 5 éléments et supprimez le premier et le dernier

// let tab1 = ["a","b","c","d","e"];
// tab1.shift();
// tab1.pop();

// alert(tab1);

// // 2. Puis, ajoutez un élément à la fin et un au début

// tab1.push("e");
// tab1.unshift("a");

// alert(tab1);
// // 3. Grâce à une boucle, mettez tous les éléments du tableau en majuscule

// for(let i =0; i < tab1.length ; i++){
//     tab1[i] = tab1[i].toUpperCase();
// };

// alert(tab1);

// // 4. Trouvez une méthode qui permet de supprimer le 3ème élément dans connaitre sa position

// let index = tab1.indexOf("C");
// tab1.splice(index, 1);

// alert(tab1);
// // 5. Transformez un tableau en chaine de caractères avec 2 méthodes

// alert(typeof tab1);


// tab1 = tab1.toString();

// alert(typeof tab1);

// // 6. Transformez une chaine de caractères en array avec 2 méthodes

// tab1 = tab1.split();

// alert(typeof tab1);

// // # Functions
// // 1. Créez une fonction qui permet de returner la taille d'une chaine de caractères

// let tailleString = (string) => {
//     let result = string.length;
//     return result;
// }
// // 2. Créez une fonction qui permet de verifier quel est le type du parametre

// let typeParam = (param) => {
//     let result = typeof param;
//     return result;
// }

// alert(typeParam("Alo"));
// // 3. Créez une fonction qui permet de vérifier si le chiffre est plus grand ou égale à 50

// let plusOuMoinsGrand50 = (nb) => {
//     if(nb >= 50){
//         return true;
//     }else{
//         return false;
//     }
// }

// alert(plusOuMoinsGrand50(67));

// // 4. Créez une fonction qui permet de renvoyer la racine cubique du parametre

// let racineCubique = (nb) => {
//     let result = Math.cbrt(nb);
//     return result;
// }

// alert(racineCubique(64));

// // 5. Créez une fonction qui met en majuscule qu'à partir de la 5ème lettre

// let majString = (string) => {
//     let result = string.substring(0,4).toLowerCase() + string.substring(4).toUpperCase();
//      return result;
// }

// alert(majString("abcdefghijklmnop"));

// // 6. Créez une fonction qui met en miniscule qu'à partir de la 9ème lettre

// let minString = (string) => {
//     let result = string.substring(0,8).toUpperCase() + string.substring(8).toLowerCase();
//      return result;
// }

// alert(minString("abcdefghijklmnop"));


// // 7. Fusionnez les deux fonctions

// let majMinString = (string) => {
//     let result = string.substring(0,4).toLowerCase() + string.substring(4,8).toUpperCase() + string.substring(8).toLowerCase();
//     return result;
// }

// alert(majMinString("abcdefghijklmnop"));

// // Boucles
// // 1. let question = prompt("Trois nains vont a la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisième?" +"(Réponse : le nain ______") + "ATTENTION, tant que tu ne répond pas a la question, la question réaparait";

// let question = prompt("Trois nains vont à la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisième ?" +" Reponse : le nain _______");

// for(let i = 2; question === "" || question === null; i++){
//     question = prompt(`Tant que tu ne réponds pas à la question, la question réapparait. Ceci est ta tentative numéro ${i}`);
// }

// if(question != ""){
//     alert(`Le troisième nain ${question}`);
// }

// // 2. Créez un tableau avec les élèves de la classe, et faites les passer dans un autre tableau

// let eleves = ["Elliot", "Baptiste", "Imane", "Louis", "Gursel"];

// let eleves2 = eleves;

// eleves = [];

// alert (eleves);

// alert(eleves2);


// 3. Créez un tableau avec des fruits, et tant que la personne veut supprimer un fruit, vous lui demandez lequel et il se supprime

let fruits = ["pomme", "fraise", "ananas", "raisin"];

let choix = window.confirm(`Voulez-vous supprimer un fruit ? ${fruits}`);

if(choix === true){

    let question = prompt("Quel fruit voulez-vous supprimer ?");

    for(let i= 0; i < 4; i++){
        for(let y = 0; i < fruits.length; i++){
            if(question == fruits[y]){
                fruits.splice(y, 1);
                alert(fruits);
                question = prompt("Retirer un nouveau fruit ?");
            }
        }
    }

    alert(`Merci, aurevoir !`);

}else{
    alert(`Merci, aurevoir !`);
}


// // 4. Faites la même chose que l'exercice 2 avec une boucle foreach

// let eleves = ["Elliot", "Baptiste", "Imane", "Louis", "Gursel"];

// let eleves2 = [];

// eleves.forEach(element =>{
//     eleves2.push(element);
// });

// if(eleves.length === eleves2.length){
//     eleves.splice(0, eleves.length);
// }

// alert(eleves);
// alert(eleves2);

