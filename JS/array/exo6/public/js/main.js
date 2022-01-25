/*1. 
        - Supprimer le dernier élément de l'array
        - let monTab = ['pomme', 'fraise', 'melon', 'citron']
        - Supprimer le premier élément de l'array
        - Ajouter un élément a la fin de l'array
        - Ajouter un élément au debut de l'array
        - Mettre le deuxième élément en majuscule 
        - Changer l'ordre de l'array


    2.
        - Ordonner les chiffres
        - let chiffres = [4, 5, 2, 1, 3]
        - Première methode (Ordonner)
        - *Resultat : 1, 2, 3, 4, 5*
        - Deuxième methode (Concaténer les chiffres en un string)
        - *Resultat : 1-2-3-4-5*
        - Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau
        - Afficher l'array avec les chiffres ordonnées


    3. 
        - Créez un tableau vide
        - Ajouez 10 élément dans votre array
        - Affichez le contenu de l'array et sa taille
        - Touvez l'index de chaque éléments
        - Utiliser une methode qui permet de supprimer un element grâce à l'index
        - Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau
        - En une ligne supprimer 'Anis' du tableau */




         //1 - Supprimer le dernier élément de l'array
        //- let monTab = ['pomme', 'fraise', 'melon', 'citron']

        let monTab = ["pomme", "fraise", "melon", "citron"];

        monTab.pop();

        //- Supprimer le premier élément de l'array

        monTab.shift();

        //- Ajouter un élément a la fin de l'array

        monTab.push("mandarine");

        //- Ajouter un élément au debut de l'array

        monTab.unshift("poire");

        //- Mettre le deuxième élément en majuscule
        
        monTab[1] = monTab[1].toUpperCase();

        //- Changer l'ordre de l'array

        monTab.reverse();





         //2 - Ordonner les chiffres
        //- let chiffres = [4, 5, 2, 1, 3]

        let chiffres = [4,5,2,1,3];

        //- Première methode (Ordonner)

        chiffres.sort();

        //- *Resultat : 1, 2, 3, 4, 5*

        console.log(chiffres);

        //- Deuxième methode (Concaténer les chiffres en un string)

        chiffres = chiffres.join('-');
        
        //- *Resultat : 1-2-3-4-5*

        console.log(chiffres);

        //- Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau

        chiffres = Array.from(chiffres);

        let aSupprimer = ["-"];

        chiffres = chiffres.filter(item => !aSupprimer.includes(item));

        chiffres = JSON.parse("[" + chiffres + "]");
        
        //- Afficher l'array avec les chiffres ordonnées

        console.log(chiffres);

        







        //- Créez un tableau vide

        let myTab = [];

        //- Ajouez 10 élément dans votre array

        myTab.push("1","2","3","4","5","6","7","8","9","10");

        //- Affichez le contenu de l'array et sa taille

        console.log(myTab);
        console.log(myTab.length);

        //- Touvez l'index de chaque éléments

        console.log(myTab.indexOf("1"));
        console.log(myTab.indexOf("2"));
        console.log(myTab.indexOf("3"));
        console.log(myTab.indexOf("4"));
        console.log(myTab.indexOf("5"));
        console.log(myTab.indexOf("6"));
        console.log(myTab.indexOf("7"));
        console.log(myTab.indexOf("8"));
        console.log(myTab.indexOf("9"));
        console.log(myTab.indexOf("10"));

        //- Utiliser une methode qui permet de supprimer un element grâce à l'index

        myTab.splice(3,1);
        console.log(myTab);

        //- Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau

        let myClass = ["Adil","Isma","Calvin","Samy","Mohamed","Jade","Gursel","Kevin","Louis","Nicola","Marcyl","Baptiste","Michael","Amanda","Ilias","Imane","Elias","Alexsic","Elliot"];
        console.log(myClass.length);

        myClass.sort();

        console.log(myClass);

        console.log(myClass[Math.floor(Math.random() * 18)]);


        //- En une ligne supprimer 'Elliot' du tableau 

        myClass.splice(6,1);

        console.log(myClass);