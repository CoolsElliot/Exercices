/* - # Variables temporaires
- # Exo 1
    - ## let a = 1; -> 2
    - ## let b = 2; -> 3
    - ## let c = 3; -> 1

    - ## Afficher le changement des variables

- # Exo 2
    - ## Afficher 4, 3, 2, 1
    - ## let a = 1; -> 4
    - ## let b = 2; -> 3
    - ## let c = 3; -> 2
    - ## let d = 4; -> 1

    - ## Afficher le changement des variables

- #  Exo 3
    - ## let a = 1; -> 2
    - ## let b = 2; -> 3
    - ## let c = 3; -> 4
    - ## let d = 4; -> 1

    - ## Afficher le changement des variables

- # Exo 4
    - ## Afficher 4, 3, 2, 1 avec une variable temporaire
    - ## let tableau = [1, 2, 3, 4];

- # Exo 5
    - ## let a = 1 -> 4
    - ## let b = 2 -> 5
    - ## let c = 3 -> 1
    - ## let d = 4 -> 2
    - ## let e = 5 -> 6
    - ## let f = 6 -> 3

    - ## Afficher le changement des variables */



// EXO 1

//- ## let a = 1; -> 2
//- ## let b = 2; -> 3
//- ## let c = 3; -> 1

/* let a = 1;
let b = 2;
let c = 3;

let temp = a;

a = b;
b = c;
c = temp;

console.log(a,b,c); */


//EXO 2

//- ## Afficher 4, 3, 2, 1
//- ## let a = 1; -> 4
//- ## let b = 2; -> 3
//- ## let c = 3; -> 2
//- ## let d = 4; -> 1

/*let a = 1;
let b = 2;
let c = 3;
let d = 4;

let temp = a;

a = d;
d = temp;
temp = b;
b = c;
c= temp;


console.log(a,b,c,d); */



// EXO 3

//- ## let a = 1; -> 2
//- ## let b = 2; -> 3
//- ## let c = 3; -> 4
//- ## let d = 4; -> 1

/* let a = 1; 
let b = 2;
let c = 3;
let d = 4;

let temp = d;

d = a;
a = b;
b = c;
c = temp;

console.log(a,b,c,d);*/


// EXO 4

//- ## Afficher 4, 3, 2, 1 avec une variable temporaire
//- ## let tableau = [1, 2, 3, 4];

/* let tableau = [1,2,3,4];

temp = tableau.reverse();

console.log(temp); */


// EXO 5


//- ## let a = 1 -> 4
//- ## let b = 2 -> 5
//- ## let c = 3 -> 1
//- ## let d = 4 -> 2
//- ## let e = 5 -> 6
//- ## let f = 6 -> 3

/* let a = 1; // 4
let b = 2; // 5
let c = 3; // 1
let d = 4; // 2
let e = 5; // 6
let f = 6; // 3

let temp = a;

a = d;
d = b;
b = e;
e = f;
f = c;
c = temp;

console.log(a, b, c, d, e, f); */



