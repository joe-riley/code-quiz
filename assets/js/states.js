const states = {
  start: {
    heading: 'Coding Quiz',
    paragraph: 'A quiz on coding by someone who has not learned all of the in and outs of coding in 10 years of trying to learn.',
    buttons: [
      { 
        text: 'START',
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
      {
        text: 'Set High Score?',
        action: 'Set High Score',
      }
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
    heading: 'Basic JavaScript',
    buttons: [
      { 
        text: 'Quit',
        action: 'LoadQuitModal',
      },
    ],
    questions: [
      {
        question: 'This is the first question that will not stump anyone but it should fill up enough space to try using a longer question than "Is this true or false?".',
        possibleAnswers: [
          {
            text: '1 Answer 1',
            isCorrect: true,
          },
          {
            text: '1 Answer 2',
            isCorrect: false,
          },
          {
            text: '1 Answer 3',
            isCorrect: false,
          },
          {
            text: '1 Answer 4',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'This is a second question that will not stump anyone but it should fill up enough space to try using a longer question than "Is this true or false?".',
        possibleAnswers: [
          {
            text: '2 Answer 1',
            isCorrect: false,
          },
          {
            text: '2 Answer 2',
            isCorrect: true,
          },
          {
            text: '2 Answer 3',
            isCorrect: false,
          },
          {
            text: '2 Answer 4',
            isCorrect: false,
          },
        ],
      },
    ],
  }
}

export { states };