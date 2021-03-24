// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

import {isYes} from './isYes.js'; 

const button = document.getElementById('button');
const testResults = document.getElementById('test-results');

let score = 0

button.addEventListener('click' , () => {

    alert('YOU MADE IT TO MY QUIZ!!!');
    const confirmQuiz = confirm('Are you ready?');
    if(confirmQuiz === false){
        alert('alrighty :)')
        return;
    }
const userInput = prompt ('Do you feel like a looney toons?');
const firstAnswer = isYes(userInput);

if (firstAnswer === true) {

    score ++

}

console.log(score);

testResults.textContent = score;

})