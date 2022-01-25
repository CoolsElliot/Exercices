// > Event Target

// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.cd

let div = document.getElementById("content");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

function ajouterBordure(e){
    div.style.border = "1px solid green";
};

function paragrapheGrasRouge(e){
    p.style.fontWeight = "bold";
    p.style.color = "red";
};

function h1Surligner(e){
    h1.style.backgroundColor = "lightblue";
};

function h2Min(e){
    h2.innerText = h2.textContent.slice(0,h2.textContent.length -1);
};

div.addEventListener("click", (e) =>{
    ajouterBordure(e);
    paragrapheGrasRouge(e);
    h1Surligner(e);
    h2Min(e);
});


// ### 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 

let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";

let section = document.querySelector("section");

section.style.padding = "50px"
let pSection = document.querySelectorAll("p")[1];

section.addEventListener("mouseover", () =>{
    pSection.innerText = text;
});
