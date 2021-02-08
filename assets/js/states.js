const states = {
  start: {
    heading: 'Coding Quiz',
    paragraph: 'A quiz on coding by someone who has not learned all of the in and outs of coding in 10 years of trying to learn.',
    buttons: [
      { 
        text: 'START',
        action: 'Start',
      },
    ],
  },
  passed: {
    heading: 'You passed the quiz!',
    paragraph: 'You scored: ',
    buttons: [
      { 
        text: 'Try Again?',
        action: 'Start',
      },
    ],
  },
  failed: {
    heading: 'You failed the quiz.',
    paragraph: 'You scored: ',
    buttons: [
      { 
        text: 'Try Again?',
        action: 'Start',
      },
    ],
  },
  timeout: {
    heading: 'You ran out of time',
    paragraph: 'Keep trying to answer all of the questions in the time allowed!',
    buttons: [
      { 
        text: 'Try Again?',
        action: 'Start',
      },
    ],
  },
  questioning: {
    buttons: [
      { 
        text: 'Quit',
        action: 'LoadQuitModal',
      },
    ],
    questions: [
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
        ],
      },
      {
        question: 'This is a second question that will not stump anyone but it should fill up enough space to try using a longer question than "Is this true or false?".',
        possibleAnswers: [
          {
            text: 'Answer 1',
            isCorrect: false,
          },
          {
            text: 'Answer 2',
            isCorrect: true,
          },
          {
            text: 'Answer 3',
            isCorrect: false,
          },
          {
            text: 'Answer 4',
            isCorrect: false,
          },
        ],
      },
    ],
  }
}

export { states };