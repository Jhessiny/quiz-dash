import React, { useEffect, useState } from 'react'
import { QuizModel } from '~/domain/models'
import { Question } from './components'
import { useStyles } from './quiz-styles'

const Quiz = () => {
  const { classes } = useStyles()
  const [currentQuestion, setCurrentQuestion] = useState(0)
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

  const handleResponse = () => {
    setCurrentQuestion((prev) => prev + 1)
  }

  const question = data.questions[currentQuestion]
  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <h2>{data.title}</h2>
        <Question
          title={question.title}
          answers={question.answers}
          handleResponse={handleResponse}
        />
      </div>
    </div>
  )
}

export default Quiz
