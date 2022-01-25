//1

let phrase = "bonjour tout le monde      ";

//2

console.log(phrase.length);

//3

phrase = phrase.trim();

//4
console.log(phrase.length);

//5

    // console.log(phrase.substring(phrase.length-1));

console.log(phrase.charAt(phrase.length-1));

//6

phrase = phrase.split("bonjour ").pop();
console.log(phrase)

//7

     /* phrase = "bonjour " + phrase */

phrase = String.prototype.concat("bonjour " + phrase)
console.log(phrase);

//8

phrase = phrase.replace(" tout le monde", "");
console.log(phrase);

//9

phrase = phrase.replace("bonjour", "string");
console.log(phrase);

//10

function randomNumber(max){
    return Math.floor(Math.random() * max)
}

console.log(randomNumber(10));

//11

     //phrase = phrase.replace("string", "boNjouR");

phrase = "bonjour tout le monde"

phrase = phrase.replace(phrase.charAt(2), phrase.charAt(2).toUpperCase());
phrase = phrase.replace(phrase.charAt(6), phrase.charAt(6).toUpperCase());
console.log(phrase);

//12

console.log(phrase.indexOf("o", phrase.indexOf("o")+1));

//13

let nom = "Elliot"
nom = nom.replace(nom.charAt(0), nom.charAt(0).toUpperCase());
nom = nom.replace(nom.charAt(5), nom.charAt(5).toUpperCase());
console.log(nom);








