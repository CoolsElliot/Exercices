let allDivs = document.getElementsByTagName("div");
console.log(allDivs[allDivs.length - 1].firstElementChild);
console.log(allDivs[allDivs.length - 1].lastElementChild);
let allParagraphesInLastDiv = allDivs[allDivs.length - 1].getElementsByTagName("p");
console.log(allParagraphesInLastDiv[0].getElementsByTagName("i"));
console.log(allParagraphesInLastDiv[allParagraphesInLastDiv.length - 1].getElementsByTagName("b"));
console.log(allParagraphesInLastDiv[0].getElementsByTagName("i")[0].parentElement);
console.log(allParagraphesInLastDiv[allParagraphesInLastDiv.length - 1].getElementsByTagName("b")[0].parentElement);
console.log(allDivs[allDivs.length - 1].firstElementChild.nextElementSibling);


