const testingStates = {
    START,
    PASSED,
    FAILED,
    QUIT,
    TIMEOUT,
};

let testState = testingStates.START;

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