// > Event Target

// ### 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçue en parametre dans le p de la section, sert toi du button Exo1




// ### 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :
// - Les couleurs sont contenu dans des variables sur le fichier main.js, sert-en pour les affecter au style de la balise h1
// - Il faut que ces variables soient envoyés en parametre dans la function via le addEventListener.


// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


//1

function machinChouette(contenu){
    document.querySelector("p").innerText = contenu;
};

let button = document.querySelector("input");

button.addEventListener("click",() => machinChouette(pContent));

//2

let h1 = document.querySelector("h1");

function chouetteMachin(color,background){  
    h1.style.color = color;
    h1.style.backgroundColor = background;
};

h1.addEventListener("click", () => chouetteMachin(theColor,theBackground));