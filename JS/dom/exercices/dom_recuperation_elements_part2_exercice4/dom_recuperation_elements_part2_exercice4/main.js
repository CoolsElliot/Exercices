// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe

console.log(document.getElementsByClassName("redPurple"));

// ### 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence

console.log(document.querySelectorAll(".redPurple"));

// ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"

console.log(document.querySelectorAll("h1.redPurple"));

// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span

console.log(document.querySelectorAll("li,p,span"));

// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 

console.log(document.querySelectorAll("li.important,p"));

// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"

console.log(document.querySelectorAll("h1,span.redPurple"));