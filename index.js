var randomNumber1 = Math.ceil(Math.random()*6);

var images = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",images);

var randomNumber2 = Math.ceil(Math.random()*6);

var images2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",images2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}else{
    document.querySelector("h1").innerHTML="Draw";
}