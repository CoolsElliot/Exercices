// ### 1. Suit scrupuleusement les étapes ci-dessous
// - Récupère la div en passant par son id

let div = document.getElementById("content");

// - Créer une function avec comme paramètre "e" (qui symbolise "event") 
// - L'instruction de ta function est de faire un console.log de ton paramêtre e
// - Créer un écouteur d'événement "click" sur ta div et observe ce que ton console log renvoi quand tu clique sur :
//     - la div
//     - le premier h1
//     - le second h1
// - Ouvre ce que tu récupères dans tes console.log et cherche la propriété target, observe ce qu'il contient


// ### 2. Trouve le moyen d'afficher l'élément dans la console.log grace a la propriété target


// ### 3. Change ton console.log par une instruction qui permet de mettre sur l'élément un border red et observe en cliquant sur les éléments de ta page ce qu'il se passe

function nom1 (e){
    console.log(e.target);
    e.target.style.border = "1px solid red";
};

div.addEventListener("click",nom1);



// let div = document.getElementById("content");

// function logConsole (e){
//     // console.log(e.target);
//     e.target.style.border = "1px solid red";
// };

// div.addEventListener("click",logConsole);