// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc

let myH1 = document.querySelector("h1");

console.log(myH1);

function redWhite(){
    myH1.style.backgroundColor = "red";
    myH1.style.color = "white";
};

myH1.addEventListener("dblclick",redWhite);


// ### 2. Au hover du h3, son texte rétrécit d'un caractère 

let myH3 = document.querySelector("h3");

console.log(myH3);

function textMin(){
    myH3.innerText = myH3.textContent.slice(0,myH3.textContent.length -1);
};

myH3.addEventListener("mouseover",textMin);

// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir

let myP = document.querySelector("p");
let blueGoldCounter = 0;

function isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}

function blueGoldOn(){
    myP.style.backgroundColor = "blue";
    myP.style.color = "gold";
};

function blueGoldOff(){
    myP.style.backgroundColor = "unset";
    myP.style.color = "unset";
};

function blueGoldOk(){
    if(isEven(blueGoldCounter) != true){
        blueGoldOff();
    }else{
        blueGoldOn();
    }
    blueGoldCounter++;
};

myP.addEventListener("click",blueGoldOk);