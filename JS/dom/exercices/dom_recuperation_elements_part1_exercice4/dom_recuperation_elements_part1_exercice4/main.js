let secondH1 = document.getElementsByTagName("h1")[1];
console.log(secondH1.innerText);
let allLi = document.getElementsByTagName("li");
console.log(allLi[allLi.length - 1].innerText);
let firstP = document.getElementsByTagName("p")[0];
console.log(firstP.innerText.toUpperCase());
[...allLi].forEach(element => console.log(element.innerText.toUpperCase()));


