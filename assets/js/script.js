const questions = [
    {
        question: 'This is a question that will not stump anyone but it should fill up enough space to try using a longer question than "Is this true or false?".',
        possibleAnswers: [
            {
                text: 'Answer 1',
                isCorrect: true,
            },
            {
                text: 'Answer 2',
                isCorrect: false,
            },
            {
                text: 'Answer 3',
                isCorrect: false,
            },
            {
                text: 'Answer 4',
                isCorrect: false,
            },
        ]
    },
]
    

let questionArea = document.querySelector('.question_area');


let timmer = () => {

}

let presentQuestions = () => {
}

let startQuiz = (event) => {
    console.log("pressed button");

}

questionArea.addEventListener('click', startQuiz);