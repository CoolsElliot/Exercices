// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
};

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-competences"

let elements = document.getElementById("liste-competences").querySelectorAll("h2");

console.log(elements);

// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet

let i = 0;

for(entries in competences){
    elements[i].innerText = competences[entries];
    i++;
};

console.log(elements[0].textContent);
console.log(elements[1].textContent);
console.log(elements[2].textContent);
console.log(elements[3].textContent);
console.log(elements[4].textContent);

// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir

document.querySelector("h2").setAttribute("style","background-color: green; color: white;");
document.querySelectorAll("h2")[1].setAttribute("style","background-color: green; color: white;");
document.querySelectorAll("h2")[2].setAttribute("style","color: purple;");
document.querySelectorAll("h2")[3].setAttribute("style","background-color: red;");
document.querySelectorAll("h2")[4].setAttribute("style","background-color: yellow; color: black;");








