import React from 'react'
import { QuizModel } from '~/domain/models'
import { useStyles } from './quiz-styles'

const Quiz = () => {
  const { classes } = useStyles()
  const data: QuizModel = {
    title: 'This is a quiz',
    questions: [
      {
        title: 'What is your name?',
        answers: [
          { text: 'name1', score: 1, tag: 'name1' },
          { text: 'name2', score: 2, tag: 'name2' },
        ],
      },
      {
        title: 'What is your age?',
        answers: [
          { text: 'age1', score: 1, tag: 'age1' },
          { text: 'age2', score: 2, tag: 'age2' },
        ],
      },
    ],
    redirects: [
      { totalScore: 2, url: '/result-2' },
      { totalScore: 3, url: '/result-3' },
      { totalScore: 4, url: '/result-4' },
    ],
  }
  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <h2>{data.title}</h2>
        {data.questions.map((question) => (
          <React.Fragment key={question.title}>
            <div>{question.title}</div>
            <div>
              {question.answers.map((answer) => (
                <div key={answer.tag}>
                  <input type='radio' value={answer.tag} name={question.title} />
                  <span>{answer.text}</span>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Quiz
