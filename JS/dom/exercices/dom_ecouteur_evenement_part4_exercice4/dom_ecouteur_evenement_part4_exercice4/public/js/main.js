// Exercice 01 - focus
// Récupérer l'input avec getElementsByTagName(); et le stocker dans une variable
// Créer un écouteur d'événement avec comme déclencheur focus qui au focus de l'input met le fond en bleu


let input = document.getElementsByTagName("input")[0];

input.addEventListener("focus", () => {
    input.style.backgroundColor = "blue";
})

// Exercice 02 - "focus" la suite
// Récupérer l'input avec getElementsByTagName(); et le stocker dans une variable
// Créer un écouteur d'événement avec comme déclencheur focus qui au focus de l'input met le fond en bleu.
// Créer un écouteur d'événement avec comme déclencheur focusout qui a la sortie du focus le background n'est plus bleu

let input2 = document.getElementsByTagName("input")[1];

input2.addEventListener("focus" , () => {
    input2.style.backgroundColor = "blue";
})

input2.addEventListener("focusout", () => {
    input2.style.backgroundColor = "white";
})

// Exercice 03 - Copier
// Récupérer les trois paragraphe ainsi que le button avec getElementsByClassName(); et les stocker dans des variables
// Copie le contenu du secondParagraphe dans les deux autres
// A remplacer

// Mmm les tartines c'est délicieux

// A remplacer

let p1 = document.getElementsByClassName("premierParagraphe")[0];
let p2 = document.getElementsByClassName("secondParagraphe")[0];
let p3 = document.getElementsByClassName("dernierParagraphe")[0];
let button = document.getElementsByClassName("buttonExo")[0];

button.addEventListener("click", () => {
    p1.innerText = p2.textContent;
    p3.innerText = p2.textContent;
});

// Exercice 04 - Renommer
// Créer un programme qui permet de renommer
// Nicolas

let nomExo4 = document.getElementById("exo4")
let renameInput = document.getElementsByTagName("input")[2]
let btnExo4 = document.getElementsByTagName("button")[1]

rename = () => {
    nomExo4.textContent = renameInput.value
}

btnExo4.addEventListener("click", () => {
    rename()
})

// Exercice 05 - L'image
// Au clique du bouton valider, cela copie le chemin et le met dans l'attribut src de l'img
// Chemin : ./src/image/tartine.png

let btnExo5 = document.getElementsByTagName("button")[2]
let img = document.getElementsByTagName("img")[0]
btnExo5.addEventListener("click", () => {
    img.setAttribute('src', './src/image/tartine.png')
})

// Exercice 06 - Tartinashi la tartine voleuse
// Quand on clique sur la tartine, on récupère le chemin qui est stocké
// Quand on clique sur la Photo2 le chemin stocké y est ajouté

let img2 = document.getElementsByTagName("img")[1]
let img3 = document.getElementsByTagName("img")[2]
var linkImg2;

img2.addEventListener("click", () =>{
    linkImg2 = img2.getAttribute("src")
    console.log(linkImg2);
})

img3.addEventListener("click", () =>{
    img3.setAttribute("src", linkImg2)
})

// Exercice 07
// Interchange les deux textes au clique du button fléchés

let txt1 = document.getElementsByTagName("p")[5];
let txt2 = document.getElementsByTagName("p")[6];
let btnExo7 = document.getElementsByTagName("button")[3];
let a;

btnExo7.addEventListener("click", () => {
    a = txt1.textContent
    txt1.textContent = txt2.textContent
    txt2.textContent = a
})

