console.log("Coucou");

// EXERCICE 1 ARRAY


// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22

let tableau = ["codingschool-20","codingschool-21","codingschool-22"];

// 2. Afficher les éléments de l'array

console.log(tableau);

// 3. Afficher le nombre d'éléments de l'array

console.log(tableau.length);

// 4. Afficher les éléments de l'array 1 par 1 

console.log(tableau[0]);
console.log(tableau[1]);
console.log(tableau[2]);


// EXERCICE 2 ARRAY 


// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22

let tableau2 = ["codingschool-20","codingschool-21","codingschool-22"];

// 2. Afficher les éléments de l'array

console.log(tableau2);

// 3. Ajouter et afficher votre prénom a l'array

tableau2.push("Elliot");

console.log(tableau2[0]);
console.log(tableau2[1]);
console.log(tableau2[2]);
console.log(tableau2[3]);

// EXERCICE 3 ARRAY


// 1. Créer une variable qui reçois un array avec 3 éléments -> coding 20, coding 21, coding 22

let tableau3 = ["codingschool-20","codingschool-21","codingschool-22"];

// 2. Afficher les éléments de l'array

console.log(tableau3);

// 3. Ajouter et afficher votre prenom a l'array

tableau3.push("Elliot");

// 4. Remplacer et afficher un élément de l'array par autre chose

tableau3.splice(4, 0, "Elias");

console.log(tableau3);


// EXERCICE 4 ARRAY 


// 1. Créer une variable qui reçois un array avec 3 éléments -> ex: coding 20, coding 21, coding 22

let tableau4 = ["codingschool-20","codingschool-21","codingschool-22"];


// 2. Afficher les éléments de l'array

console.log(tableau4);

// 3. Ajouter et afficher votre prenom a l'array

tableau4.push("Elliot");

// 4. Remplacer et afficher un élément de l'array par autre chose

tableau4.splice(4, 0, "Elias");

console.log(tableau4);

// 5. Effacer un élément de l'array

// La méthode pop() supprime le dernier élément.
// La méthode shift() supprime le premier élément.
// La méthode splice() supprime un élément selon une position donnée.

tableau4.shift();

// 6. Afficher le contenu le d'array

console.log(tableau4);



