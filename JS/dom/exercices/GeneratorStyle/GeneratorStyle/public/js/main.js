
/*Variables*/

let boutons = document.getElementById("buttons").children;
let inputs1 = document.getElementById("inputs1");
let inputs2 = document.getElementById("inputs2");
let bouton1 = document.getElementById("buttons").children[0];
let bouton2 = document.getElementById("buttons").children[1];
let bouton3 = document.getElementById("buttons").children[2];
let bouton4 = document.getElementById("buttons").children[3];
let bouton5 = document.getElementById("buttons").children[4];
let bouton6 = document.getElementById("buttons").children[5];
let bouton7 = document.getElementById("buttons").children[6];
let bouton8 = document.getElementById("buttons").children[7];
let bouton9 = document.getElementById("buttons").children[8];
let bouton10 = document.getElementById("buttons").children[9];
let input1 = document.getElementById("inputs1").children[0];
let input2 = document.getElementById("inputs1").children[1];
let input3 = document.getElementById("inputs1").children[2];
let input4 = document.getElementById("inputs1").children[3];
let input5 = document.getElementById("inputs1").children[4];
let input6 = document.getElementById("inputs1").children[5];
let input7 = document.getElementById("inputs2").children[0];
let input8 = document.getElementById("inputs2").children[1];
let input9 = document.getElementById("inputs2").children[2];
let input10 = document.getElementById("inputs2").children[3];
let input11 = document.getElementById("inputs2").children[4];
let canvas = document.getElementById("canvas");

/*Set Styles Buttons*/

boutons[0].style.backgroundColor = "lightgrey"

boutons[1].style.backgroundColor = "red"
boutons[1].style.color = "white"

boutons[2].style.backgroundColor = "green"
boutons[2].style.color = "white"

boutons[3].style.backgroundColor = "blue"
boutons[3].style.color = "white"

boutons[4].style.backgroundColor = "lightgrey";
boutons[4].style.border = "2px solid black";

boutons[5].style.backgroundColor = "lightgrey";
boutons[5].style.border = "2px dashed black";

boutons[6].style.backgroundColor = "lightgrey";
boutons[6].style.border = "2px dotted black";

boutons[7].style.backgroundColor = "lightgrey";

boutons[8].style.backgroundColor = "lightgrey";
boutons[8].style.borderTop = "4px solid red";


boutons[9].style.backgroundColor = "lightgrey";
boutons[9].style.borderTop = "10px solid red";

/*Functions*/

function bouton1Event(){
    canvas.style.backgroundColor = "lightgrey";
};
function bouton2Event(){
    canvas.style.backgroundColor = "red";
};
function bouton3Event(){
    canvas.style.backgroundColor = "green";
};
function bouton4Event(){
    canvas.style.backgroundColor = "blue";
};  
function bouton5Event(){
    canvas.style.border = "6px solid black";
};
function bouton6Event(){
    canvas.style.border = "6px dashed black";
};
function bouton7Event(){
    canvas.style.border = "6px dotted black";
};
function bouton8Event(){
    canvas.style.borderTop = "unset";
};
function bouton9Event(){
    canvas.style.borderTop = "12px solid black";
};
function bouton10Event(){
    canvas.style.borderTop = "36px solid black";
};
function input1Event(){
    canvas.style.borderColor = `${input1.value}`;
};
function input2Event(){
    canvas.style.borderWidth = `${input2.value}px`;
};
function input3Event(){
    canvas.style.borderTopWidth = `${input3.value}px`;
};
function input4Event(){
    canvas.style.borderRightWidth = `${input4.value}px`;
};
function input5Event(){
    canvas.style.borderBottomWidth = `${input5.value}px`;
};
function input6Event(){
    canvas.style.borderLeftWidth = `${input6.value}px`;
};
function input7Event(){
    canvas.style.borderRadius = `${input7.value}px`;
};
function input8Event(){
    canvas.style.borderTopLeftRadius = `${input8.value}px`;
};
function input9Event(){
    canvas.style.borderTopRightRadius = `${input9.value}px`;
};
function input10Event(){
    canvas.style.borderBottomRightRadius = `${input10.value}px`;
};
function input11Event(){
    canvas.style.borderBottomLeftRadius = `${input11.value}px`;
};

/*Events*/

bouton1.addEventListener("click",bouton1Event);
bouton2.addEventListener("click",bouton2Event);
bouton3.addEventListener("click",bouton3Event);
bouton4.addEventListener("click",bouton4Event);
bouton5.addEventListener("click",bouton5Event);
bouton6.addEventListener("click",bouton6Event);
bouton7.addEventListener("click",bouton7Event);
bouton8.addEventListener("click",bouton8Event);
bouton9.addEventListener("click",bouton9Event);
bouton10.addEventListener("click",bouton10Event);
input1.addEventListener("change",input1Event);
input2.addEventListener("change",input2Event);
input3.addEventListener("change",input3Event);
input4.addEventListener("change",input4Event);
input5.addEventListener("change",input5Event);
input6.addEventListener("change",input6Event);
input7.addEventListener("change",input7Event);
input8.addEventListener("change",input8Event);
input9.addEventListener("change",input9Event);
input10.addEventListener("change",input10Event);
input11.addEventListener("change",input11Event);










