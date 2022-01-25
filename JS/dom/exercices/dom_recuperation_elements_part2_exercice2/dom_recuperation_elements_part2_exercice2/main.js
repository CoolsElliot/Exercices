console.log(document.getElementsByTagName("div")[0].firstElementChild.innerText);
console.log(document.getElementsByTagName("h3")[1].innerText);
console.log(document.getElementsByTagName("h3")[1].previousElementSibling.innerText);
console.log(document.getElementsByTagName("p")[1].nextElementSibling.innerText);
console.log(document.getElementsByTagName("li")[0,1,2,3].parentElement);
console.log(document.getElementsByTagName("ul")[0].parentElement.firstElementChild.innerText);
console.log(document.getElementsByTagName("li")[3].nextElementSibling.innerText);
console.log(document.getElementsByTagName("p")[3].nextElementSibling.nextElementSibling.innerText);
console.log(document.getElementsByTagName("span")[1].parentElement.nextElementSibling.firstElementChild.firstElementChild.innerText);
console.log(document.getElementsByTagName("span")[2].firstElementChild.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerText);
console.log(document.querySelector(".grandParagraphe").innerText);
console.log(document.querySelectorAll("li"));

let allLi = document.getElementsByTagName("li");

for(let i = 0; i < allLi.length; i++){
    console.log(allLi[i].innerText);
};

