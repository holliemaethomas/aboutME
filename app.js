'use strict';
var OnePager = function () {
var userName = prompt('What is your name?').toUpperCase();
console.log("do you think " + userName + " likes us?")

var likeTea = function () {
    var response = prompt(userName + " do you like tea? please answer yes or no").toUpperCase();
console.log(userName + " entered " + response);

if (response === 'NO') {
    alert("I am slightly judging you")
}
if (response === 'YES'){
    alert("great we can be friends " + userName) 
}  
};

var iceCream = function () {
    var response = prompt(userName + " do you like ice cream? please answer yes or no").toUpperCase();
console.log(userName + " entered " + response);

if (response === 'NO') {
    alert("Are you by chance lactose intolerant?")
}
if (response === 'YES'){
    alert("ice cream is life ") 
}  
};

var myLittlePony = function () {
    var response = prompt(userName + " Have you ever watched my little pony? please answer yes or no").toUpperCase();
console.log(userName + " entered " + response);

if (response === 'NO') {
    alert(userName + " , you have not lived life")
}
if (response === 'YES'){
    alert("It is on alllll the time. My four year old son is a total Brony ") 
}  
};

var canYouTouchYourToes = function () {
    var response = prompt(userName + " Can you touch your toes?? please answer yes or no").toUpperCase();
console.log(userName + " entered " + response);

if (response === 'NO') {
    alert(userName + " We all can if we try")
}
if (response === 'YES'){
    alert("I probably could if I tried") 
}  
};

var doYouThinkIlike = function () {
    var response = prompt(userName + " Do you think I like grapes? please answer yes or no").toUpperCase();
console.log(userName + " entered " + response);

if (response === 'NO') {
    alert(userName + " correct! I do NOT like grapes because I feed them to the monsters just about every morning and I dont ever want to see grapes again!!")
}
if (response === 'YES'){
    alert("NOPE!I feed them to the monsters just about every morning and I dont ever want to see grapes again!") 
}  
};


likeTea();
iceCream();
myLittlePony();
canYouTouchYourToes();
doYouThinkIlike();

}

OnePager ();