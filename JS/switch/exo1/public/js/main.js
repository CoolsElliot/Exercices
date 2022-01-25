/*- # Exo 1 Switch
    - ## Stockez dans une variable, via un prompt, un jour de la semaine.

    - ## À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
        - ### Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.
 
- # Exo 2 Switch
    - ## Déclarer une variable qui prendra comme valeur un type de météo

    - ## À l'aide d'un switch, affichez une réaction appropriée au temps
        - ### Ex: Il pleut. Je prend un parapluie
- # Exo 3 Switch
    - ### Déclarez une variable dont la valeur sera donnée par l'utilisateur.

    - ### Faites un switch, si la variable donnée est divisible par 2, faite une alert qui renvoit "Le nombre est un multiple de 2" sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur n'a pas rentré un nombre "Ceci n'est pas un nombre"
- # Exo 4 Switch
    - ### Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;

    - ###  Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

        - ### Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4*/


        //- # Exo 1 Switch
        //- ## Stockez dans une variable, via un prompt, un jour de la semaine.

        let jour = prompt("Jour de la semaine");
        jour = jour.toLowerCase();
    
        //- ## À l'aide d'un switch, affichez ce que vous avez planifié de faire ce jour-ci. 
            //- ### Ex:  On est lundi. Tu as cours  à MolenGeek et tu as sport en soirée.

        switch(jour){
            case "lundi" : 
                console.log("J'ai cours à MolenGeek et puis je sor en soirée");
                break;

            default:
                console.log("Veuillez checker ...");
                break;
        }


        //- # Exo 2 Switch
        //- ## Déclarer une variable qui prendra comme valeur un type de météo

        let meteo = prompt("Quel temps fait-il aujourd'hui ?");
        
        //- ## À l'aide d'un switch, affichez une réaction appropriée au temps
        //- ### Ex: Il pleut. Je prend un parapluie

        switch(meteo){
            case "pluie" :
                console.log("Il pleut je prend mon parapluie");
                break;
            default:
                console.log("Je ne vous comprends pas");
                break;
        }

        //- # Exo 3 Switch
        //- ### Déclarez une variable dont la valeur sera donnée par l'utilisateur.

        let nombre = +prompt("Donnez un nombre");
    
        //- ### Faites un switch, si la variable donnée est divisible par 2, faite une alert qui renvoit "Le nombre est un multiple de 2" sinon "Le nombre n'est pas un multiple de 2" ou encore si l'utilisateur n'a pas rentré un nombre "Ceci n'est pas un nombre"

        switch(nombre%2){
            case 0:
                console.log(`${nombre} est divisible par 2`);
                break;
            case 1:
                console.log(`${nombre} n'est pas divisible par 2`);
                break;
            default :
                console.log("Ceci n'est pas un nombre");
                break;
        }


        //- # Exo 4 Switch
        //- ### Déclarez trois variables que l'utilisateur remplira : nbr1 / operateur(+-/*) / nbr2;

        let nbr1 = +prompt("Premier nombre");
        let operateur = prompt("Opérateur");
        let nbr2 = +prompt("Nombre 2");

        //- ###  Faite switch qui en fonction de l'opérateur donné, effectuera le calcul avec cet opérateur et afficher le résultat.

        //- ### Ex:nbr1 = 1 | operateur = "+" | nbr2 = 3  => affichera 4*/

        switch(operateur){
            case "+":
                console.log(`${nbr1} + ${nbr2} = ${nbr1 + nbr2}`);
                break;
            case "-":
                console.log(`${nbr1} - ${nbr2} = ${nbr1 - nbr2}`);
                break;
            case "*":
                console.log(`${nbr1} * ${nbr2} = ${nbr1 * nbr2}`);
                break;
            case "/":
                console.log(`${nbr1} / ${nbr2} = ${nbr1 / nbr2}`);
                break;
            default:
                console.log("Je ne vous comprends pas");
                break;
        }


    