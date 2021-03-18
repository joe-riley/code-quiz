import { states } from './states.js';

let testState = 'START';
let currentScore = 0;
let timeIt;

const setState = () => {
    let state = {};
    switch(testState) {
        case 'START':
            state = states.start;
            setHeaderAndQuestion(state.heading, state.paragraph);
            setAnswers([], false);
            setButtons(state.buttons);
            break;
        case 'PASSED':
            state = states.passed;
            setHeaderAndQuestion(state.heading, state.paragraph, currentScore);
            setAnswers([], false);
            setButtons(state.buttons);
            break;
        case 'FAILED':
            state = states.failed;
            setHeaderAndQuestion(state.heading, state.paragraph, currentScore);
            setAnswers([], false);
            setButtons(state.buttons);
            break;
        case 'TIMEOUT':
            state = states.timeout;
            setHeaderAndQuestion(state.heading, state.paragraph);
            setAnswers([], false);
            setButtons(state.buttons);
            break;
        case 'QUESTIONING':
            state = states.questioning;
            questions(state);
            break;
    }
}

const setHeaderAndQuestion = (headerText, questionText, score=-1) => {
    const questionHeaderEl = document.querySelector('#question_area > h1');
    const questionEl = document.querySelector('#question');
    questionHeaderEl.textContent = headerText;
    questionEl.textContent = (score >= 0) ? `${questionText} ${score}` : questionText;
}

const setButtons = (buttons) => {
    const buttonsEl = document.querySelector('#buttons');

    buttonsEl.innerHTML = '';

    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.textContent = button.text;
        const listEl = document.createElement('li').appendChild(btn);
        if (button.action === 'startQuiz') {
            listEl.addEventListener('click', startQuiz);
        }
        else if (button.text === 'Quit') {
            listEl.addEventListener('click', quitQuiz);
        }
        else if (button.action === 'tryAgain') {
            testState = 'START';
            setState();
            listEl.addEventListener('click', quitQuiz);
        }
        
        buttonsEl.appendChild(listEl);
    });
}

const setAnswers = (answers, show=true) => {
    const answersListEl = document.querySelector('#answers');

    show
        ? answersListEl.style.setProperty('visibility', 'visible')
        : answersListEl.style.setProperty('visibility', 'hidden');

    answersListEl.innerHTML = '';

    answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.textContent = answer.text;
        btn.setAttribute('value', answer.isCorrect);
        const listEl = document.createElement('li').appendChild(btn);
        listEl.addEventListener('click', answerQuestion);
        answersListEl.appendChild(listEl);
    });
}

const questions = (questioning) => {
    if (questioning.questions.length === 0) {
        if(currentScore >= 1) {
            testState = 'PASSED';
            setState();
        } else {
            testState = 'FAILED';
            setState();
        }
        clearInterval(timeIt);
    } else {
        const { question, possibleAnswers } = questioning.questions.shift();
        console.log(question);
        setHeaderAndQuestion(questioning.heading, question);
        setAnswers(possibleAnswers);
        setButtons(questioning.buttons);
    }
};

const timmer = () => {
    const timeEl = document.querySelector('#time');
    let interval = setInterval(() => {
        if (timeEl.innerHTML <= 1) {
            clearInterval(interval);
        } 
        timeEl.innerHTML -= 1;
    }, 10);
    return interval;
}

const startQuiz = (event) => {
    currentScore = 0;
    setTimmer(500);
    timeIt = timmer();
    testState = 'QUESTIONING';
    setState();
}

const setTimmer = (seconds) => {
    const timeEl = document.querySelector('#time');
    timeEl.innerHTML = 500;
}

const answerQuestion = (event) => {
    console.log(event.target.value);
    if(event.target.value === 'true') {
        currentScore += 1;
    };
    setState();
}

const quitQuiz = (event) => {
    location.reload();
}

const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

const closeEls = document.querySelectorAll("[data-close]");

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}


setState();
testState = 'START';
setState();