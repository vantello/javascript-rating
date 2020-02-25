function colored(diceId){
    //Agafa l'id, i li extreu el numero del dau. ID --> dice"2"
    var dice = diceId.substr(4);
    //Afegeix la class painted al dau clicat i a tots els anteriors. 
    for(i = 1;i<=dice;i++){
        document.getElementById("dice" + i).classList.add("painted");
    }
    //Treu la class painted als daus posteriors al dau clicat.
    for(i > dice; i <= 5;i++){
        document.getElementById("dice" + i).classList.remove("painted");
    }
}
document.addEventListener("click", function(event){
    //Es captura el lloc del document on s'ha clicat.
    var x = event.target;
    var dicesSpace = document.getElementById("dices");
    //Si el lloc de la pantalla on s'ha clicat conté el div amb l'id d'icons, torna false. 
    //Si no el conté, (!), torna true.
    if(!dicesSpace.contains(x)){
        for(i=1;i<=5;i++){
            document.getElementById("dice" + i).classList.remove("painted");
        }
    }
});

