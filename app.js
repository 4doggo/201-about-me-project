'use strict';
var scoreCount;

// var checker1 to assigned it false in order to let the while loop to 
// start then the while loop starts and added checker1 assigned to true 
// after its correct for it to break out of the loop and it breaks the loop 
// because the while loop condition is broken. also added break after no 
// because i didnt need to let them reply again. lastly i reassigned the variable
// pencilQuestion again with the new prompt variable but kept the same 
// variable pencilQuestion because i did not want to change all the while loop
// variable. 

function question1() {

    var pencilQuestion = prompt('Is there a pencil type named Ticonderoga No. 2 pencil?').toLowerCase();
    var checker1 = false;

    while (checker1 === false) {

        if (pencilQuestion === 'yes' || pencilQuestion === 'y') {
            alert("Yay");
            scoreCount++
            checker1 = true;
        } else if (pencilQuestion === 'no' || pencilQuestion === 'n') {
            alert("ahhhhh wrong");
            break;
        }
        else {
            alert("Please at least reply ~~")
            pencilQuestion = prompt('Is there a pencil type named Ticonderoga No. 2 pencil?').toLowerCase();
        }

    }
    // var pencil = alert('The answer is yes')
}
question1();

function question2() {
    var einsteinQuestion = prompt('Albert Einstein failed every subject in school that wasnt math or physics').toLowerCase();
    var checker2 = false;

    while (checker2 === false) {
        if (einsteinQuestion === 'yes' || einsteinQuestion === 'y') {
            alert("Yuuuuhhhhh");
            scoreCount++
            checker2 = true;
        }
        else if (einsteinQuestion === 'no' || einsteinQuestion === 'n') {
            alert("ahh wrrrrong");
            break;
        }
        else {
            alert("Please at least reply ~~")
            einsteinQuestion = prompt('Albert Einstein failed every subject in school that wasnt math or physics').toLowerCase();
        }
        // var einstein = alert('The answer is yes')
    }
}
question2();

function question3() {
    var nascarQuestion = prompt('Do NASCAR engines burn 115-octane leaded gasoline?').toLowerCase();
    var checker3 = false;

    while (checker3 === false) {
        if (nascarQuestion === 'yes' || nascarQuestion === 'y') {
            alert("ahhhh wronggg");
            break;
        }
        else if (nascarQuestion === 'no' || nascarQuestion === 'n') {
            alert("correctttt");
            scoreCount++
            checker3 = true;
        }
        else {
            alert("Please at least reply ~~")
            nascarQuestion = prompt('Do NASCAR engines burn 115-octane leaded gasoline?').toLowerCase();

            // var nascar = alert('The answer is no')
        }
    }
}
question3();

function question4() {
    var naturalQuestion = prompt('Is Sucralose natural?').toLowerCase();
    var checker4 = false;

    while (checker4 === false) {
        if (naturalQuestion === 'yes' || naturalQuestion === 'y') {
            alert("naaahhhh");
            break;
        }
        else if (naturalQuestion === 'no' || naturalQuestion === 'n') {
            alert("jaaaahhh");
            scoreCount++
            checker4 = true;
        }
        else {
            alert("Please at least reply ~~")
            naturalQuestion = prompt('Is Sucralose natural?').toLowerCase();
        }
        // var natural = alert('The answer is no')
    }
}
question4();

function question5() {
    var checker5 = false;

    while (checker5 === false) {

        var horseradishQuestion = prompt('Is Horseradish sauce of German origin?').toLowerCase();
        if (horseradishQuestion === 'yes' || horseradishQuestion === 'y') {
            alert("Yay");
            scoreCount++
            checker5 = true;
        }
        else if (horseradishQuestion === 'no' || horseradishQuestion === 'n') {
            alert("ahhhhh wrong");
            break;
        }
        else {
            alert("Please at least reply ~~")
            horseradishQuestion = prompt('Is Horseradish sauce of German origin?').toLowerCase();
            // var horseradish = alert('The answer is yes');
        }
    }
}
question5();

// shows score as NaN whyyyyyy??????
var finalScoreUser = alert("You got " + scoreCount + " correct!");

// asking for name *************************************

var userName = prompt("What is your name?");

// userName = prompt("What is your name?");


// while (userName ===  )


//                         var username = prompt('What is your name?');
//                         username = toParseInt;
//                         var nameLength = 2;

//                         while (username < nameLength) {
//                             // if (username > nameLength) {
//                             alert("At least try putting some letters in");
//                             username = prompt('What is your name?');
//                             // }


var display = alert("Welcome " + userName + " !!");

// 6th question ***********************************************
var spaceNeedle = 58;
var guessCount = 3;
var spaceNeedleAnswer = prompt('How old do you think the Space Needle is?');
var spaceNeedleAnswerInteger = parseInt(spaceNeedleAnswer, 10);

do {
    guessCount--;

    if (spaceNeedleAnswerInteger === spaceNeedle) {
        alert('CORRECT!!!')
        break
    }
    else if (spaceNeedleAnswerInteger > spaceNeedle) {
        spaceNeedleAnswerInteger = prompt('try again too high')
    }
    else if (spaceNeedleAnswerInteger < spaceNeedle) {
        spaceNeedleAnswerInteger = prompt('try again too low')
    }
    else {
        prompt('please respond with a number')
    }
    if (guessCount === 0) {
        alert('I am sorry you are out of guesses the correct answer is 58')

    }
}
while (guessCount > 0 && spaceNeedleAnswerInteger !== spaceNeedle)


// 7th question below *********************************

function question() {
    var correctAnswerArray = ['mangoes', 'blueberries', 'grapes', 'bananas'];
    var userInput;
    var guessCount = 4;

    while (guessCount > 0) {
        userInput = prompt("What do you think my fav fruit is?").toLowerCase();
        guessCount--;

        for (var i = 0; i < correctAnswerArray.length; i++) {
            if (correctAnswerArray[i] === userInput) {
                alert("Correct!! " + userInput + " is one of my favorite fruits!!");
                return true;
            }
        }
        alert("wrong!! " + "you have " + guessCount + " guesses remaining");
    }

    alert("Nice try!!");

}
question();

