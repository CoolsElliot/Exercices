myBody = document.getElementsByTagName("body");
firstElemBody = document.body.firstChild;
lastElemBody = document.body.lastChild;
console.log(firstElemBody);
exo4 = document.getElementsByTagName("div")[0].childNodes;
console.log(exo4);
firstLi = document.querySelector("li");
console.log(firstLi.nextElementSibling);
secondLi = document.getElementsByTagName("li")[1];
console.log(secondLi.previousElementSibling);

// let mybody = document.getElementsByTagName('body')[0]
// console.log(mybody.firstElementChild)
// console.log(mybody.lastElementChild)

// let exo4 = document.getElementsByTagName('div')[0].children
// console.log(exo4)

// let li = document.getElementsByTagName('li')[0].nextElementSibling
// console.log(li);
// console.log(li.previousElementSibling);
