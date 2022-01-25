import {Personne,marcus,optimus,sangoku,darthVader,semicolon,patients,salledAttente,doctor,pharmacie,maison,cimetiere} from "./_class.js";

let codePital = function(){
    for(let i =0; i < patients.length; i++){
        salledAttente.personnes.push(patients[i]);
        console.log(`${patients[i].nom} entre dans la salle d'attente`);
    };

    console.log(`La salle d'attente se compose de ${salledAttente.personnes.length} patients : ${salledAttente.personnes[0].nom}, ${salledAttente.personnes[1].nom}, ${salledAttente.personnes[2].nom}, ${salledAttente.personnes[3].nom}, ${salledAttente.personnes[4].nom}`);

    doctor.patientIn(marcus);

    doctor.patientIn(optimus);

    marcus.goTo(salledAttente,pharmacie);
    marcus.chercherMedoc(pharmacie);
    marcus.takeCare();

    doctor.patientIn(sangoku);

    optimus.goTo(salledAttente,pharmacie);
    optimus.chercherMedoc(pharmacie);
    optimus.takeCare();

    doctor.patientIn(darthVader);

    sangoku.goTo(salledAttente,pharmacie);
    sangoku.chercherMedoc(pharmacie);
    sangoku.takeCare();

    doctor.patientIn(semicolon);

    darthVader.goTo(salledAttente,pharmacie);
    darthVader.chercherMedoc(pharmacie);
    darthVader.takeCare();
    
    doctor.patientOut(semicolon);

    semicolon.goTo(salledAttente,pharmacie);
    semicolon.chercherMedoc(pharmacie);
    semicolon.takeCare();

};

export {codePital}