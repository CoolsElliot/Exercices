// <!-- > Sur base de l'html fourni :

// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.

let allLi = document.querySelector("ul").children;

// function sayMyName(event){
//     alert(event.target.textContent);
//     element.innerText = prompt("Changez le titre")
// };

// for(let i = 0; i < allLi.length; i++){
//     allLi[i].addEventListener("click",(event) => sayMyName(event));
// }

// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)

// liste.forEach(element => {
//     element.addEventListener("dblclick", () => sayMyName(element))
// })

// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser -->

let premierLi = document.querySelector("#li-one");
let deuxiemeLi = document.querySelector("#li-two");
let change = document.querySelectorAll("input")[2];


change.addEventListener("click", () => {
    let stockTemporaire = premierLi.value;
    premierLi.value = deuxiemeLi.value;
    deuxiemeLi.value = stockTemporaire;
});
