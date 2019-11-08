// 'use strict';
var score = 0;
var userName = prompt('What is your name?').toUpperCase();
console.log("do you think " + userName + " likes us?")

var likeTea = function () {
    var response = prompt(userName + " do I like tea? please answer yes or no").toUpperCase();
    console.log(userName + " entered " + response);

    if (response === 'NO') {
        alert("I drink more tea than water, I even have different tea sets and have studied tea ceremonies")
    }
    if (response === 'YES') {
        score++;
        alert("I do, I even have different tea sets and have studied tea ceremonies ")
    }
};
console.log(score);
var iceCream = function () {
    var response = prompt(userName + " do I like ice cream? please answer yes or no").toUpperCase();
    console.log(userName + " entered " + response);

    if (response === 'NO') {
        alert("but, I do")
    }
    if (response === 'YES') {
        alert("ice cream is life ")
        score++;
    }
};

var myLittlePony = function () {
    var response = prompt(userName + " Do I watchn My Little Pony? please answer yes or no").toUpperCase();
    console.log(userName + " entered " + response);

    if (response === 'NO') {
        alert(userName + " I watch it all the time with my son Braeden")
    }
    if (response === 'YES') {
        alert("It is on alllll the time. My four year old son is a total Brony ")
        score++;
    }
};

var canYouTouchYourToes = function () {
    var response = prompt(userName + " Can I touch my toes?? please answer yes or no").toUpperCase();
    console.log(userName + " entered " + response);

    if (response === 'NO') {
        alert(userName + " We all can if we try")
        score++;
    }
    if (response === 'YES') {
        alert("I probably could if I tried")
        score++;
    }
};

var doYouThinkIlike = function () {
    var response = prompt(userName + " Do you think I like grapes? please answer yes or no").toUpperCase();
    console.log(userName + " entered " + response);

    if (response === 'NO') {
        alert(userName + " correct! I do NOT like grapes because I feed them to the monsters just about every morning and I dont ever want to see grapes again!!")
        score++
    }
    if (response === 'YES') {
        alert("NOPE!I feed them to the monsters just about every morning and I dont ever want to see grapes again!")
    }
};


var numberGame = function () {
    var number;
    var counter = 1;
    correctAnswer = false; 
    while (number !== 5 && correctAnswer === false) {
        numberQ = parseInt(prompt('can you guess my favorite number?'))
        if (numberQ < 5) {
            alert('go higher!')
            counter++
        } if (numberQ === 5){
            alert('yay');
            correctAnswer = true;
            counter++;
        }
        else if (numberQ > 5) {
            alert('try lower')
            
        }
    }
}


function musicType() {
    var styles = ['METAL', 'RAP', 'CLASSICAL']
    for (var i = 0; i < 6; i++) {
        var question = prompt('can you guess my favorite music?')
        var answer = question.toUpperCase();

        for (var j = 0; j < styles.length; j++) {
            if (answer === styles[j]) {
                alert('correct')
                i = 6; 
                score++
                break; 
            }
        }
        if (i !== 6){
            alert('try again')
        }

    }
    

}

closeOut = function() {
    var closing = alert('Thank you for visiting, I secretly kept score. you got ' + score + ' out of seven questions right')
};

likeTea();
iceCream();
myLittlePony();
canYouTouchYourToes();
doYouThinkIlike();
numberGame();
musicType();
closeOut();
