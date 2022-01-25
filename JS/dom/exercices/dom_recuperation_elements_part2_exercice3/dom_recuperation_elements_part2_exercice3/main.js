// ### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console

console.log(document.querySelector("#content"));

// ### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console

console.log(document.querySelectorAll("#content")[0]);

// ### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console

console.log(document.querySelector(".important").innerText);
console.log(document.querySelector(".important").nextElementSibling.innerText);
console.log(document.querySelector(".important").nextElementSibling.nextElementSibling.innerText);
console.log(document.querySelector(".important").nextElementSibling.nextElementSibling.nextElementSibling.innerText);
console.log(document.querySelector(".important").nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText);

// ### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console

console.log(document.querySelectorAll(".important"));

// ### 5. Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule 

allLi = document.querySelectorAll("li");

allLi.forEach(element => console.log(element.innerText));

// allLi.forEach(element => console.log(element.innerText.replace(element.innerText.charAt(element.innerText.length -1),element.innerText.charAt(element.innerText.length -1).toUpperCase())));

allLi.forEach(element => console.log(element.innerText.substring(0,element.innerText.length-1)+element.innerText.charAt(element.innerText.length-1).toUpperCase()));

// ### 6. Récupère le p dont la class est "grandParagraphe" de la div id "content", tu dois ici utiliser un getElementById et un getElementsByClassName

console.log(document.getElementById("content").getElementsByClassName("grandParagraphe")[0].innerText);
