console.log("hello");

var scores = document.getElementsByClassName("score-joueur");
var temp_scores = document.getElementsByClassName("score-joueur-courent");
var joueur0_panel = document.querySelector(".panel-joueur-0");
var joueur1_panel = document.querySelector(".panel-joueur-1");
var de = document.querySelector(".de");
var btn = document.querySelector(".btn-lancer");

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
    joueur0_panel.classList.toggle("actif");
    joueur1_panel.classList.toggle("actif");
}

function launcer(){
    var number =  Math.floor((Math.random() * 6) + 1);
    de.setAttribute("src", "de-" +number+ ".png");
    de.style.display = "";
    if(number != 1){
        if(joueur0_panel.classList.contains('actif')) 
            temp_scores[0].innerHTML = parseInt(temp_scores[0].innerHTML) + number;
        else 
            temp_scores[1].innerHTML = parseInt(temp_scores[1].innerHTML) + number;
    } else {
        changePlayer();
    }
}

btn.addEventListener('click', launcer);


init();