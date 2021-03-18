import { states } from './states.js';

let testState = 'START';
let currentScore = 0;

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
            questionsLoop(state);
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
        listEl.addEventListener('click', startQuiz);
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

const questionsLoop = (questioning) => {
    questioning.questions.forEach(question => {
        console.log(question);
        setHeaderAndQuestion(questioning.heading, question.question);
        setAnswers(question.possibleAnswers);
        setButtons(questioning.buttons);
    })
};

const timmer = (minutes) => {
    const timeEl = document.querySelector('#time');
    const interval = setInterval(() => {
        timeEl.innerHTML -= 1;
    }, 1000);
}

const startQuiz = (event) => {
    testState = 'QUESTIONING';
    setState();
    console.log('quizstarted');
}

const answerQuestion = (event) => {
    console.log(event.target.value);
}

const quitQuiz = (event) => {

}


// timmer();
setState();
testState = 'START';
setState();
// questionArea.addEventListener('click', startQuiz);