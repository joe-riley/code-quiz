const testingStates = {
    START,
    PASSED,
    FAILED,
    QUIT,
    TIMEOUT,
    QUESTIONING,
};

let testState = testingStates.START;

const setState = (testState) => {
    const states = states;
    const questionHeaderEl = document.querySelector('#question_area > h1');
    const questionEl = document.querySelector('#question');
    const answersListEl = document.querySelector('#answers');
    const buttonsEl = document.querySelector('#buttons');
    let state = {};
    switch(testState) {
        case START:
            state = states.start;
            break;
        case PASSED:
            state = states.passed;
            break;
        case FAILED:
            state = states.failed;
            break;
        case QUIT:
            state = states.quit;
            break;
        case TIMEOUT:
            state = states.timeout;
            break;
        case QUESTIONING:
            state = states.questions;
            break;
    }
}

const setHeaderAndQuestion(headerText, questionText) {
    const questionHeaderEl = document.querySelector('#question_area > h1');
    const questionEl = document.querySelector('#question');

}

const timmer = (minutes) => {
    const timeEl = document.querySelector('#time');
    const interval = setInterval(() => {
        timeEl.innerHTML -= 1;
    }, 1000);
}

const presentQuestions = () => {
    const questionArea = document.querySelector('#question_area');
}

const startQuiz = (event) => {

}

// timmer();
questionArea.addEventListener('click', startQuiz);