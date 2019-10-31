'use strict';

var pencil = prompt('Is there a pencil type named Ticonderoga No. 2 pencil?');
// always have the lowercase function before it processes the reply from user
pencil = pencil.toLowerCase()
if (pencil === 'yes') {
    // console.log('You are correct!')
}
else if (pencil === 'no') {
    // console.log('You are wrong!')
    pencil = pencil.toLowerCase()
}

var pencil = alert('The answer is yes')

var einstein = prompt('Albert Einstein failed every subject in school that wasnt math or physics');
einstein = einstein.toLowerCase()
if (einstein === 'yes') {
    // console.log('You are correct!')
}
else if (einstein === 'no') {
    // console.log('You are wrong!')
    einstein = einstein.toLowerCase()
}

var einstein = alert('The answer is yes')

var nascar = prompt('Do NASCAR engines burn 115-octane leaded gasoline?');
nascar = nascar.toLowerCase()
if (nascar === 'yes') {
    // console.log('You are correct!')
}
else if (nascar === 'no') {
    // console.log('You are wrong!')
    nascar = nascar.toLowerCase()
}

var nascar = alert('The answer is no')

var natural = prompt('Is Sucralose natural?');
natural = natural.toLowerCase()
if (natural === 'yes') {
    // console.log('You are correct!')
}
else if (natural === 'no') {
    // console.log('You are wrong!')
    natural = natural.toLowerCase()
}

var natural = alert('The answer is no')

var horseradish = prompt('Is Horseradish sauce of German origin?');
horseradish = horseradish.toLowerCase()
if (horseradish === 'yes') {
    // console.log('You are correct!')
}
else if (horseradish === 'no') {
    // console.log('You are wrong!')
    horseradish = horseradish.toLowerCase()
}

var horseradish = alert('The answer is yes');

var name = prompt('What is your name?');

var display = alert('Welcome ' + name + ' !!');

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
        break
    }
}
while (guessCount > 0 && spaceNeedleAnswerInteger !== spaceNeedle)


// 7th question below *********************************

var favoriteFoods = ['spaghetti', 'ramen', 'grapes'];
var guessCount = 4;
var correctGuessFlag = false;
var favoriteFoodAnswer = prompt('What do you think my favorite food is?');
console.log('first response', favoriteFoodAnswer);

do {
    guessCount--;

    for (var i = 0; i < favoriteFoods.length; i++) {
        if (favoriteFoods[i] === favoriteFoodAnswer) {
            alert('CORRECT!!!')
            correctGuessFlag = true;
            break;
        }
    }
    if (correctGuessFlag === false) {
        favoriteFoodAnswer = prompt('Wrong!!');
    }
} while (guessCount > 0 && correctGuessFlag === false);

// 8thquestion ***************************

