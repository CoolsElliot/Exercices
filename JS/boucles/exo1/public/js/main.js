/*let tableau = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

//for 

for(let i = 0; i < tableau.length; i++){
    console.log(tableau[i]);
}

//foreach
tableau.forEach(element =>{
    console.log(element);
});*/


//1. Exo 1 Boucles FOR
    //- Creer une varaible de type array et inserez toutes les personnes de la classe

    let classe1 = ["Elliot","Isma","Amanda","Mohamed","Jade","Kevin","Louis","Ilias","Marcyl","Imane","Michael","Baptiste","Nicola","Samy","Gursel","Calvin","Aleksic","Elias"];

    console.log(classe1.length);
    //- A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau

    for(let i = 0; i < classe1.length; i++){
        console.log(`Bonjour, ${classe1[i]}`);
    }


//2. Exo 2 Boucles FOR (let)
    //- Dans un prompt inserés un nombre 

    let nbr1 = +prompt("Insérez un nombre");
    //- A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.

    for(let i = 0; i <= nbr1; i++){
        console.log(i);
    }



//3. Exo 3 Boucles FOREACH
    //- Creer une varaible de type array et inserez toutes les personnes de la classe

    let classe2 = ["Elliot","Isma","Amanda","Mohamed","Jade","Kevin","Louis","Ilias","Marcyl","Imane","Michael","Baptiste","Nicola","Samy","Gursel","Calvin","Aleksic","Elias"];

    //- A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau

    classe2.forEach(element =>{
        console.log(`Bonjour, ${element}`);
    });

//4. Exo 4 Boucle FOREACH
   //- Créez un un array qui contient 5 éléments

   let tableau2 = [1,2,3,4,5];
   //- Affichez touts les éléments a l'aide d'une boucle foreach

   tableau2.forEach(element =>{
    console.log(element);
});

