// import {} from "./_class.js";
// import {} from "./_functions.js";

window.onload = () => {


    document.querySelector("div").style.display = "flex";
    document.querySelector("div").style.justifyContent = "center";
    document.querySelector("div").style.margin = "14px";

    let blocSize = 60;
    let jeuWidth = 600;
    let jeuHeight = 600;
    let casesNoires = [[0, 0], [120, 0], [240, 0],[360, 0], [480, 0], [60, 60], [180, 60], [300, 60], [420, 60], [540, 60], [0, 120], [120, 120], [240, 120], [360, 120], [480, 120], [60, 180], [180, 180], [300, 180], [420, 180], [540, 180], [0, 240], [120, 240], [240, 240], [360, 240], [480, 240], [60, 300], [180, 300], [300, 300], [420, 300], [540, 300], [0, 360], [120, 360], [240, 360], [360, 360], [480, 360], [60, 420], [180, 420], [300, 420], [420, 420], [540, 420], [0, 480], [120, 480], [240, 480], [360, 480], [480, 480], [60, 540], [180, 540], [300, 540], [420, 540], [540, 540]];
    let casesBlanches = [[60, 0], [180, 0], [300, 0], [420, 0], [540, 0], [0, 60], [120, 60], [240, 60], [360, 60], [480, 60], [60, 120], [180, 120], [300, 120], [420, 120], [540, 120], [0, 180], [120, 180], [240, 180], [360, 180], [480, 180], [60, 240], [180, 240], [300, 240], [420, 240], [540, 240], [0, 300], [120, 300], [240, 300], [360, 300], [480, 300], [60, 360], [180, 360], [300, 360], [420, 360], [540, 360], [0, 420], [120, 420], [240, 420], [360, 420], [480, 420], [60, 480], [180, 480], [300, 480], [420, 480], [540, 480], [0, 540], [120, 540], [240, 540], [360, 540], [480, 540]];
    let casesOccupees = [];
    let casesBlanchesOccupees = [];
    let casesNoiresOccupees = [];
    let jeu = document.querySelector("#jeu");
    let ctx = jeu.getContext('2d');
    let compteurJeu = 0;

    jeu.style.border = "6px solid #777";
    ctx.fillStyle = "rgb(93, 143, 93)";

    function isEven(value) {
        if (value % 2 == 0)
            return true;
        else
            return false;
    }

    // function getPosition(e){
    //     let x = new Number();
    //     let y = new Number();
    //     if(e.x != undefined && e.y != undefined){
    //         x = e.x;
    //         y = e.y;

    //         console.log(x,y);
    //     }
    // }

    function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        console.log("x: " + x + " y: " + y)
    }

    // let centerX = jeuWidth / 2;
    // let centerY = jeuHeight / 2;


    /*Creation des cases noires */

    for (let z = 0; z < jeuHeight; z += 120) {

        for (j = 0; j < jeuWidth; j += 120) {

            ctx.fillRect(j, z, blocSize, blocSize);
        }
    };

    for (let z = 60; z < jeuHeight; z += 120) {

        for (j = 60; j < jeuWidth; j += 120) {

            ctx.fillRect(j, z, blocSize, blocSize);
        }
    };
    

    /*Creation des pieces noires(noirs)*/

    let pionNoir = new Image();
    pionNoir.src = "public/img/2.png";

    pionNoir.onload = () => {

        for (let z = 0; z < 240; z += 120) {

            for (j = 0; j < jeuWidth; j += 120) {
                ctx.drawImage(pionNoir, j, z, blocSize, blocSize);
            }
        }

        for (let z = 60; z < 240; z += 120) {

            for (j = 60; j < jeuWidth; j += 120) {
                ctx.drawImage(pionNoir, j, z, blocSize, blocSize);
            }
        }

    };

    /*Creation des pieces blanches(rouges))*/

    let pionBlanc = new Image();
    pionBlanc.src = "public/img/1.png";

    pionBlanc.onload = () => {

        for (let z = 540; z > 360; z -= 120) {

            for (j = 0; j < jeuWidth; j += 120) {
                ctx.drawImage(pionBlanc, j, z, blocSize, blocSize);

            }
        }

        for (let z = 480; z > 300; z -= 120) {

            for (j = 60; j < jeuWidth; j += 120) {
                ctx.drawImage(pionBlanc, j, z, blocSize, blocSize);

            }
        }

    };


    alert("Nouvelle partie : Veuillez entrer le joueur 1 et le joueur 2");
    let joueur1 = prompt("Joueur 1 (rouges), quel-est votre prénom ?");
    let joueur2 = prompt("Joueur 2 (noirs), quel-est votre prénom ?");


    /*Stock des positions des cases occupées*/

    for (let z = 0; z < 240; z += 120) {

        for (j = 0; j < jeuWidth; j += 120) {
            casesOccupees.push([Number(j), Number(z)]);
        }
    };

    for (let z = 60; z < 240; z += 120) {

        for (j = 60; j < jeuWidth; j += 120) {
            casesOccupees.push([Number(j), Number(z)]);
        }
    };

    for (let z = 540; z > 360; z -= 120) {

        for (j = 0; j < jeuWidth; j += 120) {
            casesOccupees.push([Number(j), Number(z)]);

        }
    };

    for (let z = 480; z > 300; z -= 120) {

        for (j = 60; j < jeuWidth; j += 120) {
            casesOccupees.push([Number(j), Number(z)]);

        }
    };

    for (let i = 0; i < casesOccupees.length; i++) {
        for (let y = 0; y < casesBlanches.length; y++) {
            if (casesOccupees[i][0] === casesBlanches[y][0] && casesOccupees[i][1] === casesBlanches[y][1]) {
                casesBlanchesOccupees.push(casesBlanches[y]);
            }
        }
    };

    for (let i = 0; i < casesOccupees.length; i++) {
        for (let y = 0; y < casesNoires.length; y++) {
            if (casesOccupees[i][0] === casesNoires[y][0] && casesOccupees[i][1] === casesNoires[y][1]) {
                casesNoiresOccupees.push(casesNoires[y]);
            }
        }
    };

    // console.log(casesBlanches);
    // console.log(casesNoires);
    // console.log(casesOccupees);
    // console.log(casesNoiresOccupees);
    // console.log(casesBlanchesOccupees);

    // function play(blancs,noirs){
    //     if(isEven(compteurJeu) != true){
    //         for(let i = 0; i < casesNoiresOccupees.length; i++){
    //             casesNoiresOccupees[i].addEventListener("click", deplacerPion);
    //         }

    //     }else{
    //         for(let i = 0; i < casesBlanchesOccupees.length; i++){
    //             casesBlanchesOccupees[i].addEventListener("click", deplacerPion);
    //         }
    //     }
    // }

    // function deplacerPion(e){
    //     console.log(e.target)
    // }

    // play(joueur1,joueur2);

    jeu.addEventListener('click', function(e) {
        getCursorPosition(jeu, e)
    })

}

