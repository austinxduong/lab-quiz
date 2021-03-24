// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const button = document.getElementById('button');
const testResults = document.getElementById('test-results');

let score = 0

button.addEventListener('click' , () => {

    alert('welcome to my quiz');
    const confirmQuiz = confirm('Quizz time');
    if(!confirmQuiz){
        alert('thank you')
        return;
    }
const userInput = prompt ('Q');
const firstAnswer = isYes(userInput);
if(firstAnswer === true);
    score ++

testResults.textContent = score;

});