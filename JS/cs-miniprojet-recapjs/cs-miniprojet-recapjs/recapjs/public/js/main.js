let exo1h2 = document.querySelector("#exo1").querySelector("h2");

exo1h2.innerText = "Titre Modifié"
exo1h2.style.color = "red";

let exo1div = document.querySelector("#exo1");
let exo2div = document.querySelector("#exo2");
let exo3div = document.querySelector("#exo3");
let exo4div = document.querySelector("#exo4");
let exo5div = document.querySelector("#exo5");
let exo6div = document.querySelector("#exo6");

let buttonsExo = document.querySelector("#buttons").children;
buttonsExo = [...buttonsExo];

function showExo1 (){
    exo1div.style.display = "block";
};

function showExo2 (){
    exo2div.style.display = "block";
};

function showExo3 (){
    exo3div.style.display = "block";
};

function showExo4 (){
    exo4div.style.display = "block";
};

function showExo5 (){
    exo5div.style.display = "block";
};

function showExo6 (){
    exo6div.style.display = "block";
};

function hideAllExo(){
    exo1div.style.display = "none";
    exo2div.style.display = "none";
    exo3div.style.display = "none";
    exo4div.style.display = "none";
    exo5div.style.display = "none";
    exo6div.style.display = "none";
};

function resetStyle(){
    for(let i = 0; i < buttonsExo.length; i++){
        buttonsExo[i].style.color = "blue";
        buttonsExo[i].style.backgroundColor = "white";
    }
};

for(let i = 0; i < buttonsExo.length; i++){

    buttonsExo[i].addEventListener("click", (e) => {

        switch(e.target){
            case buttonsExo[0] : 
                resetStyle();
                e.target.style.color = "white";
                e.target.style.backgroundColor = "blue";
                hideAllExo();
                showExo1();
                break;
    
            case buttonsExo[1] :
                resetStyle();
                e.target.style.color = "white";
                e.target.style.backgroundColor = "blue";
                hideAllExo();
                showExo2();
                break;

            case buttonsExo[2] :
                resetStyle();
                e.target.style.color = "white";
                e.target.style.backgroundColor = "blue";
                hideAllExo();
                showExo3();
                break;

            case buttonsExo[3] :
                resetStyle();
                e.target.style.color = "white";
                e.target.style.backgroundColor = "blue";
                hideAllExo();
                showExo4();
                break;

            case buttonsExo[4] :
                resetStyle();
                e.target.style.color = "white";
                e.target.style.backgroundColor = "blue";
                hideAllExo();
                showExo5();
                break;

            case buttonsExo[5] :
                resetStyle();
                e.target.style.color = "white";
                e.target.style.backgroundColor = "blue";
                hideAllExo();
                showExo6();
                break;
        };
    });
    
};


let inputExo3 = document.querySelector("#exo3").querySelector("input");
let buttonExo3 = document.querySelector("#exo3").querySelector("button");
let spanExo3 = document.querySelector("#exo3").querySelector("span");

function changeSpan() {
    spanExo3.innerText = inputExo3.value;
    inputExo3.value = "";
};

buttonExo3.addEventListener("click", changeSpan);

let carreRouge = document.createElement("div");
carreRouge.style.backgroundColor = "red";
carreRouge.style.width = "50px";
carreRouge.style.height = "50px";

let div1Exo4 = document.querySelector("#div1Exo4");
let div2Exo4 = document.querySelector("#div2Exo4");

div1Exo4.appendChild(carreRouge);

let buttonsExo4 = document.querySelector("#exo4buttons").children;

function isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
};

let compteur1 = 0;

function changePlaceDiv() {

    if(isEven(compteur1) != true){
        div1Exo4.appendChild(carreRouge);
        compteur1++;
    }else{
        div2Exo4.appendChild(carreRouge);
        compteur1++;
        
    }

    buttonsExo4[1].innerText = `Nombre de clics : ${compteur1}`;
};

buttonsExo4[0].addEventListener("click", changePlaceDiv);
buttonsExo4[1].addEventListener("click", changePlaceDiv);



let exo5button = document.querySelector("#exo5button");
let exo5divOeufs = document.querySelector("#exo5oeufs");

function addImg(){
    let newImg = document.createElement("img");
    newImg.setAttribute("src","./public/img/oeuf.png");
    newImg.setAttribute("width","40px");
    exo5divOeufs.appendChild(newImg);
}

exo5button.addEventListener("click", addImg);

let input1Calc1 = document.querySelector("#input1Calc1");
let input2Calc1 = document.querySelector("#input2Calc1");
let buttonCalc1 = document.querySelector("#buttonCalc1");
let reponseCalc1 = document.querySelector("#reponseCalc1");

