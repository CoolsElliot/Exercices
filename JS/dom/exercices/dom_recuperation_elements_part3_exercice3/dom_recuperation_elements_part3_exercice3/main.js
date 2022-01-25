// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

let myObject = {
    nom: 'nicolas',
    age: 18,
}

// ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements

let myElements = document.getElementById("object").children

console.log(myElements);

// ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet

let myObjectProperties = Object.entries(myObject);

console.log(myObjectProperties);

// ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété

for (key in myObject){
    console.log(key);
};

// ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne

for (entries in myObject){
    console.log(myObject[entries]);
};

// ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle

let count = 0;

for(entries in myObject){
    count++;
    console.log(count);
};

// ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4

let i = 0;

for(entries in myObject){
    myElements[i].innerText = myObject[entries];
    i++;
};




