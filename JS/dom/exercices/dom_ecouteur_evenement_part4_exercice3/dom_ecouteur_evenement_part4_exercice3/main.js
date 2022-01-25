// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue

let h1 = document.querySelector("h1");

function textBlue() {
    h1.setAttribute("class", "text-blue");
};

h1.addEventListener("click", textBlue);

// ### 2. Au double clique du h3, rajoute la class text-error

let h3 = document.querySelector("h3");

function textError() {
    h3.setAttribute("class", "text-error");
};

h3.addEventListener("dblclick", textError);

// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 

let myP = document.querySelector("p");

myP.addEventListener("click", () => myP.classList.toggle('text-style'));

// if (myP.classList.includes('text-style'))
//     myP.classList.remove()
// else
//     myP.classList.add()

// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 

let myP2 = document.querySelectorAll("p")[1];

let allSpans1 = myP2.querySelectorAll("span");

allSpans1.forEach(element => element.addEventListener("click", () => element.setAttribute("class", "bolder")));

// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !

let myP3 = document.querySelectorAll("p")[2];

let allSpans2 = myP3.querySelectorAll("span");
console.log(allSpans2);

let span1 = allSpans2[0];
let span2 = allSpans2[1];
let span3 = allSpans2[2];

function bolderRed1(){

        span1.classList.add("bolder-red");

        if(span2.className === "bolder-red"){
            span2.classList.remove("bolder-red");
        }
        if(span3.className === "bolder-red"){
            span3.classList.remove("bolder-red");
        }
};

function bolderRed2(){
        span2.classList.add("bolder-red");

        if(span1.className === "bolder-red"){
            span1.classList.remove("bolder-red");
        }
        if(span3.className === "bolder-red"){
            span3.classList.remove("bolder-red");
        }
};

function bolderRed3(){

        span3.classList.add("bolder-red");

        if(span1.className === "bolder-red"){
            span1.classList.remove("bolder-red");
        }
        if(span2.className === "bolder-red"){
            span2.classList.remove("bolder-red");
        }
};

span1.addEventListener("click",bolderRed1);
span2.addEventListener("click",bolderRed2);
span3.addEventListener("click",bolderRed3);