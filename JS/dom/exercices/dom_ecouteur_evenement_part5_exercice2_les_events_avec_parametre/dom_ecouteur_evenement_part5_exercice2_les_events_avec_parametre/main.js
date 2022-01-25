// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !

let div = document.querySelector("div");
let childsDiv = document.querySelector("div").children;

function machinChouette(e){
    console.log(e.target)
};

for(let i = 0;i < childsDiv.length;i++){
    childsDiv[i].addEventListener("click",machinChouette);
};

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

function chouetteMachin(e){
    e.target.style.textTransform = "uppercase";
};

for(let i = 0;i < childsDiv.length;i++){
    childsDiv[i].addEventListener("dblclick",chouetteMachin);
};

// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;

let styles = [`border: 1px solid gold`,`background-color : blue`,`background-color : red`,`border : 5px dotted gold`];

let button = document.querySelector("input");

// console.log(styles[2]);
//     childsDiv[0].setAttribute("style", )

function changeStyle(){
    let randomNumber = Math.floor(Math.random() * styles.length);
    console.log(randomNumber);
    for(let i = 0;i < childsDiv.length;i++){
        childsDiv[i].setAttribute("style",styles[randomNumber]);
    };
};

button.addEventListener("click", changeStyle);
