var randomNumber1= Math.random()
randomNumber1= Math.floor( randomNumber1*6 ) + 1
var randomImage1= "images/dice" + randomNumber1 + ".png"
document.querySelectorAll(".img")[0].setAttribute("src", randomImage1)

var randomNumber2= Math.random()
randomNumber2= Math.floor( randomNumber2*6 ) + 1
var randomImage2= "images/dice" + randomNumber2 + ".png"
document.querySelectorAll(".img")[1].setAttribute("src", randomImage2)

if( randomNumber1 > randomNumber2){
	document.querySelector("h1").textContent= "⛳Player 1 wins"
}
else if( randomNumber1 < randomNumber2){
	document.querySelector("h1").textContent= "Player 2 wins ⛳"
}
else{
	document.querySelector("h1").textContent= "Match is draw"
}