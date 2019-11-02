'use strict';
var scoreCount;

// asking for name *************************************
function questionName() {
    var userName = prompt("What is your name?");
    var display = alert("Welcome " + userName + " !!");
}

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

// 6th question ***********************************************
function question6() {
    var spaceNeedle = 58;
    var guessCount = 4;
    var spaceNeedleAnswer = parseInt;

    while (spaceNeedle !== spaceNeedleAnswer && guessCount > 0) {
        var spaceNeedleAnswer = prompt("How old do you think the Space Needle is?");
        if (spaceNeedleAnswer === spaceNeedle) {
            alert("Correct!");
            break;
        }
        else if (spaceNeedleAnswer > spaceNeedle) {
            guessCount--;
            alert("try again too high");
        }
        else if (spaceNeedleAnswer < spaceNeedle) {
            guessCount--;
            alert("try again too low");
        }
        // else if (spaceNeedleAnswer !==  ) {
        //     guessCount--;
        //     alert("try again and put in a numberrr");
        // }
        if (guessCount === 0) {
            alert("I am sorry you are out of guesses the correct answer is 58");
        }
    }
}

// 7th question below *********************************

function question7() {
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

questionName();
question1();
question2();
question3();
question4();
question5();
question6();
question7();

// Score Count Result Requirement *************************************
// shows score as NaN whyyyyyy??????
var finalScoreUser = alert("You got " + scoreCount + " out of 5 correct!");