function calc1() {
    let number1 = Number(input1Calc1.value);
    let number2 = Number(input2Calc1.value);
    let reponse = ( number1 + number2);
    reponseCalc1.innerText = reponse;
};

buttonCalc1.addEventListener("click", calc1);


let spanCalc2 = document.querySelector("#reponseCalc2");
let inputCalc2 = document.querySelector("#inputCalc2");
let buttons1Calc2 = document.querySelector("#buttons1Calc2").children;
let buttons2Calc2 = document.querySelector("#buttons2Calc2").children;
let buttons3Calc2 = document.querySelector("#buttons3Calc2").children;
let buttons4Calc2 = document.querySelector("#buttons4Calc2").children;

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btn0 = document.querySelector("#btn0");
let btnC = document.querySelector("#btnC");
let btnPlus = document.querySelector("#btnPlus");
let btnMoins = document.querySelector("#btnMoins");
let btnFois = document.querySelector("#btnFois");
let btnDiviser = document.querySelector("#btnDiviser");
let btnEgal = document.querySelector("#btnEgal");
let nbXPlus;
let nbXMoins;
let nbXFois;
let nbXDiviser;
let countPlus = 0;
let countMoins = 0;
let countFois = 0;
let countDiviser = 0;

let nb;
let operateur;

btn1.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 1;
});
btn2.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 2;
});
btn3.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 3;
});
btn4.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 4;
});
btn5.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 5;
});
btn6.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 6;
});
btn7.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 7;
});
btn8.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 8;
});
btn9.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 9;
});
btn0.addEventListener("click", () =>{
    inputCalc2.value = inputCalc2.value + 0;
});
btnC.addEventListener("click", () =>{
    nb = "";
    inputCalc2.value = "";
    spanCalc2.innerText = "";
    nbXPlus = "";
    nbXMoins = "";
    nbXFois = "";
    nbXDiviser = "";
    countPlus = 0;
    countMoins = 0;
    countFois = 0;
    countDiviser = 0;
});
btnPlus.addEventListener("click", () =>{
    if(countPlus > 0){
        if(countMoins > 0 || countFois > 0 || countDiviser > 0){
            switch(operateur){
                case "-" : 
                    nbXMoins = (Number(nb) - Number(inputCalc2.value));
                    nb = nbXMoins;
                    break;

                case "*" :
                    nbXFois = (Number(nb) * Number(inputCalc2.value));
                    nb = nbXFois;
                    break;

                case "/" :
                    nbXDiviser = (Number(nb) / Number(inputCalc2.value));
                    nb = nbXDiviser;
                    break;
            }
        }else{
            nbXPlus = (Number(nb) + Number(inputCalc2.value));
            nb = nbXPlus;
        }
        
    }else{
        if(countMoins > 0 || countFois > 0 || countDiviser > 0){
            switch(operateur){
                case "-" : 
                    nbXMoins = (Number(nb) - Number(inputCalc2.value));
                    nb = nbXMoins;
                    break;

                case "*" :
                    nbXFois = (Number(nb) * Number(inputCalc2.value));
                    nb = nbXFois;
                    break;

                case "/" :
                    nbXDiviser = (Number(nb) / Number(inputCalc2.value));
                    nb = nbXDiviser;
                    break;
            }
        }else{
            nb = inputCalc2.value;
        }
        
    }
    
    operateur = "+";
    inputCalc2.value = "";
    countPlus++;
});
btnMoins.addEventListener("click", () =>{
    if(countMoins > 0){
        if(countPlus > 0 || countFois > 0 || countDiviser > 0){
            switch(operateur){
                case "+" : 
                    nbXPlus = (Number(nb) + Number(inputCalc2.value));
                    nb = nbXPlus;
                    break;

                case "*" :
                    nbXFois = (Number(nb) * Number(inputCalc2.value));
                    nb = nbXFois;
                    break;

                case "/" :
                    nbXDiviser = (Number(nb) / Number(inputCalc2.value));
                    nb = nbXDiviser;
                    break;
            }
        }else{
            nbXMoins = (Number(nb) - Number(inputCalc2.value));
            nb = nbXMoins;
        }
        
    }else{
        if(countPlus > 0 || countFois > 0 || countDiviser > 0){
            switch(operateur){
                case "+" : 
                    nbXPlus = (Number(nb) + Number(inputCalc2.value));
                    nb = nbXPlus;
                    break;

                case "*" :
                    nbXFois = (Number(nb) * Number(inputCalc2.value));
                    nb = nbXFois;
                    break;

                case "/" :
                    nbXDiviser = (Number(nb) / Number(inputCalc2.value));
                    nb = nbXDiviser;
                    break;
            }
        }else{
            nb = inputCalc2.value;
        }
        
    }

    operateur = "-";
    inputCalc2.value = "";
    countMoins++;
});
btnFois.addEventListener("click", () =>{
    if(countFois > 0){
        if(countPlus > 0 || countMoins > 0 || countDiviser > 0){
            switch(operateur){
                case "+" : 
                    nbXPlus = (Number(nb) + Number(inputCalc2.value));
                    nb = nbXPlus;
                    break;

                case "-" :
                    nbXMoins = (Number(nb) - Number(inputCalc2.value));
                    nb = nbXMoins;
                    break;

                case "/" :
                    nbXDiviser = (Number(nb) / Number(inputCalc2.value));
                    nb = nbXDiviser;
                    break;
            }
        }else{
            nbXFois = (Number(nb) * Number(inputCalc2.value));
            nb = nbXFois;
        }
        
    }else{
        if(countPlus > 0 || countMoins > 0 || countDiviser > 0){
            switch(operateur){
                case "+" : 
                    nbXPlus = (Number(nb) + Number(inputCalc2.value));
                    nb = nbXPlus;
                    break;

                case "-" :
                    nbXMoins = (Number(nb) - Number(inputCalc2.value));
                    nb = nbXMoins;
                    break;

                case "/" :
                    nbXDiviser = (Number(nb) / Number(inputCalc2.value));
                    nb = nbXDiviser;
                    break;
            }
        }else{
            nb = inputCalc2.value;
        }
        
    }
    
    operateur = "*";
    inputCalc2.value = "";
    countFois++;
});
btnDiviser.addEventListener("click", () =>{
    if(countDiviser > 0){
        if(countPlus > 0 || countMoins > 0 || countFois > 0){
            switch(operateur){
                case "+" : 
                    nbXPlus = (Number(nb) + Number(inputCalc2.value));
                    nb = nbXPlus;
                    break;

                case "-" :
                    nbXMoins = (Number(nb) - Number(inputCalc2.value));
                    nb = nbXMoins;
                    break;

                case "*" :
                    nbXFois = (Number(nb) * Number(inputCalc2.value));
                    nb = nbXFois;
                    break;
            }
        }else{
            nbXDiviser = (Number(nb) / Number(inputCalc2.value));
            nb = nbXDiviser;
        }
        
    }else{
        if(countPlus > 0 || countMoins > 0 || countFois > 0){
            switch(operateur){
                case "+" : 
                    nbXPlus = (Number(nb) - Number(inputCalc2.value));
                    nb = nbXPlus;
                    break;

                case "-" :
                    nbXMoins = (Number(nb) - Number(inputCalc2.value));
                    nb = nbXMoins;
                    break;

                case "*" :
                    nbXFois = (Number(nb) * Number(inputCalc2.value));
                    nb = nbXFois;
                    break;
            }
        }else{
            nb = inputCalc2.value;
        }
        
    }
    
    operateur = "/";
    inputCalc2.value = "";
    countDiviser++;
});
btnEgal.addEventListener("click", () =>{
    switch(operateur){
        case "+" : 
            spanCalc2.innerText = `${Number(nb)} ${operateur} ${Number(inputCalc2.value)} = ${Number(nb) + (Number(inputCalc2.value))}`;
            inputCalc2.value = "";
            nb = "";
            nbXPlus = "";
            nbXMoins = "";
            nbXFois = "";
            nbXDiviser = "";
            countPlus = 0;
            countMoins = 0;
            countFois = 0;
            countDiviser = 0;
            break;
        
        case "-" : 
            spanCalc2.innerText = `${Number(nb)} ${operateur} ${Number(inputCalc2.value)} = ${Number(nb) - (Number(inputCalc2.value))}`;
            inputCalc2.value = "";
            nb = "";
            nbXPlus = "";
            nbXMoins = "";
            nbXFois = "";
            nbXDiviser = "";
            countPlus = 0;
            countMoins = 0;
            countFois = 0;
            countDiviser = 0;
            break;

        case "*" : 
            spanCalc2.innerText = `${Number(nb)} ${operateur} ${Number(inputCalc2.value)} = ${Number(nb) * (Number(inputCalc2.value))}`;
            inputCalc2.value = "";
            nb = "";
            nbXPlus = "";
            nbXMoins = "";
            nbXFois = "";
            nbXDiviser = "";
            countPlus = 0;
            countMoins = 0;
            countFois = 0;
            countDiviser = 0;
            break;

        case "/" : 
            spanCalc2.innerText = `${Number(nb)} ${operateur} ${Number(inputCalc2.value)} = ${Number(nb) / (Number(inputCalc2.value))}`;
            inputCalc2.value = "";
            nb = "";
            nbXPlus = "";
            nbXMoins = "";
            nbXFois = "";
            nbXDiviser = "";
            countPlus = 0;
            countMoins = 0;
            countFois = 0;
            countDiviser = 0;
            break;
    }
});








