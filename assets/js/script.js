import { states } from './states.js';

let testState = 'START';

const setState = () => {
    const answersListEl = document.querySelector('#answers');
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
            setHeaderAndQuestion(state.heading, state.paragraph, 0);
            setAnswers([], false);
            setButtons(state.buttons);
            break;
        case 'FAILED':
            state = states.failed;
            setHeaderAndQuestion(state.heading, state.paragraph, 0);
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
            state = states.questions;
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
        buttonsEl.appendChild(listEl);
    });
}

const setAnswers = (answers, show=true) => {
    show
        ? answersListEl.style.setProperty('visibility', 'visible')
        : answersListEl.style.setProperty('visibility', 'hidden');

    const answersListEl = document.querySelector('#answers');

    answersListEl.innerHTML = '';

    answers.forEach(answer => {
        const aTag = document.createElement('a');
        aTag.textContent = answer.text;
        const listEl = document.createElement('li').appendChild(aTag);
        answersListEl.appendChild(listEl);
    });

}

const timmer = (minutes) => {
    const timeEl = document.querySelector('#time');
    const interval = setInterval(() => {
        timeEl.innerHTML -= 1;
    }, 1000);
}

const startQuiz = (event) => {

}

// timmer();
setState();
testState = 'TIMEOUT';
setState();
// questionArea.addEventListener('click', startQuiz);