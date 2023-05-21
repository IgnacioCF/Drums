function play1(){
    var audio = new Audio('sounds/floating.mp3')
    audio.play()
}

//////////////////////////////////
//Detecting Buuton Press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var buttonInnerHTML = this.innerHTML
makeSoud(buttonInnerHTML);
}) 
}   

///////////////////////////////////
//others
function primerSonido(){
var audio = new Audio('sounds/crash.mp3')
audio.play()}

document.getElementById("olaola").addEventListener("click", function(){alert("ganar")})
document.getElementById("titulo").innerHTML= "chao"

// con esto seleccionamos el primer elemento y le dimos un addEventListener para que avisara cuando se hace click
//querySelector() and querySelectorAll()[0] is the same

//////////////////////////////////////////
//others
// add a METHOD we can create a function inside to another functionfor example:
function BellBoy(name,age,visa,languages){
    this.name = name
    this.age = age
    this.visa = visa
    this.languages = languages
    this.moveSuitcase =  function(){    
        alert("I'm " + name + ", may I take your suitcase")
    }
    // using anonimus function
    // var bellBoy1 = new BellBoy("ignacio", "32", "permanent","english")
}//bellboy1.age
//'32'
// bellboy1.moveSuitcase()

console.log("there is a calculator and a BellBoy robot inside")
///////////////////////////////////////////
//others
// inner carlculator
function add (num1,num2){
    return num1 + num2
}
function multiply (num1,num2){
    return num1* num2
}
function subtract(num1,num2){
    return num1-num2
}
function divide(num1,num2){
    return num1/num2
}

function carlculator(num1,num2,operator ){
    return operator( num1,num2)


}

//////////////////////////////////////////////////
// detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSoud(event.key)
    // usar punto !!!!!! no coma
})
//you can get the information of wich key was pressed

function makeSoud(key){
    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;
        case "a":
            var kickBass = new Audio('sounds/kick-bass.mp3')
            kickBass.play()
            break;
         case "s":
            var snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;
    
        default: alert("somethig dosent goes well")
            break;
        }
}