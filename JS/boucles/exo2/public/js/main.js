// //1. Exo 1 
//     //## Déclarer une variable qui se nomme 'multiplicateur' valant 5

//     let multiplicateur = 5

//     //## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

//     for(let i = 1; i < 10; i++){
//         console.log(`${multiplicateur} x ${i} = ${multiplicateur * i}`);
//     };

// //2. Exo 2
//     //## La même chose sauf qu'on incrémente par deux

//     let multiplicateur2 = 5

//     //## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

//     for(let i = 2; i < 10; i = i + 2){
//         console.log(`${multiplicateur2} x ${i} = ${multiplicateur2 * i}`);
//     };


// //3. Exo 3
//     //- Faire une boucle décendante pour les nombres pairs de 20 à 0
//     // Ex: 20-18-16, ect.

//     for(let i = 20; i >= 0; i = i - 2){
//         console.log(i);
//     }

// //4. Exo 4
//     //- Créer un tableau avec les prénoms des gens de la classe

//     let classe1 = ["Elliot","Isma","Amanda","Mohamed","Jade","Kevin","Louis","Ilias","Marcyl","Imane","Michael","Baptiste","Nicola","Samy","Gursel","Calvin","Aleksic","Elias"];

//     //- Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'

//     let longPrenoms = [];

//     for(let i = 0; i < classe1.length; i++){
//         if(classe1[i].length > 5){
//             longPrenoms.push(classe1[i]);
//         }
//     }

//     console.log(classe1);
//     console.log(longPrenoms);

// //5. Exo 5
//     //- Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//         //let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

//         let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

//     //- créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes

//      let grossesSommes = [];

//      for(let i = 0; i < sommes.length; i++){
//          if(sommes[i] > 60){
//             grossesSommes.push(sommes[i]);
//              sommes.splice(i, 1);
//             i--;
//          }
//      }

//     console.log(grossesSommes);

//     console.log(sommes);

// //6. Exo 6
//     //- Voici un tableau : 
//     //let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

//     let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

//     //- Triez le contenu du tableau donnees en verifiant le type de chaque donnée
//     //- Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.

//     let typeString = [];
//     let typeNumber = [];
//     let typeObject = [];
//     let typeAutre = [];

//     //- Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableaux.

//     for(let i = 0; i < donnees.length; i++){

//         if(typeof donnees[i] === "string"){
//             typeString.push(donnees[i]);
//             donnees.splice(i, 1);
//             i--;
//         }else if(typeof donnees[i] === "number"){
//             typeNumber.push(donnees[i])
//             donnees.splice(i, 1);
//             i--;
//         }else if(typeof donnees[i] === "object"){
//             typeObject.push(donnees[i]);
//             donnees.splice(i, 1);
//             i--;
//         }else{
//             typeAutre.push(donnees[i]);
//             donnees.splice(i, 1);
//             i--;
//         }

//     };

//     console.log(typeString);
//     console.log(typeNumber);
//     console.log(typeObject);
//     console.log(typeAutre);
//     console.log(donnees);


// //7. Exo 7
//     //- Créez un tableau avec les prénoms de toute la classe, et mettez leur première lettre en majuscule, la dernière lettre aussi, et le reste en minuscule

//     let classe2 = ["elliot","isma","amanda","mohamed","jade","kevin","louis","ilias","marcyl","imane","michael","baptiste","nicola","samy","gursel","calvin","aleksic","elias"];

//     for(let i = 0; i < classe2.length; i++){
//         classe2[i] = classe2[i].charAt(0).toUpperCase() + classe2[i].substring(1, classe2[i].length - 1) + classe2[i].charAt(classe2[i].length - 1).toUpperCase();
//     }

//     console.log(classe2);

//  //8. Exo 8
//     //- Créez une variable avec cette valeur = "Bonjour à tous"
//     let phrase = "Bonjour à tous";
//     //- Vous devez faire en sorte d'avoir ce resultat à la fin : BoNjOuR A ToUs

//     phrase = phrase.split("");

//     for(let i = 0; i < phrase.length; i += 2){
//         phrase[i] = phrase[i].toUpperCase();
//     };

//     phrase = phrase.join("");

//     console.log(phrase);


// //9. Exercice de puissance (Si vous le réussissez vous êtes des montres)

//     //Voici le tableau :

//     /*let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 1827, 1801, 1208, 1839, 1596, 1925];*/

let date = new Date().getMilliseconds()

console.log(date);

let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 1827, 1801, 1208, 1839, 1596, 1925];



//      //-  Trouve la combinaison de deux nombres dont le résultat est “2020”.

//      for(let i = 0; i < tab.length; i++){
//          for(let j = i +1 ; j < tab.length - 1; j++){
//              if(tab[i] + tab[j] === 2020){
//                  console.log(tab[i],tab[j]);
//              }
//          }
//      }

//      //-  Trouve la combinaison de trois nombres dont le résultat est “2020”.

let compteur = 0;

for (let i = 0; i < tab.length; i++) {
    for (let j = i + 1; j < tab.length - 1; j++) {
        if (tab[i] + tab[j] <= 2020) {
            for (let c = j + 1; c < tab.length - 2; c++) {
                compteur++;
                if (tab[i] + tab[j] + tab[c] === 2020) {
                    console.log(tab[i], tab[j], tab[c]);
                }
            }
        }
    }
}

console.log(compteur);

date = new Date().getMilliseconds()

console.log(date);
// //10. Utilisez une boucle for pour avoir ce résultat :

//  let pyramide = [1];
//  for (let index = 1; index <= 10; index++) {
//      console.log(pyramide.join(" "));
//      pyramide.push(1);

//  }

// //11.
//     //- Vous allez créer un tableau avec 10 prénoms
//     //- Vous allez créer un tableau avec 10 chiffres d'entre 0 et 20
//     //- Vous devez combiner ces deux tableaux :
//     // console.log(`${lepremiereprenom} a eu ${lepremierchiffre}/20 en Math`

//     let prenom = ["Momo","plop1","plop3","plop4","plop5","plop6","plop7","plop8","plop9","plop10"]
//     let note = [20,9,7,8,4,5,6,12,30,1564687486]

//     for ( i = 0; i < 10; i++) {
//         console.log(`${prenom[i]} a eu ${note[i]}/20 en Math`)
//     }





