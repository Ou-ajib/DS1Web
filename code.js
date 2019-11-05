// SADIK Mouaad-OUAJIB Aissam B23
var SCORE_MAX = 30;

//Html elements we need
var scores = document.getElementsByClassName("score-joueur");
var temp_scores = document.getElementsByClassName("score-joueur-courent");
var joueur0_panel = document.querySelector(".panel-joueur-0");
var joueur1_panel = document.querySelector(".panel-joueur-1");
var nom_joueur = document.getElementsByClassName("nom-joueur");
var de = document.querySelector(".de");
var btn_launcer = document.querySelector(".btn-lancer");
var btn_passer = document.querySelector(".btn-passe");
var btn_nouveau = document.querySelector(".btn-new");
//last de number.
var last_de = 0;


function init(){
    scores[0].innerHTML = "0";
    scores[1].innerHTML = "0";
    temp_scores[0].innerHTML = "0";
    temp_scores[1].innerHTML = "0";
    if(!joueur0_panel.classList.contains('actif')){
        joueur0_panel.classList.add('actif');
        joueur1_panel.classList.remove("actif");
    }
    de.style.display = "none";
}

function changePlayer(){
    //Togle the active palyer.
    joueur0_panel.classList.toggle("actif");
    joueur1_panel.classList.toggle("actif");
    //set Last de number to 0.
    last_de = 0;
}


//This function return the active user index
function activeUserIndex(){
    if(joueur0_panel.classList.contains('actif')) 
        return 0;
    return 1;
}


function launcer(){
    var number =  Math.floor((Math.random() * 6) + 1);
    de.setAttribute("src", "de-" +number+ ".png");
    de.style.display = "";
    //if the user get 6 two time in a row.
    //we reset his score to 0 and change active player.
    if(number == 6 && last_de == 6){
        scores[activeUserIndex()].innerHTML = 0;
        temp_scores[activeUserIndex()].innerHTML = 0;
        de.style.display = "none";
        changePlayer();
    }
    else {
        //if the user gets 1 his temporary score is set to 0.
        //and we change the current user.
        if(number != 1)
            temp_scores[activeUserIndex()].innerHTML = parseInt(temp_scores[activeUserIndex()].innerHTML) + number;
        //if he doesn't get we add the number he gets to his temporary score.
        else {
            de.style.display = "none";
            temp_scores[activeUserIndex()].innerHTML = 0;
            changePlayer();
        }
    }
    //we set the last de number to the number the user has got.
    last_de = number;
}

function joueurSuivant(){
    scores[activeUserIndex()].innerHTML = parseInt(scores[activeUserIndex()].innerHTML) + parseInt(temp_scores[activeUserIndex()].innerHTML);
    temp_scores[activeUserIndex()].innerHTML = 0;
    if(parseInt(scores[activeUserIndex()].innerHTML) >= SCORE_MAX){
        btn_launcer.setAttribute("disabled", "true");
        btn_passer.setAttribute("disabled", "true");
        nom_joueur[activeUserIndex()].innerHTML = "Vainqueur!";
    } else changePlayer();

    de.style.display = "none";
}

function nouveauPartie(){
    btn_launcer.disabled  = false;
    btn_passer.disabled  = false;
    nom_joueur[activeUserIndex()].innerHTML = "Joueur "+ (activeUserIndex()+1)+"<i class='ion-social-tux'></i>";
    init();
}
var button_max = document.createElement("button");
button_max.innerHTML = "Changer Score Max";
button_max.style.marginLeft = "20px";
button_max.style.cssFloat = "left";
var label = document.createElement("LABEL");
label.innerHTML = "Score Max : ";
label.style.marginLeft = "20px";
var input = document.createElement("INPUT");
input.setAttribute("type", "number");
input.setAttribute("value", 30);
input.setAttribute("min", 10);
input.style.margin = "20px";
input.style.padding = "10px";

document.body.appendChild(label);
document.body.appendChild(input);
document.body.appendChild(button_max);

btn_launcer.addEventListener('click', launcer);
btn_passer.addEventListener('click', joueurSuivant);
btn_nouveau.addEventListener('click', nouveauPartie);
button_max.addEventListener('click',function (){
    SCORE_MAX = parseInt(input.value);
});

init();