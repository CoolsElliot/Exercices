// import {} from "./_class";
// import {} from "./_functions";

let input = document.querySelector("input");
let liste = document.querySelector("#liste");
let addButton = document.querySelector("#add");
let clearButton = document.querySelector("#clear");
let doButton = document.querySelector("#do");
let toDoButton = document.querySelector("#toDo");
let allButton = document.querySelector("#all");
let taches = [];

addButton.addEventListener("click", () => {
    let texte = input.value.trim();
    if (texte !== '') {
        ajouterTache(texte);
        input.value = '';
    } else {
        alert("Veuillez entrer une tâche !");
    }
});

input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let texte = input.value.trim();
        if (texte !== '') {
            ajouterTache(texte);
            input.value = '';
        } else {
            alert("Veuillez entrer une tâche !");
        }
    }
});

function ajouterTache(texte) {
    const toDo = {
        texte,
        id: Date.now()
    }

    afficherTache(toDo)
}

function afficherTache(toDo) {
    const item = document.createElement("li");
    item.setAttribute("data-key", toDo.id);
    item.className = "defaut";
    item.style.width = "100%";
    item.style.padding = "10px 4px";
    item.style.borderRadius = "4px";
    item.style.listStyle = "none";
    item.style.display = "flex";
    item.style.justifyContent = "space-between";

    const txt = document.createElement("span");
    const input = document.createElement("input");
    const boutons = document.createElement("div");
    const btnCheck = document.createElement("i");
    const btnModif = document.createElement("i");
    const btnDelete = document.createElement("i");

    txt.innerText = toDo.texte;
    btnCheck.className = "fas fa-check-square";
    btnModif.className = "fas fa-pen";
    btnDelete.className = "fas fa-trash-alt";
    btnCheck.style.backgroundColor = "blue";
    btnModif.style.backgroundColor = "green";
    btnDelete.style.backgroundColor = "red";
    btnCheck.style.color = "white";
    btnModif.style.color = "white";
    btnDelete.style.color = "white";
    btnCheck.style.borderRadius = "4px";
    btnModif.style.borderRadius = "4px";
    btnDelete.style.borderRadius = "4px";
    btnCheck.style.padding = "10px";
    btnModif.style.padding = "10px";
    btnDelete.style.padding = "10px";
    btnCheck.style.marginRight = "4px";
    btnModif.style.marginRight = "4px";
    btnDelete.style.marginRight = "4px";

    btnCheck.addEventListener("click", tacheFaite);
    btnModif.addEventListener("click", modifierTache);
    btnDelete.addEventListener("click", supprimerTache);
    txt.addEventListener("dblclick", modifierTache);

    item.appendChild(txt);
    item.appendChild(input);
    item.appendChild(boutons);
    boutons.appendChild(btnCheck);
    boutons.appendChild(btnModif);
    boutons.appendChild(btnDelete);

    liste.appendChild(item);
    taches.push(item);

}

function tacheFaite(e) {
    e.target.parentNode.parentNode.classList.toggle('finDeTache');
}

function modifierTache(e) {
    if (e.target.parentNode.parentNode.classList.contains("finDeTache") !== true) {
        e.target.parentNode.parentNode.querySelector("span").style.display = "none";
        e.target.parentNode.parentNode.querySelector("input").style.display = "block";
    }

    e.target.parentNode.parentNode.querySelector("input").addEventListener("keypress", (event) => {
        if (event.key == "Enter") {
            e.target.parentNode.parentNode.querySelector("span").style.display = "block";
            e.target.parentNode.parentNode.querySelector("span").innerText = e.target.parentNode.parentNode.querySelector("input").value;
            e.target.parentNode.parentNode.querySelector("input").style.display = "none";
        }
    })
};

function supprimerTache(e) {
    taches.forEach(el => {
        if (e.target.parentNode.parentNode.getAttribute('data-key') === el.getAttribute('data-key')) {
            el.remove();
            taches = taches.filter(li => li.dataset.key !== el.dataset.key);
        }
    })
};

toDoButton.addEventListener("click", () => {
    taches.forEach(el => {
        if (el.classList.contains('finDeTache')) {
            el.style.display = "none";
        } else {
            el.style.display = "flex";
        }
    })
});

doButton.addEventListener("click", () => {
    taches.forEach(el => {
        if (el.classList.contains('finDeTache')) {
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    })
});

allButton.addEventListener("click", () => {
    taches.forEach(el => {
        if (el.classList.contains('finDeTache')) {
            el.style.display = "flex";
        } else {
            el.style.display = "flex";
        }
    })
});

clearButton.addEventListener("click", () => {
    taches.forEach(el => {
        el.remove();
        taches = [];
    })
});
